import styled from 'styled-components';

export const Button = styled.button<{background?: string, padding?: string, color?: string, gap?: string}>`
  background-color: rebeccapurple;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: ${({gap}) => gap ?? 0};

  &:hover {
    background-color: #4e2877;
  }
`

export const Title = styled.h2<{fontSize?: string, fontWeight?: string, margin?: string}>`
  font-size: ${({fontSize}) => fontSize ?? '24px'};
  font-weight: ${({fontWeight}) => fontWeight ?? '400'};
`

export const Text = styled.p<{fontSize?: string, fontWeight?: string, maxWidth?: string}>`
  font-size: ${({fontSize}) => fontSize ?? '16px'};
  font-weight: ${({fontWeight}) => fontWeight ?? '400'};
  max-width: ${({maxWidth}) => maxWidth ?? 'none'};
`