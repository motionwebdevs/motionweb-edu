import React from 'react';
import data from "../Business/Business-data/Business-price.data";
import img from "../../components/img/mot.png";
import {NavLink} from "react-router-dom";

const BusinessPrice = () => {
    return (
        <div className='BusinessPrice'>
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
    );
};

export default BusinessPrice;