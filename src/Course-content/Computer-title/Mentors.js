import data from '../Computer-title/Data/Computer-mentors-data'
const ComputerMentors = () => {
    return(
        <div className='ComputerMentors'>
            <div className='mentors'>
                <div className="container">
                    <h1>Тренеры</h1>
                    <div className="content">
                        {
                            data.map(item => (
                                <div className='item' key={item.id}>
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
        </div>
    )
}
export default ComputerMentors;