import './contact.css'
import rocket from '/public/images/notebook-rocket.png'
import logo from '/public/images/logo-secundaria.png'




let Contact = () => {
    return(

        <section className='contact' id='contact'>
                
                 <div className='business'>
                    <div className='business-texts'>
                    <h3>Está pronto para </h3>
                    <h3><strong>impulsionar o seu negócio?</strong></h3>
                    </div>
                    <a><button>Solicite o nosso contato!</button></a>
                    </div>

                    <div className='rocket-container'>
                        <img src={rocket} className='rocket'/>
                        <img src={logo}/>
                        </div>   
                

               

        </section>
    )
}

export default Contact