import React from 'react';
import {FrontEndHero} from "./Front-end-hero";
import data from "../Front-end/Front-end-data/Front-end-program-data";
import FrontEndProgram from "./Front-end-program";
import {FrontEndDiploma} from "./Front-end-diplom";
import {FrontEndLearn} from "./Front-end-learn";
import {FrontEndMentors} from "./Front-end-mentors";
import FrontEndPrice from "./Front-end-price";

const FrontEndPage = () => {
    return (
        <div>
            <FrontEndHero/>
            <div className="FrontEndPage">
                <div className="container">
                    <h1>Программа</h1>
                    <h2>Основные курсы</h2>
                    {
                        data.MainData.map(item => (
                            <FrontEndProgram key={item.id} el={item}/>
                        ))
                    }
                </div>
            </div>
            <FrontEndPrice/>
            <FrontEndDiploma/>
            <FrontEndMentors/>
            <FrontEndLearn/>
        </div>
    );
};

export default FrontEndPage;