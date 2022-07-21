import React from 'react';
import { Paragraph } from '../../theme';
import SubsCard from '../SubsCard/SubsCard';
import { Wrapper, CardsContainer } from './styles';


const SubsCards = ({subsInfo}:{subsInfo: any}) => {
  return (
    <Wrapper>
      <Paragraph maxWidth={'600px'} fontSize={'18px'}>
        Your nft subscriptions
      </Paragraph>
      <CardsContainer>
        {subsInfo.map((card: { merchant: string; transactionHash: string; nftId: number; }, index: number) => (
          <SubsCard key={index} card={card}/>
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default SubsCards;