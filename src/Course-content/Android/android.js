import {HomeLayout} from "../../components/HomeLayout";
import {AndroidHero} from "./android-hero";
import {AndroidProgram} from "./android-program";
import DiplomaProject from "./Diplom-project";
import Mentors from "./Mentors";
import WhatYouLearn from "./Whot-you-learn";
import CoursePrice from "./Course-price";


export default function Android() {
    return (
        <HomeLayout>
            <div className="android">
                <AndroidHero/>
                <AndroidProgram/>
                <CoursePrice/>
                <DiplomaProject/>
                <Mentors/>
                <WhatYouLearn/>
            </div>
        </HomeLayout>
    )
}


