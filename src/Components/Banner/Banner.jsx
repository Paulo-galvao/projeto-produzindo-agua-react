import images from "./images"
import "./banner.style.css"

export default function Banner() {    

    return (
        <div className="banner-container">
            <div className="banner">
                <h1>Projeto Produzindo Água: Produzir água e Conservar solos como práticas básicas de desenvolvimento local de comunidades rurais dos Campos Gerais - PR</h1>
                <blockquote cite="">
                    <p>"Em algum lugar, alguma coisa incrível está esperando para ser descoberta"</p>
                    <p>Carl Sagan</p>
                </blockquote>
                <div className="banner-images">
                    {images.map( image => (
                        <img key={image} src={image} />
                    ))}
                </div>
            </div>  
            
        </div>
    )
}