import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './styles';
import { Text } from '../../theme';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { MainProps } from '../../helpers/types';
import { useWeb3React } from '@web3-react/core';
import SubsCards from '../SubsCards/SubsCards';
import MintSection from '../MintSection/MintSection';
import DefaultSection from '../DefaultSection/DefaultSection';


const Main: React.FC<MainProps> = ({ isUserHasSubs }) => {
  const { account } = useWeb3React();
  const [isMintPending, setIsMintPending] = useState(false)
  const [isLinked, setIsLinked] = useState(false)
  const [isLinkChanged, setLinkChanged] = useState(false)

  useEffect(() => {
    if (window.location.href.includes('_*')) setIsLinked(true)
  }, []);

  useEffect(() => {
    if (!window.location.href.includes('_*')) setIsLinked(false)
  }, [isLinkChanged]);

  return (
    <Wrapper>
      <Content>
        {!account && <DefaultSection/>}

        {(account && isLinked) && <MintSection setIsMintPending={setIsMintPending} isMintPending={isMintPending} setIsLinkChanged={setLinkChanged}/>}

        {(() => {
            if (account && isUserHasSubs && !isLinked) return <SubsCards isMintPending={isMintPending}/>
            if (account && !isUserHasSubs) return <Text margin={'0 0 16px 0'} fontSize={'18px'}>You haven't any NFT</Text>
          })()
        }
      </Content>
    </Wrapper>
)};

export default Main;