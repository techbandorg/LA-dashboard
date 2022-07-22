import axios from 'axios';
import { decryptUrlParams } from './utils';
import { CreateSubArgs } from './types';

export const getUserNfts = (account: string) => {
  return axios.get(`https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userAddress=${account}`)
    .then(response => response.data)
};

export const checkNftExist = () => {
  const { merchant, userId, subscriptionId } = decryptUrlParams()
  return axios.get(
    `https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userId=${userId}&subscriptionId=${subscriptionId}&merchant=${merchant}`
    // `https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userId=${73}&subscriptionId=${77}&merchant=${'test'}`
  ).then(response => response.data)
};

// @ts-ignore
export const createUserNft = (account, setIsMintPending, setIsLinked, setIsError) => {
  const options = Object.assign(decryptUrlParams(), {'userAddress': account});
  setIsMintPending(true)

  if (options) {
    return axios.post('https://liqiudaccess-backend.herokuapp.com/api/mint-nft/create', {...options})
      .then(response => {
        window.history.pushState({}, '', 'cards');
        setIsMintPending(false)
        setIsLinked(false)
      })
      .catch((error) => {
        setIsError(true)
        setIsMintPending(false)
      })
  }
};

// "merchant": "Migogo",
//   "userId": 25,
//   "subscriptionId": 25,
//   "userAddress": "0x7ff7DAb2f9538613E68ddeAAb823DF55CEB56c42"