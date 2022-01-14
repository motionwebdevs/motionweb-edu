import img from '../../img/sttr.jpg'
import {NavLink} from "react-router-dom";
export const Finish = () => {
    return (
        <div className='finish'>
            <div className="container">
                <div className="finishContent">
                    <div className="text">
                        <p>
                            <span>765+</span> адам буга чейин Motion Web LLC IT академиясынын жардамы менен өз жашоосун
                            өзгөрткөн. Сиз дагы аракет кылыңыз?
                        </p><br/>
                        <NavLink to='/Contact-page' className='btn'>Толук малымат алуу</NavLink>
                    </div>
                    <img src={img} alt="img"/>
                </div>
            </div>
        </div>
    )
}