import React from 'react';
import { Button } from '../theme';
import { Content } from './styles';
import { injected } from '../connectors';
import { useWeb3React } from '@web3-react/core';


const Header = () => {
  const {active, account, activate, deactivate } = useWeb3React()

  const walletConnect = async () => {
    try {
      await activate(injected)
    } catch (e: any) {
      console.error(e)
    }
  };

  const walletDisconnect = () => {
    try {
      deactivate()
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <header>
      <Content>
        <span>Logo</span>
        <Button onClick={walletConnect}>
          {active
            ? <>
              <span>{account}</span>
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
