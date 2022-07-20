import React, { useEffect, useState } from 'react';
import { Button, Text, Title } from '../../theme';
import { MintSectionProps } from '../../helpers/types';
import { checkUserSub, createUserSub } from '../../helpers/requests';
import { useWeb3React } from '@web3-react/core';
import ErrorBanner from '../ErrorBanner/ErrorBanner';

const MintSection:React.FC<MintSectionProps> = ({ setIsMintPending, isMintPending, setIsLinkChanged, setIsLinked}) => {
  const { account } = useWeb3React();
  const [subAccount, setSubAccount] = useState('');
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    checkUserSub().then(response => setSubAccount(response[0]?.userAddress));
  }, []);

  return (
    <div>
      <Title margin={'0 0 16px 0'}>Liquid access</Title>
      {subAccount
        ? <>
            <Text margin={'0 0 16px 0'} fontSize={'18px'}>This subscription already transformed</Text>
            <Button onClick={() => {
              window.history.pushState({}, '', 'cards');
              setIsLinked(false)
            }
            }>Go to dashboard</Button>
          </>
        : <>
          <Text margin={'0 0 16px 0'} fontSize={'18px'}>Transform subscription to NFT</Text>
          <Button padding={'6px 24px'} onClick={() => createUserSub(account, setIsMintPending, setIsLinkChanged, setIsError)}>
            {isMintPending
              ? 'Pending...'
              : 'Mint'
            }
          </Button>
        </>
      }
      {isError && <ErrorBanner/>}
    </div>
  );
};

export default MintSection;