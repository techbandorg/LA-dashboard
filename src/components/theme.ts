import styled from 'styled-components';

export const Button = styled.button<{background?: string, padding?: string, color?: string}>`
  background-color: rebeccapurple;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4e2877;
  }
`