import React, { useEffect, useRef } from "react";
 import "../styles/scroll.css";


const OurApproachV1 = (props) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  function setScrollVar() {
    const html = document.documentElement;

    const scroll = Math.min(
      (Math.max(window.scrollY - sectionRef.current.offsetTop, 0) /
        (sectionRef.current.clientHeight -
          (containerRef.current.clientHeight + 80))) *
        100,
      100
    );

    html.style.setProperty("--how-we-work-scroll", scroll);
  }


  useEffect(() => {
    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);

    setScrollVar();

    return () => {
      window.removeEventListener("scroll", setScrollVar);
      window.removeEventListener("resize", setScrollVar);
    };
  }, []);

  return (
    <div ref={sectionRef} className="main-section">
      <div ref={containerRef} className="sticky-container">

        <p>{props.hiringProcessLabel}</p>
        <h3 className="main-title">How do we work</h3>

        <div className="desktop">

          {/* Top Row */}
          <div className="top-row">
            <div className="md-section section-one">
              <span className="num">01</span>
              <div>
                <h4>Quick analysis</h4>
                <p>We get in touch with you to understand your team and project needs</p>
              </div>
            </div>

            <div className="md-section section-three">
              <span className="num">03</span>
              <div>
                <h4>Custom Screening</h4>
                <p>We get in touch with you to understand your team and project needs.</p>
              </div>
            </div>
          </div>

          {/* Middle Line */}
          <div className="middle-line">
            <span className="scroll-ball"></span> 
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            <div className="md-section bottom-section section-two">
              <span className="num">02</span>
              <div>
                <h4>Candidate selection</h4>
                <p>We get in touch with you to understand your team and project needs.</p>
              </div>
            </div>

            <div className="md-section bottom-section section-four">
              <span className="num">04</span>
              <div>
                <h4>Onboard Reactjs Developer</h4>
                <p>We get in touch with you to understand your team and project needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproachV1;