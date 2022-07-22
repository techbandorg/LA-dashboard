import React, { useEffect, useState } from 'react'
import { injected } from '../../helpers/connectors';
import { useWeb3React } from '@web3-react/core'
import Loader from '../Loader/Loader';

function MetamaskProvider({ children }:{children: JSX.Element}) {
  const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    injected
      .isAuthorized()
      .then((isAuthorized: any) => {
        setLoaded(true)
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(injected)
        }
      })
      .catch(() => {
        setLoaded(true)
      })
  }, [activateNetwork, networkActive, networkError])

  if (loaded) {
    return children
  }
  return <Loader stroke={'#fff'}/>
}

export default MetamaskProvider