import data from './Androit-data/Mentors-data'
const Mentors = () => {
    return(
        <div className='mentors'>
            <div className="container">
                <h1>Тренеры</h1>
                <div className="content">
                    {
                        data.map(item => (
                        <div className='item'>
                            <img src={item.img} alt="img"/>
                            <div className='itemText'>
                                <h2>{item.name}</h2>
                                <span className='span'>{item.info}</span>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Mentors