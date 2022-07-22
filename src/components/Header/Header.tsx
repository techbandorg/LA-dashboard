import React, { useEffect } from 'react';
import { Button } from '../../theme';
import { Logo, Wrapper } from './styles';
import { injected } from '../../helpers/connectors';
import { useWeb3React } from '@web3-react/core';
import { stringTrim } from '../../helpers/utils';
// @ts-ignore
import {ReactComponent as WalletIcon} from '../../assets/icons/wallet.svg'


const Header:React.FC = () => {
  const { account, activate } = useWeb3React()

  const walletConnect = async () => {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', 'true')
    } catch (e: any) {
      console.error(e)
    }
  };

  // const walletDisconnect = () => {
  //   try {
  //     deactivate()
  //     localStorage.setItem('isWalletConnected', 'false')
  //   } catch (e) {
  //     console.error(e)
  //   }
  // };
  //
  const connectWalletOnPageLoad = async () => {
    if (localStorage?.getItem('isWalletConnected') === 'true') {
      try {
        await activate(injected)
        localStorage.setItem('isWalletConnected', 'true')
        // setIsUserHasSubs(true)
      } catch (e) {
        console.error(e)
      }
    }
  };

  useEffect(() => {
    connectWalletOnPageLoad()
  }, []);

  return (
    <Wrapper>
        <Logo>LA DASHBOARD</Logo>
        <Button gap={'10px'} onClick={walletConnect}>
          {account
            ? <>
              <WalletIcon width={'25px'} heigth={'25px'} fill={'#fff'}/>
              <span>{stringTrim(account, 12)}</span>
            </>
            : <>Connect wallet</>
          }
        </Button>
    </Wrapper>
  );
};

export default Header;
