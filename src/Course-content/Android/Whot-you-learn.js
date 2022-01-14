import data from './Androit-data/data'

const AndroidLearn = () => {
    return (
        <div className='AndroidLearn'>
            <div className="container">
                <h1>Чему вы научитесь</h1>
                <div className="AndroidLearnContent">
                    {data.map((item) => {
                        const { name, info, number} = item;
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
export default AndroidLearn