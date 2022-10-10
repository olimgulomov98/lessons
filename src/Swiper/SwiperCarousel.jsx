import React, { Component } from 'react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useSwiper } from "swiper/react";

import {Container, SwiperReact, Youtube} from './style'
import img1 from '../assets/images/swiper-img1.png'
import img2 from '../assets/images/swiper-img2.png'


class SwiperCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sw: useSwiper
        }
    }

    
    render() {
        return (
            <Container>
                <SwiperReact
                    pagination={{
                    clickable: true,
                    }}
                    cssMode={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperReact.Slide style={{backgroundImage: `url(${img1})`}}>Slide 1</SwiperReact.Slide>
                    <SwiperReact.Slide  style={{backgroundImage: `url(${img2})`}}>Slide 2</SwiperReact.Slide>
                    <SwiperReact.Slide style={{backgroundImage: `url(${img1})`}}>Slide 1</SwiperReact.Slide>
                    <SwiperReact.Slide  style={{backgroundImage: `url(${img2})`}}>Slide 2</SwiperReact.Slide>
                    <SwiperReact.Slide style={{backgroundImage: `url(${img1})`}}>Slide 1</SwiperReact.Slide>
                    <SwiperReact.Slide  style={{backgroundImage: `url(${img2})`}}>Slide 2</SwiperReact.Slide>
                    <SwiperReact.Slide style={{backgroundImage: `url(${img1})`}}>Slide 1</SwiperReact.Slide>
                    <SwiperReact.Slide  style={{backgroundImage: `url(${img2})`}}>Slide 2</SwiperReact.Slide>
                    
                       
                   
                </SwiperReact>
            </Container>
        );
    }
}

export default SwiperCarousel;