// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.3);
    text-align: center;
    padding: 2%;
    margin: 1%;
    width: 40%;
    border: 1px solid white;
    border-radius: 10px;
    &:hover{
        background: rgba(255, 255, 255, 0.8);
        transition: all 0.3s ease-in-out;
    }
`;

export default function Character(props) {
    const { data } = props;

    return(
        <StyledDiv>
            {data.name}
        </StyledDiv>
    )
}