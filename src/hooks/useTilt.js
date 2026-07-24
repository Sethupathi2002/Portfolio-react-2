import { useEffect, useRef } from 'react';

const MAX_TILT_DEG = 8;

// Pointer-tracked 3D tilt, one instance per card. Mirrors useSpotlight's
// approach: desktop-only (fine pointer + hover), writes CSS custom
// properties directly via ref instead of React state to stay smooth at
// pointer-move frequency.
export function useTilt() {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

        const handleMove = (e) => {
            const rect = node.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            node.style.setProperty('--tilt-rx', `${(-py * MAX_TILT_DEG).toFixed(2)}deg`);
            node.style.setProperty('--tilt-ry', `${(px * MAX_TILT_DEG).toFixed(2)}deg`);
        };

        const handleLeave = () => {
            node.style.setProperty('--tilt-rx', '0deg');
            node.style.setProperty('--tilt-ry', '0deg');
        };

        node.addEventListener('pointermove', handleMove);
        node.addEventListener('pointerleave', handleLeave);
        return () => {
            node.removeEventListener('pointermove', handleMove);
            node.removeEventListener('pointerleave', handleLeave);
        };
    }, []);

    return ref;
}
