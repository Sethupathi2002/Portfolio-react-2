import { useEffect, useRef, useState } from 'react';

const TYPING_SPEED = 65;
const DELETING_SPEED = 35;
const PAUSE_DURATION = 1800;
const SWITCH_DELAY = 400;

// Cycles through `words`, typing/deleting one character at a time. Always
// starts by displaying the full first word (matches the old static text, so
// there's no empty flash before JS runs), then begins the delete/type cycle
// after a pause. Skips the animation entirely for prefers-reduced-motion.
export function useTypewriter(words) {
    const [text, setText] = useState(words[0] || '');
    const indexRef = useRef(0);
    const subIndexRef = useRef((words[0] || '').length);
    const isDeletingRef = useRef(true);
    const wordsKey = words.join('|');

    useEffect(() => {
        if (words.length <= 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setText(words[0] || '');
            return undefined;
        }

        indexRef.current = 0;
        subIndexRef.current = words[0].length;
        isDeletingRef.current = true;
        setText(words[0]);

        let timeoutId;

        const tick = () => {
            const currentWord = words[indexRef.current % words.length];
            subIndexRef.current += isDeletingRef.current ? -1 : 1;
            setText(currentWord.slice(0, subIndexRef.current));

            let delay = isDeletingRef.current ? DELETING_SPEED : TYPING_SPEED;

            if (!isDeletingRef.current && subIndexRef.current === currentWord.length) {
                isDeletingRef.current = true;
                delay = PAUSE_DURATION;
            } else if (isDeletingRef.current && subIndexRef.current === 0) {
                isDeletingRef.current = false;
                indexRef.current += 1;
                delay = SWITCH_DELAY;
            }

            timeoutId = setTimeout(tick, delay);
        };

        timeoutId = setTimeout(tick, PAUSE_DURATION);
        return () => clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wordsKey]);

    return text;
}
