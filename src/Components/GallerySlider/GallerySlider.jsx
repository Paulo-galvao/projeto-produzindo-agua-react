import photos from "./gallery.js"
import { useState } from "react";
import "./gallery.style.css"

export default function GallerySlider() {
  
    const [count, setCount] = useState(0);
    const [name, setName] = useState(photos.uepg);
    let list = name;
    const classActive = document.querySelectorAll(".active");

    function setNextImg() {
        function next(list) {           
            if(count == (list.length-1)) {
                setCount(count * 0);
            } else {
                setCount(count + 1);
            }        
            
        }
        next(list);
        
    }
    
    function setLastImg() {
        function last(list) {
            if(count == 0) {
                setCount(count + (list.length-1));
            } else {
                setCount(count - 1);
            }
        }
        last(list);        
    }

    return (
        <div className="gallery-container">
            <aside>
                <ul>
                    <li onClick={ (e) => {
                        list = photos.uepg;
                        setName(list);
                        classActive.forEach( item => item.classList.remove("active"));
                        e.target.classList.add("active"); 
                    }}>
                        Atividades em gabinete
                    </li>
                    <li onClick={ (e) => {
                        list = photos.fire;
                        setName(list);
                         classActive.forEach( item => item.classList.remove("active"));
                        e.target.classList.add("active"); 
                    }}>
                        Curso de primeiros socorros
                    </li>
                    <li onClick={ (e) => {
                        list = photos.maquete;
                        setName(list);
                         classActive.forEach( item => item.classList.remove("active"));
                        e.target.classList.add("active"); 
                    }}>
                        Curso de maquete
                    </li>
                    <li onClick={ (e) => {
                        list = photos.itaiacoca;
                        setName(list);
                         classActive.forEach( item => item.classList.remove("active"));
                        e.target.classList.add("active"); 
                    }}>
                        Trabalhos de campo em Itaiacoca, Ponta Grossa-PR
                    </li>
                    <li onClick={ (e) => {
                        list = photos.imbituva;
                        setName(list);
                         classActive.forEach( item => item.classList.remove("active"));
                        e.target.classList.add("active"); 
                    }}>
                        Trabalhos de campo em Imbituva-PR/Guamiranga-PR
                    </li>
                    <li onClick={ (e) => {
                        list = photos.curso;
                        setName(list);
                        classActive.forEach( item => item.classList.remove("active"));
                        e.target.classList.add("active"); 
                    }}>
                        Curso de aperfeiçoamento em Solo e Água para os Professores da rede básica de ensino - Imbituva-PR
                    </li>
                    <li onClick={ (e) => {
                        list = photos.mapas;
                        setName(list);
                        classActive.forEach( item => item.classList.remove("active"));
                        e.target.classList.add("active"); 
                    }}>
                        Produções Cartográficas das áreas de estudo
                    </li>
                </ul>
            </aside>
            <div className="gallery-banner">
                <img style={{maxWidth: 600}} src={list[count].src} alt={list[count].description} />
                <button onClick={setLastImg}>Back</button>
                <button onClick={setNextImg}>Next</button>
            </div>
        </div>
    )
}
