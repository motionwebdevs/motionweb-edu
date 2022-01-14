import SimpleSlider from "./slider";
import React from "react";
export const Comments = () => {
    return(
        <div className='comments'>
            <div className="container">
                <h1>Тренингтер тууралу ой пикирлер</h1>
                <div className="commentsContent">
                    <SimpleSlider/>
                </div>
            </div>
        </div>
    )
}