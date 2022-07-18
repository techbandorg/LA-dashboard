import React from 'react';
import { Text } from '../../theme';
import { subsInfo } from '../../helpers/constants';
import SubsCard from '../SubsCard/SubsCard';
import { Wrapper, CardsContainer } from './styles';


const SubsCards = () => {
  return (
    <Wrapper>
      <Text maxWidth={'600px'} fontSize={'18px'}>
        Your nft subscriptions
      </Text>
      <CardsContainer>
        {subsInfo.map((card, index) => (
          <SubsCard key={index} card={card}/>
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default SubsCards;