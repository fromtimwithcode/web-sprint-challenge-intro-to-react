// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
`;

export default function Character(props) {
    const { data } = props;

    return(
        <StyledDiv>
            {data.name}
        </StyledDiv>
    )
}