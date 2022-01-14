import React from 'react';
import img from "../../components/img/ux.png";

const UxUiHero = () => {
    return (
        <div className='UxUiHeroHero'>
            <div className="container">
                <div className="UxUiHeroContent">
                    <div className="first_content">
                        <h2>UX/UI дизайнер</h2>
                        <p>
                            UX/UI дизайны боюнча ар тараптуу билимге ээ болуп, 100 доллардан 1 миллион долларга
                            чейин киреше таба баштаңыз, чоң долбоорлордо чоң компанияда иштеп өз клечегиңизге кадам
                            таштаңыз.
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

export default UxUiHero;