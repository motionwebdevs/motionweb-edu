import data from './Data/Computer-title-data'
import ComputerAccordion from "./Computer-accordion/Computer-accordion";

const ComputerProgram = () => {
    return (
        <div className='computerProgram'>
            <div className="container">
                <div className="content">
                    <h1>Программа</h1>
                    <h2>Основные курсы</h2>
                    {
                        data.ComputerData.map(item=>(
                            <div>
                                <ComputerAccordion el={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default ComputerProgram