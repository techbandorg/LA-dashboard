import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './styles';
import { Paragraph } from '../../theme';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { useWeb3React } from '@web3-react/core';
import NftCards from '../NftCards/NftCards';
import MintSection from '../MintSection/MintSection';
import DefaultSection from '../DefaultSection/DefaultSection';
import { getUserNfts } from '../../helpers/requests';


const Main: React.FC = () => {
  const { account } = useWeb3React();
  const [isMintPending, setIsMintPending] = useState(false)
  const [isLinked, setIsLinked] = useState(false)
  const [subsInfo, setSubsInfo] = useState([])

  useEffect(() => {
    if (window.location.href.includes('_*')) setIsLinked(true)
    if (account) getUserNfts(account).then(response => setSubsInfo(response))
  }, [account]);

  useEffect(() => {
    if (account) getUserNfts(account).then(response => setSubsInfo(response))
  }, [isLinked]);

  return (
    <Wrapper>
      <Content>
        {!account && <DefaultSection/>}

        {(() => {
          if (account && isLinked) return (
              <MintSection
                setIsMintPending={setIsMintPending}
                isMintPending={isMintPending}
                setIsLinked={setIsLinked}
              />
            )
          if (account && subsInfo.length && !isLinked) return <NftCards subsInfo={subsInfo}/>
          if (account && !subsInfo.length && !isLinked) return <Paragraph margin={'0 0 16px 0'} fontSize={'18px'}>You haven't any NFT</Paragraph>
        })()}

      </Content>
    </Wrapper>
)};

export default Main;