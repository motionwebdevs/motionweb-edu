import {HomeLayout} from "./components/HomeLayout";
import {AboutPageHero} from "./components/About-Page/about-page-hero";
import {OurWhole} from "./components/About-Page/our-whole";
import {TrainingProcess} from "./components/About-Page/training-process";
import {OurMentor} from "./components/About-Page/our-mentor";
import {Prize} from "./components/About-Page/prize";


export default function  AboutPage(){
    return(
        <HomeLayout>
            <AboutPageHero/>
            <OurWhole/>
            <TrainingProcess/>
            <OurMentor/>
            <Prize/>
        </HomeLayout>
    )
}