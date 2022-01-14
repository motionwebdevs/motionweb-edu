import prizeImg1 from '../img/Диплом.png'
import prizeImg2 from '../img/Сертификат.png'
export const Prize = () => {
    return (
        <div className='prize'>
            <div className="container">
                <div className="prizeContent">
                    <h1>Квалификациялык документер</h1>
                    <p>
                        Окууну <span>№040485 мамлекеттик лицензиясынын</span>
                        негизинде жүргүзөбүз. Окууну ийгиликтүү аяктагандын жыйынтыгы боюнча бүтүрүүчүлөргө кесиптик
                        кайра даярдоо дипломун же квалификациясын жогорулатуу сертификатын беребиз.
                    </p>
                    <img src={prizeImg1} alt="img" className='img1'/>
                    <img src={prizeImg2} alt="img" className='img2'/>
                </div>
            </div>
        </div>
    )
}