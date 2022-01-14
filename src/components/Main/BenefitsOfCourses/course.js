import img2 from '../../img/mmmmm.png'

export const Course = () => {
    return (
        <div className='course'>
            <div className="container">
                <h1>MOTION WEB LLC IT <span>академиясын артыкчылыктары</span></h1>
                <div className="courseContent">
                    <div className="firstContent">
                        <div className="text">
                            <h2>Ар бир студенке жекече көзөмөл</h2>
                            <p>
                                Биздин адистер программаны түшүнүүгө, үй тапшырмасы боюнча суроолорго жооп берүүгө, ар
                                кандай техникалык кыйынчылыктарды чечүүгө жана окуу сиз үчүн ыңгайлуу кылып түшүнүүгө
                                жардам берет.
                            </p>
                        </div>
                    </div>
                    <div className="secondContent">
                        <div className="text">
                            <h2>Тренингтер 90% практика түрүндө өтүлөт.</h2>
                            <p>
                                Сизге өз кесибин мыкты билген адистер билим беришет. Алар күн сайын өз ийгиликтерине
                                жардам берген тажрыйба жана өз ыкмалар менен бөлүшүшөт.
                            </p>
                        </div>
                        <img src={img2} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}