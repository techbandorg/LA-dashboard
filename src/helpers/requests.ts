import axios from 'axios';
import { decryptUrlParams } from './utils';
import { CreateSubArgs } from './types';

export const getUserSubs = (account: string) => {
  return axios.get(`https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userAddress=${account}`)
    .then(response => response.data)
};

export const checkUserSub = () => {
  const { merchant, userId, subscriptionId } = decryptUrlParams()
  return axios.get(
    `https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userId=${userId}&subscriptionId=${subscriptionId}&merchant=${merchant}`
    // `https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userId=${73}&subscriptionId=${77}&merchant=${'test'}`
  ).then(response => response.data)
};

// @ts-ignore
export const createUserSub = (account, setIsMintPending, setIsLinkChanged, setIsError) => {
  const options = Object.assign(decryptUrlParams(), {'userAddress': account});
  setIsMintPending(true)

  if (options) {
    return axios.post('https://liqiudaccess-backend.herokuapp.com/api/mint-nft/create', {...options})
      .then(response => {
        console.log('mint success');
        window.history.pushState({}, '', 'cards');
        setIsMintPending(false)
        setIsLinkChanged(true)
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