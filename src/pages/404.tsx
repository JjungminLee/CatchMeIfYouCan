import Image from 'next/image';
import CustomNav from 'components/navbar';
import styled from 'styled-components'
const MainContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;
const Title=styled.div`
    font-size:50px;
    color:white;

`


export default function error(){
    return(
        <MainContainer>
            <CustomNav/>
            <Image src='/images/error-404.png' alt="" width={383} height={381} />
            <Title>공사중입니당</Title>
        </MainContainer>
    );
}