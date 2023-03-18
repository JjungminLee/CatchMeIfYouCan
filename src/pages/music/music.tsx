import CustomNav from "components/navbar";
import Image from "next/image"
import styled from 'styled-components'
import {Container, Row,Col,Dropdown,Accordion, Button} from 'react-bootstrap';
import {useRouter} from 'next/router';
const MainContainer=styled.div`
    
    display:inline-flex;
    overflow: auto
   
`
const SubContainer=styled.div`
    display:flex;
    flex-direction:column;
    white-space: 'pre-wrap';
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
const Space=styled.div`
    margin:0.5rem;
`
const MainSpace=styled.div`
    margin:2rem;
`

const Title=styled.div<{fsize:number,top:number,left:number}>`
    color:white;
    font-size:${(props)=>props.fsize+'px'};
    margin-top:${(props)=>props.top+'rem'};
    margin-left:${(props)=>props.left+'rem'};
    white-space: 'pre-line'
   
`
const Text=styled.div<{fsize:number,top:number,left:number}>`
    color:white;
    font-size:${(props)=>props.fsize+'px'};
    margin-top:${(props)=>props.top+'rem'};
    margin-left:${(props)=>props.left+'rem'};
    font-family:Pretendard-ExtraLight;

`
const BtnText=styled.div<{fsize:number,top:number,left:number}>`
    
    font-size:20px;
    text-align: center;
    position: absolute;
    top:${(props)=>props.top+'%'};
    left:${(props)=>props.left+'%'};
    color:white;
    background-color:transparent;

`

const ViewMoreBtn=styled.button<{top:number, left:number}>`
    border: 0;
    background-color: transparent;
    margin-top:${(props)=>props.top+'rem'};
    margin-left:${(props)=>props.left+'rem'};
`;
const Grid=styled.div`
    align-items:center;
    justify-content:center;
    padding: 20px;
    
`;
const ImageGrid=styled.div`
    vertical-align: middle;

`;
const Box=styled.button`
    border: 0;
    background-color: transparent;
    position: relative; 
    

`;

export default function music(){
    const router=useRouter();

    const musicDesciption="매일 1시간 10분씩 통학하면서 음악만 듣는 주인장의 뮤직 큐레이션입니다.\n 알앤비를 좋아하고 음악에 감상평 달기를 좋아해요.\n"+
    "너무 감성적인 것 같다면 심신미약이라고 생각해주세요.";
    return(
        <>
            <CustomNav/>
            <MainContainer>
                <MainImg>
                    <MainImg>
                                <Image src='/images/musicMain.svg' alt="" width={355} height={644} />
                    </MainImg>
                </MainImg>
                <SubContainer >
                    <SubContainer>
                        <TextContainer >
                                <Title fsize={40} top={4} left={4} >Music</Title>
                                
                        </TextContainer>
                        <Space></Space>
                        <div style={{whiteSpace: 'pre-line'}}>
                            <Text fsize={15} top={1.5} left={4}>{musicDesciption}</Text>
                        </div>
                        <MainSpace/>
                    </SubContainer>
                    <SubContainer>
                        <TextContainer >
                                <Title fsize={30} top={1.5} left={4} >뮤직 큐레이션</Title>
                                <ViewMoreBtn top={1.5} left={30}>
                                    <Image src='/images/viewMore.svg' alt="" width={60} height={30} />
                                </ViewMoreBtn>
                        </TextContainer>
                        <Text fsize={15} top={1.5} left={4}>쓸 데없이 골라 들을 수 있다?</Text>
                    </SubContainer>
                    <Space/>
                    <SubContainer>
                        <Grid>
                            <Container >
                                <Row>
                                    <Col>
                                        <Box onClick={()=>router.replace('/music/${curation}')}>
                                            <ImageGrid>
                                                <Image  src='/images/musicCuration.svg' alt="" width={227} height={230}/>
                                                
                                            </ImageGrid>
                                            <BtnText fsize={10} top={10} left={15}>내맘대로 Steady</BtnText>
                                           
                                            
                                        </Box>
                                    </Col>
                                    <Col>
                                        <Box onClick={()=>router.replace('/catchMe')}>
                                            <ImageGrid>
                                                <Image  src='/images/musicCuration2.svg' alt="" width={227} height={230}/>
                                            
                                            </ImageGrid>
                                            <BtnText fsize={10} top={10} left={15}>봄봄봄</BtnText>

                                            
                                        </Box>
                                    </Col>
                                    <Col>
                                        <Box onClick={()=>router.replace('/catchMe')}>
                                            <ImageGrid>
                                                <Image  src='/images/musicCuration3.svg' alt="" width={227} height={230}/>
                                            
                                            </ImageGrid>
                                            <BtnText fsize={10} top={10} left={15}>이별</BtnText>
                                            
                                        </Box>
                                    </Col>
                                </Row>
                            </Container>
                
                        </Grid>
                    </SubContainer>
                </SubContainer>
               
                
                   

                
            </MainContainer>
        </>
    );
}