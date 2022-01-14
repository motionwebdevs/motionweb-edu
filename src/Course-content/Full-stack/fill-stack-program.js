import React, {useState} from "react";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

export const FillStackProgram = ({el}) =>{
    const [showInfo, setShowInfo] = useState(false)
    return(
        <div className='FillStackProgram'>
            <div className="container">
                <div className='FillStackProgramContent'>
                    {
                        <div>
                            <div className="first_content">
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
                                el.themeTitles.map(el => (
                                    <div>
                                        {showInfo && <li>{el}</li>}
                                    </div>
                                ))
                            }

                            <div className='underline'/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}