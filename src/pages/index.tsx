import styled from 'styled-components'
import Image from 'next/image'
import {useState,useEffect} from'react'
import {useRouter} from 'next/router'
import router from "next/router";
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
const Container=styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    display:flex;
    justify-content:center;
    
`
const MainTitle=styled.div`
    margin-top:20rem;
    justify-content:center;
`





export default function Home() {

  const [alert,setAlert]=useState(false);
  useEffect(()=>{
    const timer=setTimeout(()=>{setAlert(true)},2000);
  },[])

  return (
   <Container>
       <MainTitle>
          <Image src='/images/MainTitle.svg' alt="" width={921} height={139} />
       </MainTitle>
      
   </Container>
  )
}