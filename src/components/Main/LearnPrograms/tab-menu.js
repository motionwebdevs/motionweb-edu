import React from 'react';
import {NavLink} from "react-router-dom";


const TabMenu = ({items}) => {
    return (
        <div className='programsMenu'>
            {items.map((item) => {
                return (
                        <div key={item.id} className='programming'>
                            <div className='box'>
                                <div className="btnIcon">
                                    <NavLink to={item.link} className='btn'>Тренинг</NavLink>
                                    <img src={item.img} alt="img"/>
                                </div>
                                <div className="h2Text">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="textIcon">
                                    <p>{item.info}</p>
                                    <img src={item.img2} alt="img"/>
                                </div>
                            </div>
                        </div>
                )
            })}
        </div>
    )
};

export default TabMenu;
