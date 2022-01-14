import React, {useState} from 'react';
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

const MotionDesignProgram = ({el}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='MotionDesignProgram'>
            <div className="container">
                <div className='MotionDesignProgramContent'>
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


                            {showInfo && <span>{el.info}</span>}

                            <div className='underline'/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MotionDesignProgram;