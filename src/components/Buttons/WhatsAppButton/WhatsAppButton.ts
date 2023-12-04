import styled from 'styled-components';

export const WppButton = styled.a`
  background-color: var(--red);
  color: white;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin: 10px;
  width: 200px;
  
  &:hover {
    background-color: var(--redh);
  }
`