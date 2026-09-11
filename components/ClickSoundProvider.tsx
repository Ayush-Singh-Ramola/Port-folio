'use client';

import { useEffect, useRef } from 'react';

function isInteractiveTarget(target: EventTarget | null) {
    if (!(target instanceof Element)) {
        return false;
    }

    return Boolean(
        target.closest(
            'button, a, input, textarea, select, [role="button"], [data-click-sound]'
        )
    );
}

export default function ClickSoundProvider() {
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        const getAudioContext = () => {
            const AudioCtor =
                window.AudioContext ??
                (window as typeof window & { webkitAudioContext?: typeof AudioContext })
                    .webkitAudioContext;

            if (!AudioCtor) {
                return null;
            }

            if (!audioContextRef.current) {
                audioContextRef.current = new AudioCtor();
            }

            return audioContextRef.current;
        };

        const playClickSound = () => {
            const audioContext = getAudioContext();
            if (!audioContext) {
                return;
            }

            if (audioContext.state === 'suspended') {
                void audioContext.resume();
            }

            const now = audioContext.currentTime;
            const masterGain = audioContext.createGain();
            masterGain.gain.setValueAtTime(0.0001, now);
            masterGain.gain.exponentialRampToValueAtTime(0.06, now + 0.01);
            masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
            masterGain.connect(audioContext.destination);

            const toneA = audioContext.createOscillator();
            toneA.type = 'triangle';
            toneA.frequency.setValueAtTime(720, now);
            toneA.frequency.exponentialRampToValueAtTime(260, now + 0.12);
            toneA.connect(masterGain);

            const toneB = audioContext.createOscillator();
            toneB.type = 'sine';
            toneB.frequency.setValueAtTime(480, now);
            toneB.frequency.exponentialRampToValueAtTime(160, now + 0.08);
            toneB.connect(masterGain);

            toneA.start(now);
            toneB.start(now);
            toneA.stop(now + 0.12);
            toneB.stop(now + 0.12);
        };

        const handlePointerDown = (event: PointerEvent) => {
            if (event.button !== 0) {
                return;
            }

            if (isInteractiveTarget(event.target)) {
                playClickSound();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            const isActivationKey = event.key === 'Enter' || event.key === ' ';
            if (!isActivationKey) {
                return;
            }

            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }

            const isButtonLike =
                target instanceof HTMLButtonElement ||
                target instanceof HTMLAnchorElement ||
                target.closest('button, a, input, textarea, select, [role="button"], [data-click-sound]');

            if (isButtonLike) {
                playClickSound();
            }
        };

        document.addEventListener('pointerdown', handlePointerDown, { passive: true });
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null;
}
