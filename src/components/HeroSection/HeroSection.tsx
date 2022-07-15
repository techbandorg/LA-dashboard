import React from 'react';
import { Button, Text, Title } from '../theme';
import LinkInfo from '../LinkInfo/LinkInfo';
import { Container, Img, ImgContainer } from './styles';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { HeroSectionProps } from '../types';



const HeroSection:React.FC<HeroSectionProps> = ({active, isUserHasSubs, isLinked}) => {
  return (
    <div>
      {(() => {
        if (active && isUserHasSubs && isLinked) return (
          <>
            <Container>
              <Title margin={'0 0 16px 0'}>Liquid access</Title>
              <LinkInfo />
            </Container>
            <Text margin={'0 0 16px 0'} fontSize={'18px'}>Transform subscription to NFT</Text>
            <Button padding={'6px 24px'}>Mint</Button>
          </>
        )

        if (active && isUserHasSubs && !isLinked) return (
          <Title margin={'0 0 16px 0'}>Liquid access</Title>
        )

        if (active && !isUserHasSubs && isLinked) return (
          <>
            <Title margin={'0 0 16px 0'}>Liquid access</Title>
            <Text margin={'0 0 16px 0'} fontSize={'18px'}>Transform subscription to NFT</Text>
            <Button padding={'6px 24px'}>Mint</Button>
          </>
        )

        else return (
          <>
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
          </>
        )
      })()}
    </div>
  );
};

export default HeroSection;