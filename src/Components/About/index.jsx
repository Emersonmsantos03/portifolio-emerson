import './about.css'
import profile from '/public/images/Emerson.png'
import whatsapp from "/public/images/whatsapp-icon.png"
import instagram from "/public/images/instagram-icon.png"
import email from "/public/images/email-icon.png"
import github from "/public/images/github-icon.png"

let About = () => {
    return(
        <section className='about' id='about'>
            <div className='me'>
        <div className='about-img'>
            <img src={profile} />
        </div>
        <div className='about-icons'>
                   <a href="https://wa.me/5541998870232?text=Ol%C3%A1%20Emerson,%20gostaria%20de%20saber%20mais%20sobre%20uma%20Landing%20Page!" target='__blank'><img src={whatsapp} /></a>
                   <a href='https://www.instagram.com/emersonmoraes.dev/' target='__blank'><img src={instagram} /></a>
                   <a href="mailto:emerson.moraesdev@gmail.com" target='__blank'> <img src={email} /></a>
                   <a href="https://github.com/Emersonmsantos03" target='__blank'><img src={github} /></a>
                </div>
                </div>
        
        <div className='about-texts'>
            <div className='about-titles'>
        <h2>Olá, eu sou o <strong>Emerson</strong></h2>
        <h3>É uma satisfação recebê-lo para explorar as 
            infinitas possibilidades do seu <strong>sucesso online!</strong></h3>
            </div>
            <p>Como um <strong>desenvolvedor web</strong>, 
                m meu propósito é claro: moldar sua presença digital em uma narrativa envolvente e profundamente lucrativa. 
                Navegando nas correntes em constante evolução da tecnologia web, trago uma experiência especializada na arte de criar Landing Pages que não só capturam a atenção, 
                mas também convertem visitantes em clientes leais.</p>

            <p>Com maestria em JavaScript, ReactJS, HTML e CSS, eu combino habilidades técnicas afiadas com uma visão criativa, 
                construindo interfaces que não apenas impressionam visualmente, mas também funcionam de forma intuitiva e eficaz. 
                Minha abordagem centrada no usuário e minha paixão pela inovação me impulsionam a buscar continuamente as melhores práticas e tendências mais recentes, 
                garantindo que cada projeto que eu toco seja uma <strong>verdadeira experiência de qualidade.</strong></p>
                
        </div>
        </section>
    )
}

export default About