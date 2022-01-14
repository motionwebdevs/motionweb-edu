import MainData from "./Androit-data/MainData";
import MainAccordion from "./MainAccordion";

export const AndroidProgram = () => {
    return (
        <div className='androidProgram'>
            <div className="container">
                <h1>Программа</h1>
                <h2 className='h2'>Основные курсы</h2>
                {
                    MainData.AndroidData.map(el => (
                        <MainAccordion el={el} key={el.id}/>
                    ))
                }
            </div>
        </div>
    )
}