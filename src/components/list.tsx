import styled from "styled-components"

export const Item = styled.li`
  margin: 0.2em;
  padding: 0.2em;

  list-style-type: none;

  &:before {
    content: "·";
    margin-left: -20px;
    margin-right: 10px;
  }
`

export const List = styled.ul`
  margin: 0.5em;
  padding: 0.5em;
`
