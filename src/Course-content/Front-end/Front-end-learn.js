import Data from "./Front-end-data/Front-end-learn-data";

export const FrontEndLearn = () => {
    return (
        <div className='FrontEndLearn'>
            <div className="container">
                <h1>Чему вы научитесь</h1>
                <div className="FrontEndLearnContent">
                    {Data.map((item) => {
                        const {id, number, name, info,} = item
                        return (
                            <div key={id} className='first_content'>
                                <span>{number}</span>
                                <h2>{name}</h2>
                                <p>{info}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}