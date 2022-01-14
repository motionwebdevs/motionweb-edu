import img from "../../components/img/android.png";

export const AndroidHero = () => {
    return (
        <div className="androidHero">
            <div className="container">
                <div className="content">
                    <div className="first_content">
                        <h2>Android разработчик</h2>
                        <p>
                            Google компаниясынын маалыматы боюнча, 3 миллиард тиркеме(приложения) Android менен иштейт.
                            Телевизорлор, смартфондор жана акылдуу сааттар бизге телешоулорду көрүүгө, сатып алуулар
                            үчүн
                            төлөөгө, баарлашууга жана тамак-ашка буйрутма берүүгө мүмкүнчүлүк берген пайдалуу
                            тиркемелер(приложении) жык толгон. Эми сиз да ушундай кызматтарды түзө аласыз.
                        </p>
                        <p>
                            Портфолиоңузга бешке чейин колдонмо кошуп, команда катары тажрыйба топтоп, Android иштеп
                            чыгуучусу
                            болосуз.
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