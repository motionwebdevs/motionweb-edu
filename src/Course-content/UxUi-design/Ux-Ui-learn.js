import React from 'react';
import data from "./Ux-Ui-data/Ux-Ui-learn-data";

const UxUiLearn = () => {
    return (
        <div className='UxUiLearn'>
            <div className="container">
                <h1>Чему вы научитесь</h1>
                <div className="UxUiLearnContent">
                    {data.map((item) => {
                        const {id, name, info, number} = item;
                        return (
                            <div className='first_content' key={id}>
                                <span>{number}</span>
                                <h2>{name}</h2>
                                <p>{info}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default UxUiLearn;