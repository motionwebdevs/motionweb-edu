import data from './Data/Computer-learn-data'

const ComputerLearn = () => {
    return (
        <div className='ComputerLearn'>
            <div className="container">
                <h1>Чему вы научитесь</h1>
                <div className="ComputerLearnContent">
                    {
                        data.map(item => (
                            <div className='content' key={item.id}>
                                <span>{item.number}</span>
                                <p>{item.info}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default ComputerLearn