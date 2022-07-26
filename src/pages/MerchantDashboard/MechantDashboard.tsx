import React, { useEffect, useState } from 'react';
import { Paragraph } from '../../theme';
import { Wrapper, CardsContainer } from './styles';
import NftCard from '../../components/NftCard/NftCard';
import { useWeb3React } from '@web3-react/core';


const MerchantDashboard = () => {
  const { account } = useWeb3React();
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
            <NftCard key={index} card={card} />
          ))}
        </CardsContainer>
    </Wrapper>
  );
};

export default MerchantDashboard;