import React from 'react';
import { Paragraph } from '../../theme';
import NftCard from '../NftCard/NftCard';
import { Wrapper, CardsContainer } from './styles';


const NftCards = ({subsInfo}:{subsInfo: any}) => {
  return (
    <Wrapper>
      <Paragraph maxWidth={'600px'} fontSize={'18px'}>
        Your nft subscriptions
      </Paragraph>
      <CardsContainer>
        {subsInfo.map((card: { merchant: string; transactionHash: string; nftId: number; }, index: number) => (
          <NftCard key={index} card={card}/>
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default NftCards;