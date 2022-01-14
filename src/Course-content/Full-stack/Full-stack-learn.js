import data from './Full-stack-data/what-you-learn-data'

export const FullStackLearn = () => {
    return (
        <div className='FullStackLearn'>
            <div className="container">
                <h1>Чему вы научитесь</h1>
                <div className="FullStackLearnContent">
                    {data.map((item) => {
                        const {id, name, info, number} = item;
                        return (
                            <div className='content'>
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