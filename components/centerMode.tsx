import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import {useState,useRef} from 'react'

const MainContainer=styled.div`
    display:inline-block;
    margin:auto;
    width:1000px;
`

const Space=styled.div`
   
   margin:1.5rem;
`

const CenterMode=()=>{

    const[center,setCenter]=useState()

    const settings = {

        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
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
          </Slider>
        </MainContainer>
      );
}

export default CenterMode;