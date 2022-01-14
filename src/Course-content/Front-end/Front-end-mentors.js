import data from "./Front-end-data/front-end-mentors-data"
import React from "react";

export const FrontEndMentors = () => {
    return (
        <div className='FrontEndMentors'>
            <div className="container">
                <h1>Биздин Тренирлер</h1>
                <div className='content'>
                    {
                        data.map(item => (
                            <div className='item' key={item.id}>
                                <img src={item.img} alt="img"/>
                                <div className='itemText'>
                                    <h2>{item.name}</h2>
                                    <span>{item.bio}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}