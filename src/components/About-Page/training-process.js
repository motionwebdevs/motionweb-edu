import icon1 from '../img/icon1.svg'
import icon2 from '../img/icon2.svg'
import icon3 from '../img/icon3.svg'
import photo1 from '../img/photo1.jpg'
import photo2 from '../img/photo.jpg'
import photo3 from '../img/photo2.jpg'

export const TrainingProcess = () => {
    return (
        <div className='trainingProcess'>
            <div className="container">
                <h1>Тренинг кандай өтөт</h1>
                <div className="trainingProcessContent">
                    <div className="firstContent">
                        <div className="box1">
                            <img src={icon1} alt="icon"/>
                            <div className="text">
                                <h2>Онлайн жардам берүү</h2>
                                <p>
                                    Биздин тажрыйбабыз көрсөткөндөй, машыгууга жеке симуляторлор эмес, чыныгы адамдар
                                    болушу
                                    керек. Мугалимиңиз, классташтарыңыз жана жеке насаатчыңыз тарабынан колдоого
                                    алынбаса, сизде
                                    жетиштүү мотивация болбойт. Мунун баары MOTION WEB LLC тарабынан тренингдин
                                    алкагында
                                    берилет.
                                </p>
                            </div>
                        </div>
                        <div className="box2">
                            <img src={photo1} alt="img"/>
                        </div>
                    </div>
                    <div className="secondContent">
                        <div className="box2">
                            <img src={photo2} alt="img"/>
                        </div>
                        <div className="box1">
                            <div className="text">
                                <h2>Практикалык иш</h2>
                                <p>
                                    Ар бир сабактан кийин мугалим текшерип, комментарий бере турган практикалык тапшырма
                                    болот.
                                </p>
                            </div>
                            <img src={icon2} alt="icon"/>
                        </div>
                    </div>
                    <div className="thirdContent">
                        <div className="box1">
                            <img src={icon3} alt="icon"/>
                            <div className="text">
                                <h2>Өз ара жардамдашуу</h2>
                                <p>
                                    Сиздер менен бирге биз сылык-сыпаа, колдоо жана ыраазычылык норма болгон коомчулукту
                                    түзөбүз. Ар бир комментарийдин жанындагы "рахмат" өзгөчөлүгү MOTION WEB LCCдеги эң
                                    биринчи функциялардын бири болуп саналат. Өз ара колдоо жана ыраазычылык биз бул
                                    долбоорду эмне үчүн жасап жатабыз.
                                </p>
                            </div>
                        </div>
                        <div className="box2">
                            <img src={photo3} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}