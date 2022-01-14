import React from 'react';
import MotionDesignHero from "./Motion-design-hero";
import data from "./Motion-design-data/program-data";
import MotionDesignProgram from "./Motion-design-program";
import MotionWebPrice from "./Motion-web-price";
import MWebDiplomaProject from "./Mweb-diplom-project";
import MotionWebMentors from "./Mentors";
import MotionWebWhatYouLearn from "./Whot-you-learn";

const MotionDesignPage = () => {
    return (
        <div className="MotionDesign">
            <MotionDesignHero/>
            <div>
                <div className="container">
                    <h1>Программа</h1>
                    <h2>Основные курсы</h2>
                    {
                        data.map(item => (
                            <MotionDesignProgram el={item} key={item.id}/>
                        ))
                    }
                </div>
            </div>
            <MotionWebPrice/>
            <MWebDiplomaProject/>
            <MotionWebMentors/>
            <MotionWebWhatYouLearn/>
        </div>
    );
};

export default MotionDesignPage;