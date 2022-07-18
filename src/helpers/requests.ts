import axios from 'axios';
import { decryptUrlParams } from './utils';

export const getUserSubs = (account: string) => {
  return axios.get(`https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userAddress=${account}`)
    .then(response => response.data)
};

export const createUserSub = (account: string | null | undefined, setIsMintPending: (b: boolean) => void) => {
  const options = Object.assign(decryptUrlParams(), {'userAddress': account});
  setIsMintPending(true)

  return axios.post('https://liqiudaccess-backend.herokuapp.com/api/mint-nft/create', {
    "merchant": "Migogo",
    "userId": 25,
    "subscriptionId": 25,
    "userAddress": "0x7ff7DAb2f9538613E68ddeAAb823DF55CEB56c42"
  })
    .then(response => {
      setIsMintPending(false)
    })
};