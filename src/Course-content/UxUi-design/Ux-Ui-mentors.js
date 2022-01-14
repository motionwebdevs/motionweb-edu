import React from 'react';
import data from './Ux-Ui-data/Ux-Ui-mentors-data'

const UxUiMentors = () => {
    return (
        <div>
            <div className='UxUiMentors'>
                <div className="container">
                    <h1>Тренеры</h1>
                    <div className="content">
                        {
                            data.map(item => (
                                <div className='item'>
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

export default UxUiMentors;