import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import rocket from '/public/images/notebook-rocket.png';
import logo from '/public/images/logo-secundaria.png';
import "./contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactPosition = document.getElementById("contact").getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (contactPosition < screenHeight && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <Element name="contact">
      <section className="contact" id="contactt">
        <div className="business">
          <div className={`business-texts ${isVisible ? "animate-entry" : ""}`}>
            <h3>Está pronto para </h3>
            <h3><strong>impulsionar o seu negócio?</strong></h3>
          </div>
          <a href="https://forms.gle/R9P5suwnaox2E5DZ6" target="__blank">
            <button>Solicite o nosso contato!</button>
          </a>
        </div>

        <div className={`rocket-container ${isVisible ? "animate-entry" : ""}`}>
          <img src={rocket} alt="rocket" className="rocket" />
          <img src={logo} alt="logo" className="logo" />
        </div>
      </section>
    </Element>
  );
};

export default Contact;
