import React from 'react';
import { Button, RouterLink } from '../../../theme';
import { Logo, Wrapper } from './styles';
import { injected } from '../../../helpers/connectors';
import { useWeb3React } from '@web3-react/core';
import { stringTrim } from '../../../helpers/utils';
import {ReactComponent as WalletIcon} from '../../../assets/icons/wallet.svg'


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

  return (
    <Wrapper>
        <RouterLink background={'transparent'} hover={'transparent'} to='/dashboard'>
          <Logo>
            LA dashboard
          </Logo>
        </RouterLink>
        <Button gap={'10px'} onClick={walletConnect}>
          {account
            ? <>
              <WalletIcon width={'25px'} height={'25px'} fill={'#fff'}/>
              <span>{stringTrim(account, 12)}</span>
            </>
            : <>Connect wallet</>
          }
        </Button>
    </Wrapper>
  );
};

export default Header;
