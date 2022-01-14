import {NavLink} from "react-router-dom";
import logo from "../img/logo.svg";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footerContent">
                    <div className="navPhone">
                        <i className="fas fa-phone"/>
                        <a href="tel:+996 708 01 54 25">+996 708 01 54 25</a>
                    </div>
                    <NavLink to="Home"><img src={logo} alt="Motion Web"/></NavLink>
                    <div className="sotSet">
                        <a href="https://www.youtube.com/channel/UCO3609q78G8v8pC0Wp6hgow" target="_blank">  <i className="fab fa-youtube"/></a>
                        <a href="https://instagram.com/motion_web" target="_blank"><i className="fab fa-instagram-square"/></a>
                        <a href="https://t.me/motionweb" target="_blank"><i className="fab fa-telegram"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;