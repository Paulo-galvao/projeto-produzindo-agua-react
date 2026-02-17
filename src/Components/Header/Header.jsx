import './header.style.css'
import logoLagef from '../../assets/header/logo-lagef.png'
import menu from './menu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import UniLogo from '../uniLogo/UniLogo'

function Header() {
    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <header className='header'>
            <div className="header-container">
                <div className="project-logo">
                    <Link to={"/"}>
                        <img src={logoLagef} alt="logo Lagef" />
                    </Link>
                </div>
                <nav className={`menu ${activeMenu ? 'active' : ''}`}>
                    {activeMenu && (
                        <span onClick={() => setActiveMenu(false)} className='close-menu-btn'>X</span>
                    )}
                    <ul>
                        <UniLogo active='active'/>
                        {menu.map( item => (
                            <li key={item.id}><Link to={item.route}>{activeMenu ? '- ' + item.name : item.name}</Link></li>
                        ))}
                    </ul>
                </nav>
                <div className='header-end'>
                    <UniLogo/>
                    <div onClick={() => setActiveMenu(true)} className='mobile-icon active'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header