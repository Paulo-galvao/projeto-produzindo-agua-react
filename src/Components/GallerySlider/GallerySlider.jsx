import photos from "./gallery.js"
import { useState } from "react";
import "./gallery.style.css"

export default function GallerySlider() {
    const [count, setCount] = useState(0);
    const [galleryName, setName] = useState(photos.uepg);

    // funcionamento do slide por teclado

    window.onkeydown = function(e) {
        if(e.key === "ArrowRight") {
            setNextImg();
        } else if(e.key === "ArrowLeft") {
            setLastImg();
        } else if(e.key === "Escape") {
            removeFullScreen();
        } else if(e.key === "F11") {
            if(document.querySelector(".img-container").classList.contains("full-screen")) {
                removeFullScreen();
            } else {
                setFullScreen();
            }
        }
    }

    // funcionamento da troca de imagens
    
    function setNextImg() {
        function next(list) {           
            if(count == (list.length-1)) {
                setCount(count * 0);
            } else {
                setCount(count + 1);
            }        
            
        }
        next(galleryName);
        
    }
    
    function setLastImg() {
        function last(list) {
            if(count == 0) {
                setCount(count + (list.length-1));
            } else {
                setCount(count - 1);
            }
        }
        last(galleryName);        
    }

    // funcionamento da tela fullscreen

    function setFullScreen() {
        // impede que a tela role enquanto a imagem está em tela cheia
        document.body.classList.add("stop-scrolling");

        // poe o slider em tela cheia
        const imgContainer = document.querySelector(".img-container");
        imgContainer.classList.add("full-screen");
        
        // muda a visibilidade dos botões de tela cheia
        const fullScreenBtn = document.querySelector(".full-screen-btn");
        fullScreenBtn.classList.remove("active");     
        const exitFullScreenBtn = document.querySelector(".exit-full-screen-btn");
        exitFullScreenBtn.classList.add("active");
        
        // retira o menu lateral da tela
        const asideMenu = document.querySelector("aside");
        asideMenu.classList.remove("active");

        // coloca a imagem em tamanho real
        const img = document.querySelector(".gallery-banner img");
        img.classList.add("full-size");
    }

    function removeFullScreen() {
        // permite que a tela continue rolando enquanto a imagem está em tela cheia
        document.body.classList.remove("stop-scrolling");

        // tira o container da imagem da tela cheia 
        const imgContainer = document.querySelector(".img-container");
        imgContainer.classList.remove("full-screen");

        // torna o botao de tela cheia visivel
        const fullScreenBtn = document.querySelector(".full-screen-btn");
        fullScreenBtn.classList.add("active");
        
        // torna o botao de sair da tela cheia invisivel
        const exitFullScreenBtn = document.querySelector(".exit-full-screen-btn");
        exitFullScreenBtn.classList.remove("active");
        
        // retorna o menu lateral à tela
        const asideMenu = document.querySelector("aside");
        asideMenu.classList.add("active");
        
        // retorna a imagem ao tamanho padrão da tela
        const img = document.querySelector(".gallery-banner img");
        img.classList.remove("full-size");
        
    } 

    // mudança do tipo de galeria atravez da navegação lateral

    function setGalleryType( gallery, e ) {
        // remove o efeito da classe active do item anterior
        const classActive = document.querySelectorAll("ul li.active");
        classActive[0].classList.remove("active");
        e.target.classList.add("active"); 
        
        // seta o novo tipo de galeria
        setName(gallery);

        // volta na primeira imagem da galeria selecionada
        setCount(0);
        
    }

    return (
        <div className="gallery-container">
            <aside className="active">
                <ul>
                    <li className="active" onClick={ (e) => {
                        setGalleryType(photos.uepg, e);                        
                    }}>
                        Atividades em gabinete
                    </li>
                    <li onClick={ (e) => {  
                        setGalleryType(photos.fire, e);                      
                        
                    }}>
                        Curso de primeiros socorros
                    </li>
                    <li onClick={ (e) => {
                        setGalleryType(photos.maquete, e); 
                         
                    }}>
                        Curso de maquete
                    </li>
                    <li onClick={ (e) => {
                        setGalleryType(photos.itaiacoca, e); 
                         
                    }}>
                        Trabalhos de campo em Itaiacoca, Ponta Grossa-PR
                    </li>
                    <li onClick={ (e) => {
                        setGalleryType(photos.imbituva, e);
                        
                    }}>
                        Trabalhos de campo em Imbituva-PR/Guamiranga-PR
                    </li>
                    <li onClick={ (e) => {
                        setGalleryType(photos.curso, e);
                        
                    }}>
                        Curso de aperfeiçoamento em Solo e Água para os Professores da rede básica de ensino - Imbituva-PR
                    </li>
                    <li onClick={ (e) => {
                        setGalleryType(photos.mapas, e);
                        
                    }}>
                        Produções Cartográficas das áreas de estudo
                    </li>
                </ul>
            </aside>
            <div className="gallery-banner">
                <div className="img-container">
                    <img src={galleryName[count].src} alt={galleryName[count].description} />
                    <button className="back-btn" onClick={setLastImg}>
                        <i className='bx bx-chevron-left'></i>
                    </button>
                    <button className="next-btn" onClick={setNextImg}>
                        <i className='bx bx-chevron-right'></i>
                    </button>
                    <div className="counter-img">
                        <span >{count+1} / </span>
                        <span>{galleryName.length}</span>
                    </div>
                    <button onClick={removeFullScreen} className="exit-full-screen-btn">
                        <i className='bx bx-exit-fullscreen'></i>
                    </button>
                    <button onClick={setFullScreen} className="full-screen-btn active">
                        <i className="bx bx-fullscreen"></i>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
