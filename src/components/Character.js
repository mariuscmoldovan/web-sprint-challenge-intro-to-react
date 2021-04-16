// Write your Character component here

import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: #480ca8;
    display:block;
    margin: 1% 10%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border:3px solid #f8961e;
    padding:0px 20px;
    background-color: rgba(0,200,0,0.2);
    :hover {
        width: 80%;
        height: 150px;
        background-color: #0091ad;
        transition: 5s;
    }
`
const StyledH1 = styled.h1`
    display:inline;
`
const StyledH2 = styled.h2`
    display:inline;
    color:#301934;
    background-color: #cad2c5;
    padding: 1.3%;
    border-radius: 10px 20px;
`

const Character = props => {
    const { data } = props;
    console.log(data)
    
  return (
    <StyledDiv>
        <StyledH1>{data.name}</StyledH1>
        <StyledH2>{data.birth_year}</StyledH2>
    </StyledDiv>
  );
}

export default Character;