import styled from 'styled-components'
import Image from 'next/image'
import {useState,useEffect} from'react'
import {useRouter} from 'next/router'
import router from "next/router";
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
import {Container, Row,Col,Dropdown,Accordion, Button} from 'react-bootstrap';
import React from "react";

const MainContainer=styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    display:flex;
    flex-wrap: nowrap;
    flex-direction:column;
    overflow: auto;
    
    
`;
const MainTitle=styled.div`
    align-items:center;
    justify-content:center;
    margin:auto;
   
`;
const SubTitle=styled.div`
    font-family:'Pretendard-ExtraLight';
    color:white;
    align-items:center;
    white-space: pre-wrap;
    text-align:center;
`;

const Space=styled.div`
    margin:0.5rem;

`
const Grid=styled.div`
    align-items:center;
    justify-content:center;
    padding: 20px;
    
 
`
const Text=styled.div<{top:string,left:string}>`
    display:none;
    font-size:20px;
    text-align: center;
    position: absolute;
    top:${(props)=>props.top};
    left:${(props)=>props.left};
    color:white;
    background-color:transparent;
 
    
`
const ImageGrid=styled.div`
    vertical-align: middle;

`
const Box=styled.button`
    border: 0;
    background-color: transparent;
    position: relative; 
    &:hover ${Text} {
        display:block;
       
    
        
    }
    &:hover ${ImageGrid}{
        opacity:0.5;
    }

`










export default function main() {



  const subText="안녕하세요. 제 공간에 오신것을 환영합니다.기록하기 좋아하는 주인장의 일기장입니다.\n주저리거리기 좋아하는  저의 무용한 일상들을 둘러보고 가세요😺";

  const router=useRouter();

  
  return (
   <MainContainer>
       <MainTitle >
            <Image src='/images/MainTitle.svg' alt="" width={921} height={200} />
        
        </MainTitle>
       <SubTitle>
            {subText}
       </SubTitle>
       <Space/>
       <Grid>
        <Container>
                <Row >
                <Col style={{margin:'20px'}}>
                        <Box onClick={()=>router.replace('/catchMe/catchMe')}>
                            <ImageGrid>
                                <Image  src='/images/catchme.svg' alt="" width={230} height={230}
                               />
                            
                            </ImageGrid>
                            <Text top="40%" left="30%">Catch,Me!</Text>
                        </Box>
                   
                </Col>
                <Col style={{margin:'20px'}}>
                    <Box onClick={()=>router.replace('/diary')}>
                        <ImageGrid>
                            <Image src='/images/diary.svg' alt="" width={230} height={230}/>
                        </ImageGrid>
                        <Text top="40%" left="40%">Diary</Text>

                    </Box>
                    
                </Col>
                <Col style={{margin:'20px'}}>
                    <Box onClick={()=>router.replace('/music/music')}>
                        <ImageGrid>
                            <Image src='/images/music.svg' alt="" width={230} height={230}/>
                        </ImageGrid>
                        <Text top="40%" left="40%">Music</Text>
                    </Box>
                </Col>
                </Row>
                <Space/>
                <Row >
                <Col style={{margin:'20px'}}>
                    <Box onClick={()=>router.replace('/book')}>
                        <ImageGrid>
                            <Image src='/images/book.svg' alt="" width={230} height={230}/>
                        </ImageGrid>
                        <Text top="40%" left="40%">Music</Text>
                    </Box>
                </Col>
                <Col style={{margin:'20px'}}>
                    <Box onClick={()=>router.replace('/programming')}>
                        <ImageGrid>
                            <Image src='/images/it.svg' alt="" width={230} height={230}/>
                        </ImageGrid>
                        <Text top="40%" left="25%">Programming</Text>
                    </Box>
                    
                </Col>
                <Col style={{margin:'20px'}}>
                    <Box onClick={()=>router.replace('/travel')}>
                        <ImageGrid>
                            <Image src='/images/travel.svg' alt="" width={230} height={230}/>
                        </ImageGrid>
                        <Text top="40%" left="40%">Travel</Text>
                    </Box>
                    
                </Col>
                </Row>
                    
            </Container>
       </Grid>
     

       
      
   </MainContainer>
  )
}