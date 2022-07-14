import React, { useEffect } from 'react';
import { Button } from '../theme';
import { Content } from './styles';
import { injected } from '../connectors';
import { useWeb3React } from '@web3-react/core';
import { stringTrim } from '../utils';


const Header:React.FC = () => {
  const {active, account, activate, deactivate } = useWeb3React()

  const walletConnect = async () => {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', 'true')
    } catch (e: any) {
      console.error(e)
    }
  };

  const walletDisconnect = () => {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', 'false')
    } catch (e) {
      console.error(e)
    }
  };

  const connectWalletOnPageLoad = async () => {
    if (localStorage?.getItem('isWalletConnected') === 'true') {
      try {
        await activate(injected)
        localStorage.setItem('isWalletConnected', 'true')
      } catch (e) {
        console.error(e)
      }
    }
  };

  useEffect(() => {
    connectWalletOnPageLoad()
  }, []);

  return (
    <header>
      <Content>
        <span>Logo</span>
        <Button onClick={walletConnect}>
          {active
            ? <>
              <span>{stringTrim(account, 12)}</span>
              <span onClick={walletDisconnect} style={{backgroundColor: 'tomato', fontWeight: 'bold', padding: "5px", marginLeft: '15px',}}>X</span>
            </>
            : <>Connect wallet</>
          }
        </Button>
      </Content>
    </header>
  );
};

export default Header;
