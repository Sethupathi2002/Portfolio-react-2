import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FAQ_IDS } from '../../data/faq';
import './FaqAccordion.css';

function FaqAccordion() {
    const { t } = useTranslation();
    const [openId, setOpenId] = useState(null);

    return (
        <div className='faq-accordion'>
            {FAQ_IDS.map((id) => {
                const isOpen = openId === id;
                return (
                    <div key={id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                        <button
                            type='button'
                            className='faq-question'
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${id}`}
                            onClick={() => setOpenId(isOpen ? null : id)}
                        >
                            <span>{t(`faq.items.${id}.question`)}</span>
                            <FontAwesomeIcon icon={faChevronDown} className='faq-chevron' />
                        </button>
                        {isOpen && (
                            <div id={`faq-answer-${id}`} className='faq-answer' role='region'>
                                <p>{t(`faq.items.${id}.answer`)}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default FaqAccordion;
