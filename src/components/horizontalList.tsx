import styled from 'styled-components'

export const Item = styled.li`

  margin: 0.2em;
  padding: 0.2em;
  padding-left: 20px;

  list-style-type: none;

  display: inline-block;

  &:before { 
    content: '·'; 
    margin-left: -20px; 
    margin-right: 10px; 
  };

  @media (min-width: 640px) { /* bigger than mobile */
    &:first-child {
      &:before {
        content: ''
      }
    }
  }

`;

export const List = styled.ul`

  margin: 0.05em;
  padding: 0.05em;

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 640px) { /* mobile */
    flex-direction: column;
    justify-content: left;
  }

`;