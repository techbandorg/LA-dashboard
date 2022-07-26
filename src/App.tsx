import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MintPage from './pages/MintPage/MintPage';
import NftsPage from './pages/NftsPage/NftsPage';
import { useWeb3React } from '@web3-react/core';
import MerchantNftsPage from './pages/MerchantNftsPage/MechantNftsPage';


function App() {
  const { account } = useWeb3React()
  const location = useLocation()
  const navigate = useNavigate()

  const addRedirect = () => {
    const mintLink = location?.pathname.includes('mint')
    const activateLink = location?.pathname.includes('activate')

    if (activateLink) return navigate('/:merchant-dashboard')

    if (mintLink) return navigate('/:mint')

    if (!location?.pathname.includes('/:mint') && !location?.pathname.includes('/:merchant-dashboard')) {
      return navigate('/dashboard')
    }

  };

  useEffect(() => {
    addRedirect()
  }, [account]);

  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <Routes>
          {/*<Route path='/' element={<HomePage/>} />*/}
          <Route path='/:mint' element={account ? <MintPage /> : <HomePage/>} />
          <Route path='/dashboard' element={account ? <NftsPage /> : <HomePage/>} />
          <Route path='/:merchant-dashboard' element={account ? <MerchantNftsPage/> : <HomePage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
