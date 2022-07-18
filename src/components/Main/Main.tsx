import React, { useState } from 'react';
import { Wrapper, Content } from './styles';
import { Text } from '../../theme';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { MainProps } from '../../helpers/types';
import { useWeb3React } from '@web3-react/core';
import SubsCards from '../SubsCards/SubsCards';
import HeroSection from '../HeroSection/HeroSection';


const Main: React.FC<MainProps> = ({ isUserHasSubs }) => {
  const { account } = useWeb3React();
  const [isMintPending, setIsMintPending] = useState(false)

  return (
    <Wrapper>
      <Content>
        <HeroSection setIsMintPending={setIsMintPending} isMintPending={isMintPending}/>
        {(() => {
          if (account && isUserHasSubs) return <SubsCards isMintPending={isMintPending}/>
          if (account && !isUserHasSubs) return <Text margin={'0 0 16px 0'} fontSize={'18px'}>You haven't any NFT</Text>
        })()}
      </Content>
    </Wrapper>
)};

export default Main;