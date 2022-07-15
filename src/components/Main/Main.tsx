import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './styles';
import { Title, Text, Button } from '../theme';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { MainProps } from '../types';
import { useWeb3React } from '@web3-react/core';
import SubsCards from '../SubsCards/SubsCards';
import LinkInfo from '../LinkInfo/LinkInfo';
import HeroSection from '../HeroSection/HeroSection';


const Main: React.FC<MainProps> = ({ isUserHasSubs }) => {
  const { active } = useWeb3React();
  const [isLinked, setIsLinked] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('_*')) setIsLinked(true);
  }, []);


  return (
    <Wrapper>
      <Content>
          {(() => {
            if (active && isUserHasSubs && isLinked) return (
              <>
                <HeroSection active={active} isUserHasSubs={isUserHasSubs} isLinked={isLinked}/>
                <SubsCards/>
              </>
          )
            if (active && isUserHasSubs && !isLinked) return (
              <>
                <HeroSection active={active} isUserHasSubs={isUserHasSubs} isLinked={isLinked}/>
                <SubsCards/>
              </>
          )
            if (active && !isUserHasSubs && isLinked) return (
              <HeroSection active={active} isUserHasSubs={isUserHasSubs} isLinked={isLinked}/>
            )
            else return <HeroSection/>
          })()}
      </Content>
    </Wrapper>
)};

export default Main;