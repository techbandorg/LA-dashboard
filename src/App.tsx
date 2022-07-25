import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MintPage from './pages/MintPage/MintPage';
import NftsPage from './pages/NftsPage/NftsPage';
import { useWeb3React } from '@web3-react/core';


function App() {
  const { account } = useWeb3React()

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={account ? <NftsPage/> : <HomePage/>} />
        <Route path='/:link' element={account ? <MintPage /> : <HomePage/>} />
        <Route path='/nfts' element={<NftsPage />} />
      </Routes>
    </div>
  );
}

export default App;
