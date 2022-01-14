import {Data} from "./Data";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <Slider {...settings}>
                {Data.map((item) => {
                    return (
                         <div className='slider__position__main' key={item.id}>
                            <div key={item.id} className="slider__item__main">
                                <img src={item.img} alt='img'/>
                            </div>
                         </div>
                    )
                })}
            </Slider>
        </div>
    );

}