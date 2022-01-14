import {HomeLayout} from "../../components/HomeLayout";
import {FullStackHero} from "./full-stack-hero";
import {FillStackProgram} from "./fill-stack-program";
import {DiplomaProject} from "./diplom-project";
import {FullStackMentors} from "./Full-stack-mentors";
import {FullStackLearn} from "./Full-stack-learn";
import data from "./Full-stack-data/Full-stack-program-data";
import React from "react";
import FullStackPrice from "./Full-stack-price";


export default function FulStack() {
    return (
        <HomeLayout>
            <FullStackHero/>
            <div className='FulStackPage'>
                <div className="container">
                    <h1>Программа</h1>
                    <h2>Основные курсы</h2>
                    {
                        data.MainData.map(item => (
                            <FillStackProgram key={item.id} el={item}/>
                        ))
                    }
                </div>
            </div>
            <FullStackPrice/>
            <DiplomaProject/>
            <FullStackMentors/>
            <FullStackLearn/>
        </HomeLayout>
    )
}