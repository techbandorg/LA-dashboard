import React, { useEffect, useState } from 'react';
import { Button, Text, Title } from '../../theme';
import LinkInfo from '../LinkInfo/LinkInfo';
import { Container, Img, ImgContainer } from './styles';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { HeroSectionProps } from '../../helpers/types';


const HeroSection:React.FC<HeroSectionProps> = ({active}) => {
  const [isLinked, setIsLinked] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('_*')) setIsLinked(true);
  }, []);

  return (
    <div>
      {(() => {
        if (active && !isLinked) return <Title margin={'0 0 16px 0'}>Liquid access</Title>
        if (active && isLinked) return (
          <>
            <Container>
              <Title margin={'0 0 16px 0'}>Liquid access</Title>
              <LinkInfo />
            </Container>
            <Text margin={'0 0 16px 0'} fontSize={'18px'}>Transform subscription to NFT</Text>
            <Button padding={'6px 24px'}>Mint</Button>
          </>
        )
        else return (
          <Container>
            <div>
              <Title margin={'0 0 16px 0'}>Liquid access</Title>
              <Text maxWidth={'600px'}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
              </Text>
            </div>
            <ImgContainer>
              <Img src={nftMain} />
            </ImgContainer>
          </Container>
        )
      })()}
    </div>
  );
};

export default HeroSection;