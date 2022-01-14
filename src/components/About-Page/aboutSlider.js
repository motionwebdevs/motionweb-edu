import {DataMentor} from "./Data/about-data";
import React, {Component} from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
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
            <div>
                <Slider {...settings}>
                    {DataMentor.map((item) => {
                        return (
                            <div className='slider__position' key={item.id}>
                                <div key={item.id} className="slider__item">
                                    <img src={item.img} alt='img'/>
                                    <h2>{item.name}</h2>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}