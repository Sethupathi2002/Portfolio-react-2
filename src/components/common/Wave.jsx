// eslint-disable-next-line react/prop-types
function Wave({ variant = 'elevated', flip = false }) {
    return (
        <div className={`wave-divider ${flip ? 'wave-flip' : ''}`} aria-hidden='true'>
            <svg viewBox='0 0 1440 100' preserveAspectRatio='none' className={`wave-svg wave-${variant}`}>
                <path d='M0,32 C240,90 480,0 720,24 C960,48 1200,96 1440,40 L1440,100 L0,100 Z' />
            </svg>
        </div>
    );
}

export default Wave;
