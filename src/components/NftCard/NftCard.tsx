import React from 'react';
import { Wrapper, Content } from './styles';
import { SubsCardsProps } from '../../helpers/types';
import { Title, Link, Paragraph } from '../../theme';


const NftCard:React.FC<SubsCardsProps> = ({card}) => {
  const { merchant, transactionHash, nftId } = card

  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{merchant}</Title>
        <Paragraph>NFT: {nftId}</Paragraph>
        {/*<Link href={`https://mumbai.polygonscan.com/tx/${transactionHash}`} target='_blank'>View on scan</Link>*/}
        <Link href={`https://ropsten.etherscan.io/tx/${transactionHash}`} target='_blank'>View on scan</Link>
      </Content>
    </Wrapper>
  );
};

export default NftCard;