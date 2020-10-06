import styled from 'styled-components'

export const Link = styled.a`

  color: ${({light = false}: {light?: boolean}) => light ? 'var(--link-color)' : 'var(--accent-color)'};

  margin: 0.1em;
  padding: 0.1em;

  text-decoration: underline;
  cursor: pointer;
`;