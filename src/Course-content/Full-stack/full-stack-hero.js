import img from "../../components/img/fullstack.svg";

export const FullStackHero = () => {
    return (
        <div className="fullStackHero">
            <div className="container">
                <div className="fullStackHeroContent">
                    <div className="first_content">
                        <h2>Full-stack JavaScript разработчик</h2>
                        <p>
                            Сиз JavaScriptте нөлдөн баштап толук кандуу веб-сайттарды жана веб-тиркемелерди кантип иштеп чыгууну үйрөнөсүз, React - фреймворкун жана Node.js платформасын үйрөнөсүз.

                            Курсту мыкты денгээлде аяктаган студенттерге сертификат+жумушка

                        </p>
                        <li>Курсту мыкты денгээлде аяктаган студенттерге сертификат+жумушка</li>
                    </div>
                    <div className="second_content">
                        <img src={img} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}