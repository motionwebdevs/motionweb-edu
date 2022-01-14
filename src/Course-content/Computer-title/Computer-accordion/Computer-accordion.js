import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import React, {useState} from "react";

const ComputerAccordion= ({el}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='ComputerAccordion'>
            <div className="container">
                <div className="textBtn">
                    <h2 onClick={() => {
                        setShowInfo(!showInfo)
                    }}>
                        {el.name}
                    </h2>
                    <button className='btn' onClick={() => {
                        setShowInfo(!showInfo)
                    }}>
                        {showInfo ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                    </button>
                </div>
                {
                    el.info.map(el => (
                        <div>
                            {showInfo && <li>{el}</li>}
                        </div>
                    ))
                }

                <div className='underline'/>
            </div>
        </div>
    )
}

export default ComputerAccordion