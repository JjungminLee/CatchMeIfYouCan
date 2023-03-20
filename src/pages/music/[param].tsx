import { useRouter } from 'next/router';
import CustomNav from 'components/navbar';
import Image from 'next/image';
import styled from 'styled-components';
import CenterMode from 'components/centerMode';


const MainContainer=styled.div`
    
    display:flex;
    flex-direction:column;
    overflow: auto
   
`

const CurationBar=styled.div`

position:relative;

img{

  width:100%;
  position:relative !important;
  object-fit:cover;

}


`;

const BarText=styled.div<{fsize:number,top:number,left:number}>`
    
    font-size:${(props)=>props.fsize+'px'};
    text-align: center;
    position: absolute;
    top:${(props)=>props.top+'%'};
    left:${(props)=>props.left+'%'};
    color:white;
    background-color:transparent;

`




export default function Detail() {
  const router = useRouter();
  
  const {curation,subTitle,barImg} = router.query;
  const BarImg=barImg as string; //타입단언
  return (
    <MainContainer>
      <CustomNav/>
      <CurationBar>
        <Image src={BarImg} alt="" width={1512} height={184} />
        
          <BarText fsize={45} top={10} left={3}>{curation}</BarText>
          <BarText fsize={20} top={50} left={3}>{subTitle}</BarText>
      </CurationBar>
      <CenterMode/>
      
      
     


    </MainContainer>
  ); 
}