import './header.style.css'
import logoLagef from '../../assets/header/logo-lagef.png'
import logoUepg from '../../assets/header/logo-uepg.png'
import menu from './menu'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className='header'>
            <div className="header-container">
                <div className="project-logo">
                    <Link to={"/"}>
                        <img src={logoLagef} alt="logo Lagef" />
                    </Link>
                </div>
                <nav className='menu'>
                    <ul>
                        {menu.map( item => (
                            <li key={item.id}><Link to={item.route}>{item.name}</Link></li>
                        ))}
                    </ul>
                </nav>
                <div className='uni-logo'>
                    <a href="https://www.uepg.br/">
                        <img src={logoUepg} alt="logo Uepg" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header