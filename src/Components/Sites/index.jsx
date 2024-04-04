import React, { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";
import './sites.css'
import ls from '/public/images/ls-advogados.png'
import arj from '/public/images/arj-contabilidade.png'
import emerson from '/public/images/Emerson-v1.png'
import legov from '/public/images/legov.png'

const Sites = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sitesPosition = document.getElementById("projects-container").getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sitesPosition < screenHeight && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <section id="projects-container" className={`projects-container ${isVisible ? "animate-entry" : ""}`}>
      <Site name="LS Advogados Associados" link="https://ls-advogadosassociados.web.app/" image={ls} />
      <Site name="ARJ Contabilidade" link="http://www.psicologos.arjperformance.com/" image={arj} />
      <Site name="Emerson Moraes - Desenvolvedor Web V1" link="https://emersonmoraesdeveloper.web.app/" image={emerson} />
      <Site name="Legov Licitações" link="https://emersonmoraesdeveloper.web.app/" image={legov} />
    </section>
  );
};

const Site = ({ name, link, image }) => {
  return (
    <a href={link} target='__blank' className="project">
      <div className='project'>
        <img src={image} alt={name} />
        <div className='tarja'>
          <h4>{name}</h4>
        </div>
      </div>
    </a>
  );
}

export default Sites;
