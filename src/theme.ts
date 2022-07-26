import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button<{background?: string, padding?: string, color?: string, gap?: string, hover?: string}>`
  background-color: ${({background}) => background ?? 'rebeccapurple'};
  color: #fff;
  padding: ${({padding}) => padding ?? '6px 12px'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: ${({gap}) => gap ?? 0};

  &:hover {
    background-color: ${({hover}) => hover ?? '#4e2877'};
  }
`

export const DefaultLink = styled.a<{background?: string, padding?: string, color?: string,}>`
  background-color: rebeccapurple;
  text-decoration: none;
  color: #fff;
  padding: ${({padding}) => padding ?? '6px 12px'};;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #4e2877;
  }
`

export const RouterLink = styled(Link)<{background?: string, padding?: string, color?: string, hover?: string}>`
  background-color: ${({background}) => background ?? 'rebeccapurple'};
  text-decoration: none;
  color: ${({color}) => color ?? '#fff'};
  padding: ${({padding}) => padding ?? '6px 12px'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({hover}) => hover ?? '#4e2877'};
  }
`

export const Title = styled.h2<{fontSize?: string, fontWeight?: string, margin?: string}>`
  font-size: ${({fontSize}) => fontSize ?? '55px'};
  font-weight: ${({fontWeight}) => fontWeight ?? '600'};
`

export const Paragraph = styled.p<{fontSize?: string, fontWeight?: string, maxWidth?: string, color?: string, margin?: string}>`
  font-size: ${({fontSize}) => fontSize ?? '16px'};
  font-weight: ${({fontWeight}) => fontWeight ?? '400'};
  max-width: ${({maxWidth}) => maxWidth ?? 'none'};
  color: ${({color}) => color ?? '#fff'};
  margin: ${({margin}) => margin ?? '0'};
`

export const Text = styled.span<{fontSize?: string, fontWeight?: string, maxWidth?: string, color?: string, margin?: string}>`
  font-size: ${({fontSize}) => fontSize ?? '16px'};
  font-weight: ${({fontWeight}) => fontWeight ?? '400'};
  max-width: ${({maxWidth}) => maxWidth ?? 'none'};
  color: ${({color}) => color ?? '#fff'};
  margin: ${({margin}) => margin ?? '0'};
`

export const Row = styled.div<{justify?: string, margin?: string, gap?: string}>`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ?? 'auto'} ;
  margin: ${({margin}) => margin ?? '0'};
  gap: ${({gap}) => gap ?? 0};
`