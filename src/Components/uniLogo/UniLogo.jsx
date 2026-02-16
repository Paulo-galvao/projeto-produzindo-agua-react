import logoUepg from '../../assets/header/logo-uepg.png'
import './unilogo.style.css';

function UniLogo({active}) {
    return (
        <div className={`uni-logo ${active}`}>
            <a href="https://www.uepg.br/">
                <img src={logoUepg} alt="logo Uepg" />
            </a>
        </div>
    )
}

export default UniLogo;