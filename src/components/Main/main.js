import Hero from "./Hero/hero";
import {Programs} from "./LearnPrograms/programs";
import {StudentSuccess} from "./StudentSuccess/student-success";
import {Comments} from "./Comments/commments";
import {Trainings} from "./BenefitsOfTrainings/trainings"
import {Course} from "./BenefitsOfCourses/course";
import {Finish} from "./FinishContent/finish";
import {Contact} from "../../contact";

export const Main = () => {
    return(
        <div>
            <Hero/>
            <Programs/>
            <StudentSuccess/>
            <Comments/>
            <Trainings/>
            <Course/>
            <Finish/>
            <Contact/>
        </div>
    )
}