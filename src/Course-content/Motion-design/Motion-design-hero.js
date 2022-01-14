import React from 'react';
import img from "../../components/img/mot.png";

const MotionDesignHero = () => {
    return (
        <div className='MotionDesignHero'>
            <div className="container">
                <div className="MotionDesignHeroContent">
                    <div className="first_content">
                        <h2>Моушн дизайнер</h2>
                        <p>
                            Кыймылдуу графика, кыймыл же анимация дизайны - видео, теле жана кино үчүн визуалдык дизайн.
                            Ал негизинен компьютердик технологияны колдонуу менен түзүлөт. Бирок көбүнчө видеого
                            тартуунун классикалык ыкмаларын колдонуу менен түзүлгөн чыгармалар да бар, негизинен
                            айкалыштырылган же анимация.
                        </p>
                        <li>Курсту мыкты денгээлде аяктаган студенттерге сертификат+жумушка</li>
                    </div>
                    <div className="second_content">
                        <img src={img} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotionDesignHero;

