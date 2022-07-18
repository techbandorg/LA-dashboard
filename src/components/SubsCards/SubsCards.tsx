import React, { useEffect, useState } from 'react';
import { Text } from '../../theme';
import SubsCard from '../SubsCard/SubsCard';
import { Wrapper, CardsContainer } from './styles';
import { getUserSubs } from '../../helpers/requests';
import { useWeb3React } from '@web3-react/core';


const SubsCards = ({isMintPending}:{isMintPending: boolean}) => {
  const { account } = useWeb3React();
  const [subsInfo, setSubsInfo] = useState([])

  useEffect(() => {
    if (account) getUserSubs(account).then(response => setSubsInfo(response))
  }, []);

  useEffect(() => {
    if (account) getUserSubs(account).then(response => setSubsInfo(response))
  }, [isMintPending]);

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