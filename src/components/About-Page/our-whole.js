import ReactPlayer from 'react-player';
import img from '../img/ch.jpg'
export const OurWhole = () => {
    return (
        <div about='ourWhole'>
            <div className="container">
                <div className="ourWhileContent">
                    <div className="firstContent">
                        <div className='player-wrapper'>
                            <div className="player-wrapper1">
                                <h2>Биздин максат</h2>
                                <p>
                                    Биздин максат Кыргыз элин азыркы замандын талабына ылайык кыска мөөнттө мыкты
                                    даасыккан iT
                                    адситерди даярдоо.
                                </p>
                            </div>
                            <div className="player-wrapper2">
                                <ReactPlayer
                                    className='react-player'
                                    url='https://www.youtube.com/watch?v=YASX4D_bL90'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="secondContent">
                        <img src={img} alt="img" className='img'/>
                        <div className="text">
                            <h3>Тренингдин өзгөчөлүктөрү</h3>
                            <h2>Чынчылдык жана ачыктык</h2>
                            <p>
                                Биздин биринчи максат - бул студенттер үчүн окуу материалдарды жана тренерлерди баалоо
                                системасын, максималдуу ачык-айкындуулукту жана өзүн-өзү өркүндөтүү механизмин камсыз
                                кылуу. Биз студенттердин сын-пикирлерин жана рейтингдерин байкап турабыз.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}