import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './styles';
import { Text } from '../../theme';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { useWeb3React } from '@web3-react/core';
import SubsCards from '../SubsCards/SubsCards';
import MintSection from '../MintSection/MintSection';
import DefaultSection from '../DefaultSection/DefaultSection';
import { getUserSubs } from '../../helpers/requests';


const Main: React.FC = () => {
  const { account } = useWeb3React();
  const [isMintPending, setIsMintPending] = useState(false)
  const [isLinked, setIsLinked] = useState(false)
  const [isLinkChanged, setLinkChanged] = useState(false)
  const [subsInfo, setSubsInfo] = useState([])

  useEffect(() => {
    if (window.location.href.includes('_*')) setIsLinked(true)
    if (account) getUserSubs(account).then(response => setSubsInfo(response))
  }, [account]);

  useEffect(() => {
    if (!window.location.href.includes('_*')) setIsLinked(false)
    // @ts-ignore
    getUserSubs(account).then(response => setSubsInfo(response))
  }, [isLinkChanged]);

  console.log();

  return (
    <Wrapper>
      <Content>
        {!account && <DefaultSection/>}

        {(() => {
          if (account && isLinked) return (
              <MintSection
                setIsMintPending={setIsMintPending}
                isMintPending={isMintPending}
                setIsLinkChanged={setLinkChanged}
                setIsLinked={setIsLinked}
              />
            )
          if (account && subsInfo.length && !isLinked) return <SubsCards subsInfo={subsInfo}/>
          if (account && !subsInfo.length && !isLinked) return <Text margin={'0 0 16px 0'} fontSize={'18px'}>You haven't any NFT</Text>
        })()}

      </Content>
    </Wrapper>
)};

export default Main;