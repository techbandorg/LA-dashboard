import React from 'react';
import { Wrapper, Content } from './styles';
import { Paragraph, Text } from '../../theme';
import { ModalProps } from '../../helpers/types';


const Modal:React.FC<ModalProps> = ({text, account}) => {
  return (
    <Wrapper>
      <Content>
        <Paragraph margin={'0 0 16px 0'} fontSize={'18px'}>
          This wallet <Text color={'palegreen'} fontWeight={'600'}>{account}</Text> will receive nft
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default Modal;