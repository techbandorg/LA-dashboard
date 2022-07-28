import React, { useEffect, useState } from 'react';
import { Paragraph } from '../../theme';
import { Wrapper, CardsContainer } from './styles';
import Card from '../../components/ui/Card/Card';
import { getUserMerchantNfts } from '../../helpers/requests';
import { useWeb3React } from '@web3-react/core';


const MerchantDashboard = () => {
  const { account } = useWeb3React()
  const [isMerchantCard, setIsMerchantCard] = useState(true)
  const [cardsInfo, setCardsInfo] = useState([]);

  useEffect(() => {
    if (account) getUserMerchantNfts(account).then(response => setCardsInfo(response))
  }, []);

  console.log(cardsInfo);

  return (
    <Wrapper>
        <Paragraph fontSize='18px'>
          Merchant nft subscriptions
        </Paragraph>
        <CardsContainer>
          {cardsInfo.map((card: { merchant: string; nftId: number; }, index: number) => (
            <Card key={index} card={card} isMerchantCard={isMerchantCard}/>
          ))}
        </CardsContainer>
    </Wrapper>
  );
};

export default MerchantDashboard;