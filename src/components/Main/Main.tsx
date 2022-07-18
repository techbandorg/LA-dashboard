import React  from 'react';
import { Wrapper, Content } from './styles';
import { Text } from '../../theme';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { MainProps } from '../../helpers/types';
import { useWeb3React } from '@web3-react/core';
import SubsCards from '../SubsCards/SubsCards';
import HeroSection from '../HeroSection/HeroSection';


const Main: React.FC<MainProps> = ({ isUserHasSubs }) => {
  const { active } = useWeb3React();

  return (
    <Wrapper>
      <Content>
        <HeroSection active={active}/>
        {(() => {
          if (active && isUserHasSubs) return <SubsCards/>
          if (active && !isUserHasSubs) return <Text margin={'0 0 16px 0'} fontSize={'18px'}>You haven't any NFT</Text>
        })()}
      </Content>
    </Wrapper>
)};

export default Main;