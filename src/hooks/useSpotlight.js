import { useEffect, useRef } from 'react';

// Tracks pointer position relative to the attached element and exposes it as
// CSS custom properties (--spot-x/--spot-y) for a cursor-follow glow effect.
// Listens on `window` (not the element itself) so the position is always
// current the instant the pointer enters — an element-scoped listener only
// updates once movement happens *inside* its bounds, which briefly leaves the
// glow stuck at its CSS fallback position (visually "stuck at the top").
// Writes to the DOM directly instead of React state to stay smooth at pointer-move frequency.
export function useSpotlight() {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

        const handleMove = (e) => {
            const rect = node.getBoundingClientRect();
            node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
            node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
        };

        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    }, []);

    return ref;
}
