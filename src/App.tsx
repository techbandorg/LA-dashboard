import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MintPage from './pages/MintPage/MintPage';
import NftsPage from './pages/NftsPage/NftsPage';
import { useWeb3React } from '@web3-react/core';
import MerchantNftsPage from './pages/MerchantNftsPage/MechantNftsPage';


function App() {
  const { account } = useWeb3React()
  const location = useLocation()
  const navigate = useNavigate()

  // const addRedirect = () => {
  //   const loc = location?.pathname.includes('_*')
  //
  //   if (account && loc) return navigate('/:link', {replace: false})
  //
  //   if (account && !loc) return navigate('/nfts')
  //
  //   if (!account && !loc) return navigate('/')
  // };
  //
  // useEffect(() => {
  //   addRedirect()
  // }, [account]);

  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/mint' element={account ? <MintPage /> : <HomePage/>} />
          <Route path='/nfts' element={<NftsPage />} />
          <Route path='/merchant-nfts' element={<MerchantNftsPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
