import ComputerHero from "./computer-hero";
import ComputerProgram from "./Computer-program";
import CoursePrice from '../Computer-title/Computer-price'
import ComputerMentors from "./Mentors";
import ComputerLearn from "./Computer-learn";
const ComputerTitle = () => {
    return(
        <div>
            <ComputerHero/>
            <ComputerProgram/>
            <CoursePrice/>
            <ComputerMentors/>
            <ComputerLearn/>
        </div>
    )
}
export default ComputerTitle