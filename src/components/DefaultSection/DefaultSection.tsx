import React from 'react';
import { Paragraph, Title } from '../../theme';
import { Wrapper, Img, ImgContainer } from './styles';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';


const DefaultSection = () => {
  return (
    <Wrapper>
      <div>
        <Title margin={'0 0 16px 0'}>Liquid access</Title>
        <Paragraph maxWidth={'600px'}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
          similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
        </Paragraph>
      </div>
      <ImgContainer>
        <Img src={nftMain} />
      </ImgContainer>
    </Wrapper>
  );
};

export default DefaultSection;