import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "./styledLinks"

export const DropDown = ({ children, hidden }: { children: JSX.Element | JSX.Element[] | string, hidden: JSX.Element }) => {

  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div 
      onClick={() => setClicked(state => !state)} 
      style={{ display: 'content' }}
      >
      {children}
      <Container clicked={clicked}>
        {hidden}
      </Container>
    </div>
  )
}

const Container = styled.div`
  overflow: hidden;
  max-height: ${({ clicked }: { clicked: boolean }) =>
    clicked ? `1000px` : "0px"};
  transition: all 250ms ease-in-out;
  width: 400px;
  margin-top: ${({ clicked }: { clicked: boolean }) =>
    clicked ? `8px` : "0px"};
  margin-bottom: ${({ clicked }: { clicked: boolean }) =>
    clicked ? `8px` : "0px"};
`
