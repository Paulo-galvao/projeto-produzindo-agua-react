import './style.css'
import logoLagef from '../assets/header/logo-lagef.png'
import logoUepg from '../assets/header/logo-uepg.png'

function Header() {

    const menu = [
        {
            name: "Inicio",
            href: "#"
        },
        {
            name: "Sobre",
            href: "#"
        },
        {
            name: "Atividades",
            href: "#"
        },
        {
            name: "Equipe",
            href: "#"
        }
        ,{
            name: "Equipe",
            href: "#"
        },
        {
            name: "Contato",
            href: "#"
        },
        {
            name: "Galeria",
            href: "#"
        }        
    ]

    return (
        <header className='header'>
            <div className="container">
                <div className="project-logo">
                    <img src={logoLagef} alt="logo Lagef" />
                </div>
                <nav className='menu'>
                    <ul>
                        {menu.map( item => (
                            <li><a href={item.href}>{item.name}</a></li>
                        ))}
                    </ul>
                </nav>
                <div className='uni-logo'>
                    <img src={logoUepg} alt="logo Uepg" />
                </div>
            </div>
        </header>
    )
}

export default Header