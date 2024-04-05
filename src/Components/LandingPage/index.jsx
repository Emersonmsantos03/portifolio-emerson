import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './landingpage.css';
import lp from '/public/images/lp.jpg';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5 // Define o limite de visibilidade como 50%
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);

    return (
        <section
            className={`landingpage ${isVisible ? 'visible' : ''}`}
            id="lp"
            ref={ref}
        >
            <div className='landing'>
                <div className='lp-texts'>
                    <h1>O que é uma <strong>Landing Page?</strong></h1>
                    <p>Uma Landing Page é uma página da web focada em uma única oferta ou mensagem, 
                        projetada para atrair a atenção dos visitantes e incentivá-los a realizar uma ação desejada, 
                        como fornecer informações de contato, fazer uma compra ou inscrever-se em um serviço. Essas páginas são estrategicamente 
                        projetadas para maximizar as taxas de conversão e são uma ferramenta poderosa para capturar novos clientes ou leads.</p>
                </div>
                <div className='lp-image'>
                    <img src={lp} alt="LP"/>
                </div>
            </div>
            <div className='lp-button'>
                <a target='__blank' href="https://wa.me/5541998870232?text=Ol%C3%A1%20Emerson,%20gostaria%20de%20saber%20mais%20sobre%20uma%20Landing%20Page!"><button>Garanta já a sua!</button></a>
            </div>
        </section>
    );
}

export default LandingPage;
