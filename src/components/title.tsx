import React from 'react'
import styled from 'styled-components'

const Title = () => {
  return (
    <Container>
      <StyledTitle>Nick&nbsp;</StyledTitle>
      <AccentStyledTitle>Wylynko</AccentStyledTitle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.h1`

  margin: 0;
  display: inline-block;

  font-size: 6em;

  @media (max-width: 640px) { /* mobile */
    font-size: 14vw;
  }

`;

const AccentStyledTitle = styled(StyledTitle)`

  color: var(--accent-color);

`;

export default Title