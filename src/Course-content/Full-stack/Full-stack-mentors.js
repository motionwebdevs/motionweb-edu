import MentorsData from "./Full-stack-data/mentors-data";

export const FullStackMentors = () => {
    return (
        <div className='mentors'>
            <div className="container">
                <div className="text">
                    <h1>Тренеры</h1>
                    <span>Биздин тренерлер ар бир студентке материалды өздөштүрүүгө жана практикалык <br/> тапшырмаларды тапшырууга жардам беришет.</span>
                </div>
                <div className="mentorsContent">
                    {MentorsData.map((item) => {
                        const {id, name, img, bio} = item;
                        return (
                            <div className='mentorsItem' key={id}>
                                <img src={img} alt="img"/>
                                <div className='text'>
                                    <h2>{name}</h2>
                                    <span>{bio}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}