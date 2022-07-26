import styled from 'styled-components';
import {ReactComponent as Cross} from '../../../assets/icons/cross.svg'

export const Wrapper = styled.div<{border?: string, background?: string}>`
  background-color: ${({background}) => background ?? '#251666'};
  border-radius: 5px;
  position: relative;
`

export const Content = styled.div`
  padding: 2em;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`

export const CrossIcon = styled(Cross)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`