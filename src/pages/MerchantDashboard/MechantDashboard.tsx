import React, { useState } from 'react';
import { Paragraph } from '../../theme';
import { Wrapper, CardsContainer } from './styles';
import Card from '../../components/ui/Card/Card';


const MerchantDashboard = () => {
  const [nftsInfo, setNftsInfo] = useState([{
    merchant: 'TestMerchant',
    nftId: 555
  }]);


  return (
    <Wrapper>
        <Paragraph fontSize='18px'>
          Merchant nft subscriptions
        </Paragraph>
        <CardsContainer>
          {nftsInfo.map((card: { merchant: string; nftId: number; }, index: number) => (
            <Card key={index} card={card} />
          ))}
        </CardsContainer>
    </Wrapper>
  );
};

export default MerchantDashboard;