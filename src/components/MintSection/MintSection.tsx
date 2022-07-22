import React, { useEffect, useState } from 'react';
import { Button, Paragraph, Title, Text } from '../../theme';
import { MintSectionProps } from '../../helpers/types';
import { checkNftExist, createUserNft } from '../../helpers/requests';
import { useWeb3React } from '@web3-react/core';
import ErrorBanner from '../ErrorBanner/ErrorBanner';

const MintSection: React.FC<MintSectionProps> = ({ setIsMintPending, isMintPending, setIsLinked }) => {
  const { account } = useWeb3React();
  const [isNftExists, setIsNftExists] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // checkNftExist().then(response => setSubAccount(response[0]?.userAddress));
    checkNftExist().then(response => response?.length && setIsNftExists(true));
  }, []);

  return (
    <div>
      <Title margin={'0 0 16px 0'}>Liquid access</Title>
      {isNftExists
        ? <>
          <Paragraph margin={'0 0 16px 0'} fontSize={'18px'}>This subscription already transformed</Paragraph>
          <Button onClick={() => {
            window.history.pushState({}, '', 'cards');
            setIsLinked(false);
          }}>
            Go to dashboard
          </Button>
        </>
        : <>
          <Paragraph margin={'0 0 16px 0'} fontSize={'18px'}>
            This wallet <Text color={'palegreen'} fontWeight={'600'}>{account}</Text> will receive nft
          </Paragraph>
          <Paragraph margin={'0 0 16px 0'} fontSize={'18px'}>Transform subscription to NFT</Paragraph>
          <Button padding={'6px 24px'} onClick={() => createUserNft(account, setIsMintPending, setIsLinked, setIsError)}>
            {isMintPending ? 'Pending...' : 'Mint'}
          </Button>
        </>
      }
      {isError && <ErrorBanner />}
    </div>
  )
}


export default MintSection;