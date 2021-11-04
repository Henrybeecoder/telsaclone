import React from 'react'
import styled from 'styled-components'

function Section({ title, description, backgroundimg, leftBtnText, rightBtnText }) {
    return (
        <Wrap>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <ButtonAndArrow>
                <ButtonWrapper>
                    <LeftButton>{leftBtnText}</LeftButton>
                    <RightButton>{rightBtnText}</RightButton>
                </ButtonWrapper>

                <DownArrow src="/images/down-arrow.svg" />
            </ButtonAndArrow>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center; 
 background-repeat: no-repeat;
 background-image: url('/images/model-s.jpg');
 display:flex;
 justify-content:space-between;
 align-items: center;
 flex-direction: column
`
const ItemText = styled.div`
padding-top: 15vh;

`

const ButtonWrapper = styled.div`
display:flex;
margin-bottom: 10px
justify-content: space-around;
@media (max-width: 800px) {
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content:center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
font-size: 0.7500em;
cursor: pointer;
margin-right: 20px;
@media (max-width: 800px) {
    margin: 0 0 10px 0;
}
`
const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black
`
const DownArrow = styled.img`
height: 40px;
cursor:pointer;
animation: animateDown infinite 2s;
overflow-x: hidden;
`
const ButtonAndArrow = styled.div`

`