import data from './Androit-data/Course-price'
import {NavLink} from "react-router-dom";
import React from "react";
const CoursePrice = () => {
    return(
        <div className='AndroidCoursePrice'>
            <div className='container'>
                {
                    data.map(item =>(
                        <div key={item.id} className='itemPrice'>
                            <span className='span'>{item.course}</span>
                            <h2>{item.name}</h2>
                            <div className="imgText">
                                <div className='spanText'>
                                    <span>{item.price1}</span>
                                    <span>{item.price2}</span>
                                </div>
                                <img src={item.img} alt=""/>
                            </div>
                            <NavLink to='/Contact-page' className='btn'>{item.btn}</NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CoursePrice