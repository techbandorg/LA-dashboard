import React from 'react';
import { Text } from '../../theme';
import SubsCard from '../SubsCard/SubsCard';
import { Wrapper, CardsContainer } from './styles';


const SubsCards = ({subsInfo}:{subsInfo: any}) => {
  return (
    <Wrapper>
      <Text maxWidth={'600px'} fontSize={'18px'}>
        Your nft subscriptions
      </Text>
      <CardsContainer>
        {subsInfo.map((card: { merchant: string; transactionHash: string; }, index: number) => (
          <SubsCard key={index} card={card}/>
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default SubsCards;