import './footer.css'
import whatsapp from "/public/images/whatsapp-icon.png"
import instagram from "/public/images/instagram-icon.png"
import email from "/public/images/email-icon.png"
import github from "/public/images/github-icon.png"
import logo from "/public/images/logo-central.png"



let Footer = () => {
    return(
        <section className='footer'>
            <div className='footer-container'>
            <div className='logo-img'>
                <img src={logo} alt="logo" />
            </div>
            <div className='contact-icons'>
                <h3>Contato:
                </h3>
                <div className='contact-icon'>
                <a href="https://wa.me/5541998870232?text=Ol%C3%A1%20Emerson,%20gostaria%20de%20saber%20mais%20sobre%20uma%20Landing%20Page!" target='__blank'><img src={whatsapp} /></a>
                   <a href='https://www.instagram.com/emersonmoraes.dev/' target='__blank'><img src={instagram} /></a>
                   <a href="mailto:emerson.moraesdev@gmail.com" target='__blank'> <img src={email} /></a>
                   <a href="https://github.com/Emersonmsantos03" target='__blank'><img src={github} /></a>
                </div>
            </div>
            <div className='navigation'>
                <h3>Navegação:</h3>
                <div className='navigation-texts'>
                <a href='#about'>Sobre mim</a>
                <a href='#lp'>Landing Page</a>
                <a href='#portifolio'>Portifólio</a>
                <a href='#contact'>Contato</a>
                </div>
            </div>
            
            </div>
            <h3 className='rights'>© 2024 Todos os direitos reservados. Desenvolvido por: <a href="https://www.instagram.com/emersonmoraes.dev/" target='__blank'>Emerson Moraes.</a></h3>
        </section>
    )
}

export default Footer

