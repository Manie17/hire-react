import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FaqAccordion = ({ faqItem }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      {faqItem.map((item, index) => {
        const arrowImg = item.arrowIcon
          ? getImage(item.arrowIcon.localFile)
          : null;

        return (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <p className="p1">{item.faqQs}</p>

              {arrowImg && (
                <div
                  className={`faq-arrow ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <GatsbyImage
                    image={arrowImg}
                    alt="accordion arrow"
                  />
                </div>
              )}
            </button>

            <div
              className={`faq-answer ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <p className="p3">{item.faqAns}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
