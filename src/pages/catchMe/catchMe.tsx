import CustomNav from 'components/navbar';
import Image from 'next/image';
import styled from 'styled-components';
const MainContainer=styled.div`
    
    display:inline-flex;
    overflow: auto
   
`
const SubContainer=styled.div`
    display:flex;
    flex-direction:column;
`


const MainImg=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:2rem;
    margin-left:5rem;
`;

const TextContainer=styled.div`
    display:inline-flex

`

const Title=styled.div<{fsize:number,top:number,left:number}>`
    color:white;
    font-size:${(props)=>props.fsize+'px'};
    margin-top:${(props)=>props.top+'rem'};
    margin-left:${(props)=>props.left+'rem'};
   
`
const Text=styled.div<{fsize:number,top:number,left:number}>`
    color:white;
    font-size:${(props)=>props.fsize+'px'};
    margin-top:${(props)=>props.top+'rem'};
    margin-left:${(props)=>props.left+'rem'};
    font-family:Pretendard-ExtraLight;

`

export default function catchMe(){

    const whoau="매일 컴퓨터 앞에서 개발하는 것을 좋아하고\n실 없는 얘기를 하며 사람들과 이야기 하고 웃는 것을 \n좋아하는 사람이에요.\n기록하고 남겨두는 것을 좋아합니다. "+
    "과거에 얽매이는 것을 싫어해서 \n현재를 살려하지만\n추억을 먹고 사는 이상한 사람입니다.";
    const age="나이는 22살이고, 서울에 살아요.";
    const mbti="MBTI는 INFJ와 ISFJ가 반반 나오는 생존형 내향형 인간입니다.\n"+
    "집을 좋아하지만 집에 있어도 집에 있고 싶은 알 수 없는 인간 입니다.";
    const eat="매운것을 못먹고 끼니를 초콜릿으로 때울만큼 단 것을 좋아하는 사람이에요.\n 햄버거는 좋아하지 않아요 먹을때마다 배탈나거든요 ";
    const contact="인스타그램은 @jjungminlee22일거고(?)\n"+ 
    "이런 제가 재밌어보이는 인간 같다면 \n julie0964@naver.com으로 메일을 주세요"
    return(
        <>
            <CustomNav/>
            <MainContainer>
                <MainImg>
                            <Image src='/images/catchme1.svg' alt="" width={355} height={644} />
                </MainImg>
                
                <SubContainer>
                    <TextContainer>
                            <Title fsize={40} top={1.5} left={4} >Catch ME!</Title>
                            <Title fsize={20} top={2.5} left={1}>(2023 ver.)</Title>
                    </TextContainer>
                    <Text fsize={20} top={1.5} left={4}>잡았다 요놈!</Text>
                    <TextContainer>
                        <div style={{whiteSpace: 'pre-wrap'}}>
                                <Text fsize={25} top={1.5} left={4}>😺 WHO.A.U</Text>
                                <Text fsize={15} top={1.5} left={4}>{whoau}</Text>
                        </div>
                        <div style={{whiteSpace: 'pre-wrap'}}>
                                <Text fsize={25} top={1.5} left={4}>🌈 Age,Region</Text>
                                <Text fsize={15} top={1.5} left={4}>{age}</Text>

                        </div>
                    </TextContainer>
                    <TextContainer>
                        <div style={{whiteSpace: 'pre-wrap'}}>
                                <Text fsize={25} top={1.5} left={4}>🔫 MBTI</Text>
                                <Text fsize={15} top={1.5} left={4}>{mbti}</Text>
                        </div>
                        <div style={{whiteSpace: 'pre-wrap'}}>
                                <Text fsize={25} top={1.5} left={4}>🍔 Eat!</Text>
                                <Text fsize={15} top={1.5} left={4}>{eat}</Text>

                        </div>

                    </TextContainer>
                   
                    
                    <TextContainer>
                        <div style={{whiteSpace: 'pre-wrap'}}>
                                <Text fsize={25} top={1.5} left={4}>💌 Contact Me!</Text>
                                <Text fsize={15} top={1.5} left={4}>{contact}</Text>

                        </div>
                    </TextContainer>
                    
                </SubContainer>
                
                
                
                
            </MainContainer>
            
            
        </>
        
    );
}