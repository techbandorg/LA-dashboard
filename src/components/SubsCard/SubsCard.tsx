import React from 'react';
import { Wrapper, Content } from './styles';
import { SubsCardsProps } from '../types';
import { Title, Text, Button } from '../theme';


const SubsCard:React.FC<SubsCardsProps> = ({card}) => {
  const {title, nft} = card

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Text>NFT: {nft}</Text>
        <Button>View on scan</Button>
      </Content>
    </Wrapper>
  );
};

export default SubsCard;