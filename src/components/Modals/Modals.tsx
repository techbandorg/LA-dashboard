import React from 'react';
import { Wrapper, Content, CrossIcon } from './styles';
import { Button, Paragraph, Row, Text } from '../../theme';
import { ErrorModalProps, MintModalProps } from '../../helpers/types';
import { createUserNft } from '../../helpers/requests';
import { useNavigate } from 'react-router-dom';


export const MintModal:React.FC<MintModalProps> = ({account, setIsMintModal, setIsMintPending,  setIsError}) => {
  const navigate = useNavigate()

  return (
    <Wrapper onClick={e => e.stopPropagation()}>
      <CrossIcon onClick={() => setIsMintModal(false)}/>
      <Content>
        <Row margin='16px 0' justify='center'>
          <Paragraph fontSize='18px'>
            Are you sure you want to receive the NFT at
          </Paragraph>
        </Row>
        <Row margin='0 0 30px 0'>
          <Paragraph>
            <Text color='palegreen' fontWeight='600'>{account}</Text> ?
          </Paragraph>
        </Row>
        <Row justify='center' gap='50px'>
          <Button
            background='#8d7db1'
            hover='#766699'
            padding='6px 42px'
            onClick={() => setIsMintModal(false)}
          >
              Cancel
          </Button>
          <Button
            padding={'6px 42px'}
            onClick={() => {
              setIsMintModal(false)
              createUserNft(account, setIsMintPending, setIsError, navigate)
            }}
          >
            Receive
          </Button>
        </Row>
      </Content>
    </Wrapper>
  );
};


export const ErrorModal:React.FC<ErrorModalProps> = ({ setIsErrorModal }) => {
  return (
    <Wrapper background='#6e0e0e'>
      <CrossIcon onClick={() => setIsErrorModal(false)}/>
      <Content>
        <Paragraph fontWeight={'700'} color={'crimson'}>Error:</Paragraph>
        <span>Link is deprecated or subscription with this data exist</span>
      </Content>
    </Wrapper>
  )
}