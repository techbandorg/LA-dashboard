import React, { useEffect, useState } from 'react';
import { Paragraph } from '../../theme';
import { Wrapper, CardsContainer } from './styles';
import NftCard from '../../components/NftCard/NftCard';
import { getUserNfts } from '../../helpers/requests';
import { useWeb3React } from '@web3-react/core';


const NftsPage = () => {
  const { account } = useWeb3React();
  const [nftsInfo, setNftsInfo] = useState([]);

  useEffect(() => {
    if (account) getUserNfts(account).then(response => setNftsInfo(response));
  }, [account]);

  return (
    <Wrapper>
      {!nftsInfo.length
        ? <Paragraph fontSize='18px'>
          Your haven't any Nfts
        </Paragraph>
        : <>
          <Paragraph fontSize='18px'>
            Your nft subscriptions
          </Paragraph>
          <CardsContainer>
            {nftsInfo.map((card: { merchant: string; transactionHash: string; nftId: number; }, index: number) => (
              <NftCard key={index} card={card} />
            ))}
          </CardsContainer>
        </>
      }
    </Wrapper>
  );
};

export default NftsPage;