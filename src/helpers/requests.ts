import axios from 'axios';
import { decryptUrlParams } from './utils';

export const getUserSubs = (account: string) => {
  return axios.get(`https://liqiudaccess-backend.herokuapp.com/api/mint-nft/user-nft/?userAddress=${account}`)
    .then(response => response.data)
};

export const createUserSub = (account: string | null | undefined) => {
  const options = Object.assign(decryptUrlParams(), {'userAddress': account});

  return axios.post('https://liqiudaccess-backend.herokuapp.com/api/mint-nft/create', {
    "merchant": "Migogo",
    "userId": 24,
    "subscriptionId": 24,
    "userAddress": "0x7ff7DAb2f9538613E68ddeAAb823DF55CEB56c42"
  })
    .then(response => console.log(response))
};

// {
//   "merchant": "Netflix",
//   "userId": 5,
//   "subscriptionId": 55,
//   "userAddress": "0xa080c64E6a2937B327b50B75B408FBD5C7393f2B"
// }