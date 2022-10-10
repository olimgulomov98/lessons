import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {ReactComponent as buttonPrev} from '../assets/icons/button-prev.svg'
import {ReactComponent as buttonNext} from '../assets/icons/button-next.svg'

const Container = styled.div`
    max-width: 1920px;
    width: 100%;
`

const SwiperReact = styled(Swiper)`
    width: 100%;
    position: relative;

    .swiper-button-next::after, .swiper-button-prev::before{
        font-size: 20px !important;
        background: red;
        width: 45px !important;
        height: 45px !important;
        background: #FFFFFF;
        opacity: 0.2;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiperprev {
        display: block !important;
    }



`

SwiperReact.ButtonWrapper = styled.div`
    width: 45px;
    height: 45px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.2;
    background: red;
    border-radius: 50%;
    
    position: absolute;
    z-index: 999;
    top: 50%;

`

SwiperReact.SwiperPrev = styled(buttonPrev)`
    position: absolute;
    z-index: 999;
`
SwiperReact.SwiperNext = styled(buttonNext)`
    position: absolute;
    z-index: 999;
    background: red;
    

`

SwiperReact.Slide = styled(SwiperSlide)`
    height: 571px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;

    
    
`   


export {Container, SwiperReact}