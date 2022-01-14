import React from 'react';
import img from "../../components/img/mar.png";

const BusinessHero = () => {
    return (
        <div>
            <div className='BusinessHero'>
                <div className="container">
                    <div className="BusinessHeroContent">
                        <div className="first_content">
                            <h2>Маркетолог</h2>
                            <p>
                                Интернетте бизнесиңизди алдыга жүргүзүнү үйрөнөсүз: маркетинг стратегияларын жана сатуу
                                воронкасын түзүнү үйрөнрсүз, SEO, SMMди өздөштүрүү жана CRMди ыңгайлаштыра билүү. Чакан
                                жана чоң бюджеттер үчүн маркетингге болгон мамиле кандайча өзгөрүп жатканын түшүнөсүз.
                                Сиз издеген адис боло аласыз.
                            </p>
                            <li>Курсту мыкты денгээлде аяктаган студенттерге сертификат+жумушка</li>
                        </div>
                        <div className="second_content">
                            <img src={img} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessHero;