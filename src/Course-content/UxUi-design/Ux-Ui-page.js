import React from 'react';
import UxUiHero from "./Ux-Ui-hero";
import data from '../UxUi-design/Ux-Ui-data/Ux-Ui-program-data'
import UxUiProgram from "./Ux-Ui-program";
import UxUiPrice from "./Ux-Ui-price";
import UxUiDiplomaProject from "./Ux-Ui-diplom-project";
import UxUiMentors from "./Ux-Ui-mentors";
import UxUiLearn from "./Ux-Ui-learn";

const UxUiPage = () => {
    return (
        <div>
            <UxUiHero/>
            <div className='UxUiPage'>
                <div className="container">
                    <h1>Программа</h1>
                    <h2>Основные курсы</h2>
                    {
                        data.MainData.map(item => (
                            <UxUiProgram key={item.id} el={item}/>
                        ))
                    }
                </div>
            </div>
            <UxUiPrice/>
            <UxUiDiplomaProject/>
            <UxUiMentors/>
            <UxUiLearn/>
        </div>
    );
};

export default UxUiPage;