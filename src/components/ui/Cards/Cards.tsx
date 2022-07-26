import React from 'react';
import { Paragraph } from '../../../theme';
import Card from '../Card/Card';
import { Wrapper, CardsContainer } from './styles';


const Cards = ({subsInfo}:{subsInfo: any}) => {
  return (
    <Wrapper>
      <Paragraph maxWidth={'600px'} fontSize={'18px'}>
        Your nft subscriptions
      </Paragraph>
      <CardsContainer>
        {subsInfo.map((card: { merchant: string; transactionHash: string; nftId: number; }, index: number) => (
          <Card key={index} card={card}/>
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default Cards;