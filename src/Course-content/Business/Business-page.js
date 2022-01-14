import React from 'react';
import BusinessHero from "./Business-hero";
import data from "../Business/Business-data/Business-program-data";
import BusinessProgram from "./business-program";
import BusinessPrice from "./Business-price";
import BusinessMentors from "./Business-mentors";
import BusinessDiplomaProject from "./Business-dipom-project";
import BusinessLearn from "./Business-learn";

const BusinessPage = () => {
    return (
        <div>
            <BusinessHero/>
            <div className='BusinessPage'>
                <div className="container">
                    <h1>Программа</h1>
                    <h2>Основные курсы</h2>
                    {
                        data.MainData.map(item => (
                            <BusinessProgram key={item.id} el={item}/>
                        ))
                    }
                </div>
                <BusinessPrice/>
                <BusinessDiplomaProject/>
                <BusinessMentors/>
                <BusinessLearn/>
            </div>
        </div>
    );
};

export default BusinessPage;