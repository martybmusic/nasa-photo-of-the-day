import React from 'react';
import styled from 'styled-components'

const StyledContent = styled.div`
  color: ${(props) => props.theme.primaryColor};
  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
  button {
     background-color: #007AAF;
  }
`
const Content = (props) => {
    const { info, title, date } = props;

    return (
        <StyledContent>
        <container>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{info}</p>
        </container>
        </StyledContent>
    )
}

export default Content;