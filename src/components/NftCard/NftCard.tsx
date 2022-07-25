import React from 'react';
import { Wrapper, Content } from './styles';
import { NftsCardsProps } from '../../helpers/types';
import { Title, DefaultLink, Paragraph } from '../../theme';


const NftCard:React.FC<NftsCardsProps> = ({card}) => {
  const { merchant, transactionHash, nftId } = card

  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{merchant}</Title>
        <Paragraph>NFT: {nftId}</Paragraph>
        {/*<Link href={`https://mumbai.polygonscan.com/tx/${transactionHash}`} target='_blank'>View on scan</Link>*/}
        <DefaultLink href={`https://ropsten.etherscan.io/tx/${transactionHash}`} target='_blank'>View on scan</DefaultLink>
      </Content>
    </Wrapper>
  );
};

export default NftCard;