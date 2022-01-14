import data from './Motion-design-data/whot-you-learn'

const MotionWebWhatYouLearn = () => {
    return (
        <div className='MotionWebWhatYouLearn'>
            <div className="container">
                <h1>Чему вы научитесь</h1>
                <div className="whatYouLearnContent">
                    {data.map((item) => {
                        const {id, name, info, number} = item;
                        return (
                            <div className='first_content' key={id}>
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
export default MotionWebWhatYouLearn