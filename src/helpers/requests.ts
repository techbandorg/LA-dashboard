import axios from 'axios';
import { decryptUrlParams } from './utils';

const baseUrl = 'https://liqiudaccess-backend.herokuapp.com/api'

export const getUserNfts = (account: string) => {
  return axios.get(`${baseUrl}/mint-nft/user/?userAddress=${account}`)
    .then(response => response.data)
};

export const getUserMerchantNfts = (account: string) => {
  const { merchantId } = decryptUrlParams()
  return axios.get(`${baseUrl}/mint-nft/user-nft/?merchant=Netflix&userAddress=${account}`)
    .then(response => response.data)
};

export const checkNftExist = (account: string) => {
  const { userId } = decryptUrlParams()
  return axios.get(
    `${baseUrl}/mint-nft/user/?userId=${userId}&userAddress=${account}`
  ).then(response => response.data)
};

// @ts-ignore
export const createUserNft = (account, setIsMintPending, setIsError, navigate) => {
  const options = Object.assign(decryptUrlParams(), {'userAddress': account});
  setIsMintPending(true)

  if (options) {
    return axios.post(`${baseUrl}/mint-nft/create`, {...options})
      .then(response => {
        navigate('/dashboard', {replace: true})
        setIsMintPending(false)
      })
      .catch((error) => {
        setIsError(true)
        setIsMintPending(false)
      })
  }
};