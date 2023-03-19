import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import {useState,useRef} from 'react'

const MainContainer=styled.div`
    display:inline-block;
    margin:auto;
    width:1200px;
`

const Space=styled.div`
   
   margin:1.5rem;
`

export default class CenterMode extends Component {

    render(): React.ReactNode {
        const settings = {

            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            speed: 500,
            padding:'10px',
            responsive: [ // 반응형 웹 구현 옵션
                {
                    breakpoint: 1200, // 화면 사이즈 1200px
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                    slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                    slidesToShow: 1
                    }
                }
            ]
          };
          return (
            
            <MainContainer>
              <Space/>
              <Slider {...settings}>
                <div>
                    <Image  src='/images/musicCuration2.svg' alt="" width={200} height={350}/>
                </div>
                <div>
                    <Image  src='/images/musicCuration2.svg' alt="" width={200} height={350}/>
                </div>
                <div>
                    <Image  src='/images/musicCuration2.svg' alt="" width={200} height={350}/>
                </div>
                <div>
                    <Image  src='/images/musicCuration2.svg' alt="" width={200} height={350}/>
                </div>
                <div>
                    <Image  src='/images/musicCuration2.svg' alt="" width={200} height={350}/>
                </div>
                <div>
                    <Image  src='/images/musicCuration2.svg' alt="" width={200} height={350}/>
                </div>
                <div>
                    <Image  src='/images/musicCuration2.svg' alt="" width={200} height={350}/>
                </div>
              </Slider>
            </MainContainer>
          );
    }

   
      
}

