import Phone from "./components/Main/Hero/phone";

export const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <h1> Биз менен байланышыныз</h1>
                <div className="contactContent">
                    <div className="firstContent">
                        <h3>Атыныз</h3>
                        <input type="text" placeholder='Атыныз' className='contactInput'/>
                        <h3>Электрондук почтаныз</h3>
                        <input type="text" placeholder='Почта' className='contactInput'/>
                        <h3>Телефон номериниз</h3>
                        <Phone/>
                        <button className='btn'>Жөнөтүү</button>
                    </div>
                    <div className="secondContent">
                        <h3>Биз сизге тандаганга жардам беребиз!</h3>
                        <p>
                            Формат боюнча суроолоруңуз болсо же эмнени тандоону билбей жатсаңыз, номериңизди калтырыңыз -
                            бардык суроолоруңузга жооп берүү үчүн сиз менен байланышабыз.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}