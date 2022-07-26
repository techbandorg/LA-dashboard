import React from 'react';
import { Wrapper, Content } from './styles';
import { CardProps } from '../../../helpers/types';
import { Title, DefaultLink, Paragraph, Button } from '../../../theme';


const Card:React.FC<CardProps> = ({card, isMerchantCard}) => {
  const { merchant, transactionHash, nftId } = card

  return (
    <Wrapper background={isMerchantCard ? '#246f51' : '#251666'}>
      <Content>
        <Title fontSize={'22px'}>{merchant}</Title>
        <Paragraph>NFT: {nftId}</Paragraph>
        {/*<Link href={`https://mumbai.polygonscan.com/tx/${transactionHash}`} target='_blank'>View on scan</Link>*/}
        {isMerchantCard
          ? <Button background='#2ba763' hover='#228c52'>Activate</Button>
          : <DefaultLink href={`https://ropsten.etherscan.io/tx/${transactionHash}`} target='_blank'>View on scan</DefaultLink>
        }
      </Content>
    </Wrapper>
  );
};

export default Card;