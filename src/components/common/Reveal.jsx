import { useInView } from '../../hooks/useInView';

// eslint-disable-next-line react/prop-types
function Reveal({ children, as: Tag = 'div', direction = 'up', delay = 0, className = '', ...rest }) {
    const [ref, isInView] = useInView();

    return (
        <Tag
            ref={ref}
            className={`reveal reveal-${direction} ${isInView ? 'is-visible' : ''} ${className}`.trim()}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Reveal;
