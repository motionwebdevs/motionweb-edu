import React from 'react';
import data from "../Business/Business-data/Business-mentors-data";

const BusinessMentors = () => {
    return (
        <div>
            <div className='BusinessMentors'>
                <div className="container">
                    <h1>Тренеры</h1>
                    <div className="content">
                        {
                            data.map(item => (
                                <div className='item' key={item.id}>
                                    <img src={item.img} alt="img"/>
                                    <div className='itemText'>
                                        <h2>{item.name}</h2>
                                        <span className='span'>{item.info}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessMentors;