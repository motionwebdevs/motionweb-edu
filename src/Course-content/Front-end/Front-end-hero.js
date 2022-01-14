import img from "../../components/img/front-logo.png";

export const FrontEndHero = () => {
    return (
        <div className="FrontEndHero">
            <div className="container">
                <div className="FrontEndHeroContent">
                    <div className="first_content">
                        <h2>Frontend-разработчик + UX/UI дизайнер</h2>
                        <p>
                            Вы начнёте с основ вёрстки и JavaScript, а к концу обучения
                            научитесь делать корпоративные сервисы. Получите опыт работы
                            в команде и начнёте карьеру веб-разработчика.
                        </p>
                    </div>
                    <div className="second_content">
                        <img src={img} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}