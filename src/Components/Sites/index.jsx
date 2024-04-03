import './sites.css'
import ls from '/public/images/ls-advogados.png'
import arj from '/public/images/arj-contabilidade.png'
import emerson from '/public/images/Emerson-v1.png'
import legov from '/public/images/legov.png'

let Sites = () => {

    let site = [
        {name:"LS Advogados Associados" , link: "https://ls-advogadosassociados.web.app/", image: ls },
        {name:"ARJ Contabilidade" , link: "http://www.psicologos.arjperformance.com/", image: arj},
        {name:"Emerson Moraes - Desenvolvedor Web V1" , link: "https://emersonmoraesdeveloper.web.app/", image: emerson},
        {name:"Legov Licitações" , link: "https://emersonmoraesdeveloper.web.app/", image: legov},
    ]

    return(

        <section className='projects-container'>
            {site.map(({name, link, image}, index) => (
                <a href={link} key={index} target='__blank'><div className='project'>
                    <img src={image} />
                <div className='tarja'>
                    <h4>{name}</h4>
                </div>
                </div></a>
            

            ))}
        </section>
    )
}


export default Sites