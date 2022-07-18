import React from 'react';
import { Wrapper, Content } from './styles';
import { SubsCardsProps } from '../../helpers/types';
import { Title, Link } from '../../theme';


const SubsCard:React.FC<SubsCardsProps> = ({card}) => {
  console.log(card);
  const { merchant } = card

  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{merchant}</Title>
        {/*<Text>NFT: {nft}</Text>*/}
        <Link target='_blank'>View on scan</Link>
      </Content>
    </Wrapper>
  );
};

export default SubsCard;