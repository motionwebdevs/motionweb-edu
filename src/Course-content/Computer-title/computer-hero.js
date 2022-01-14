import img from "../../components/img/comp__img.png";

const ComputerHero = () => {
    return (
        <div className='ComputerHero'>
            <div className="container">
                <div className="content">
                    <div className="first_content">
                        <h2>Компьютер нөлдөн</h2>
                        <p>
                            Сиздин компьютердик сабаттуулук дүйнөсүндөгү ишенимдүү жол көрсөткүчүңүз. Компьютердик окуу
                            программасы жаңы компьютер колдонуучу талап кылган бардык суроолорду камтыйт.
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
export default ComputerHero