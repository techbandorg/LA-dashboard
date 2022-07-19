import React from 'react';
import { Wrapper, Content } from './styles';
import { SubsCardsProps } from '../../helpers/types';
import { Title, Link } from '../../theme';


const SubsCard:React.FC<SubsCardsProps> = ({card}) => {
  const { merchant, transactionHash } = card

  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{merchant}</Title>
        {/*<Text>NFT: {nft}</Text>*/}
        <Link href={`https://mumbai.polygonscan.com/tx/${transactionHash}`} target='_blank'>View on scan</Link>
      </Content>
    </Wrapper>
  );
};

export default SubsCard;