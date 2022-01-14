import {stack as Menu} from 'react-burger-menu'
import {NavLink} from "react-router-dom";

export default function BurgerMenu() {

    return (
        <Menu right>
            <div className='Burger-menu'>
                <div className="firstContent">
                    <div className="iconNav">
                        <i className="fas fa-home"/>
                        <NavLink to="/" className='about'><h3>Башкы бет</h3></NavLink>
                    </div>
                    <div className="iconNav">
                        <i className="fas fa-address-card"/>
                        <NavLink to="/About" className='about'><h3>Биз жөнүндө</h3></NavLink>
                    </div>
                    <div className="iconNav">
                        <i className="fas fa-phone"/>
                        <NavLink to="/contact-page"><h3>Байланыш</h3></NavLink>
                    </div>
                </div>
                <div className="second__content">
                    <a href="#"><i className="fab fa-telegram-plane"/></a>
                    <a href="https://wa.me/message/TP3LRC32QFLQE1"><i className="fab fa-whatsapp"/></a>
                    <a href="#"><i className="fab fa-linkedin-in"/></a>
                    <a href="https://www.instagram.com/motion_web.io/"><i className="fab fa-instagram"/></a>
                </div>
            </div>
        </Menu>
    )
}



