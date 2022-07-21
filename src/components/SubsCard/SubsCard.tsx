import React from 'react';
import { Wrapper, Content } from './styles';
import { SubsCardsProps } from '../../helpers/types';
import { Title, Link, Text } from '../../theme';


const SubsCard:React.FC<SubsCardsProps> = ({card}) => {
  const { merchant, transactionHash, nftId } = card

  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{merchant}</Title>
        <Text>NFT: {nftId}</Text>
        {/*<Link href={`https://mumbai.polygonscan.com/tx/${transactionHash}`} target='_blank'>View on scan</Link>*/}
        <Link href={`https://ropsten.etherscan.io/tx/${transactionHash}`} target='_blank'>View on scan</Link>
      </Content>
    </Wrapper>
  );
};

export default SubsCard;