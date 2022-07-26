import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MintPage from './pages/MintPage/MintPage';
import Dashboard from './pages/Dashboard/Dashboard';
import MerchantDashboard from './pages/MerchantDashboard/MechantDashboard';


function App() {
  const { account } = useWeb3React()
  const location = useLocation()
  const navigate = useNavigate()
  const [mintPath, setMintPath] = useState('')
  const [activatePath, setActivatePath] = useState('')

  // const addRedirect = () => {
  //   const mintLink = location?.pathname.includes('mint')
  //   const activateLink = location?.pathname.includes('activate')
  //
  //   if (activateLink) return navigate('/:merchant-dashboard')
  //
  //   if (mintLink) return navigate('/:mint')
  //
  //   if (!location?.pathname.includes('/:mint') && !location?.pathname.includes('/:merchant-dashboard')) {
  //     return navigate('/dashboard')
  //   }
  // };

  const addRedirect = () => {
    if (location?.pathname.includes('mint')) {
      setMintPath(location?.pathname)
    }

    if (location?.pathname.includes('activate')) {
      setActivatePath(location?.pathname)
    }

    if (!location?.pathname.includes('mint') && !location?.pathname.includes('activate')) {
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
          <Route path='/dashboard' element={account ? <Dashboard /> : <HomePage/>} />
          <Route path={`/${mintPath}`} element={account ? <MintPage /> : <HomePage/>} />
          <Route path={`/${activatePath}`} element={account ? <MerchantDashboard/> : <HomePage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
