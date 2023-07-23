import React from 'react'
import './FaqCompetitive.css'

// show case FAQ question and answer sending it resources
const FaqCompetitive = ({ faq, index, toggleFaq }) => {


    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index.id}
            onClick={() => toggleFaq(index)}
        >
            <div className="app__faq-question">
                <h3 className="h3__opensans">{faq.question}</h3>
            </div>
            <div className="app__faq-answer">
                <h4 className="h4__opensans">{faq.answer}</h4>
            </div>

        </div>
    );
}

export default FaqCompetitive