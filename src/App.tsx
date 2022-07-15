import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [isUserHasSubs, setIsUserHasSubs] = useState(false)

  return (
    <div className="app">
      <Header setIsUserHasSubs={setIsUserHasSubs}/>
      <Main isUserHasSubs={isUserHasSubs}/>
    </div>
  );
}

export default App;
