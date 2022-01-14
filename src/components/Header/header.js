import logo from '../../components/img/logo.svg'
import {NavLink} from "react-router-dom";
import BurgerMenu from "./burger-menu";

const Header = () => {

    return (
        <header className='header'>
            <div className="container">
                    <div className="headerContent">
                        <div className="headerNav">
                            <div className="left">
                                <NavLink to="/"><img src={logo} alt="Motion Web"/></NavLink>
                            </div>
                            <div className="right">
                                <NavLink to="/" className='about'><h3>Башкы бет</h3></NavLink>
                                <NavLink to="/About" className='about'><h3>Биз жөнүндө</h3></NavLink>
                                <NavLink to="/contact-page" className='about'><h3>Байланыш</h3></NavLink>
                            </div>
                            <BurgerMenu/>
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Header;