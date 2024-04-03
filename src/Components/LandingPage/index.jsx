import './landingpage.css'
import lp from '/public/images/lp.png'

let LandingPage = () => {
    return(
        <section className='landingpage' id='lp'>
            <div className='landing'>
            <div className='lp-texts'>
                <h1>O que é uma <strong>Landing Page?</strong></h1>
                <p>Uma Landing Page é uma página da web focada em uma única oferta ou mensagem, 
                    projetada para atrair a atenção dos visitantes e incentivá-los a realizar uma ação desejada, 
                    como fornecer informações de contato, fazer uma compra ou inscrever-se em um serviço. Essas páginas são estrategicamente 
                    projetadas para maximizar as taxas de conversão e são uma ferramenta poderosa para capturar novos clientes ou leads.</p>

            </div>

            <div className='lp-image'>
                <img src={lp}/>
            </div>
            </div>
            <div className='lp-button'>
            <a><button>Garanta já a sua!</button></a>
            </div>

            
        </section>
        
        

    )
}

export default LandingPage