import SimpleSlider from "./aboutSlider";

export const OurMentor = () => {
    return (
        <div className='ourMentor'>
            <div className="container">
                <h1>Биздин тренерлер</h1>
                <p>
                    Биздин тренерлер ар бир студентке материалды өздөштүрүүгө жана практикалык тапшырмаларды тапшырууга
                    жардам беришет.
                </p>
               <SimpleSlider/>
            </div>
        </div>
    )
}