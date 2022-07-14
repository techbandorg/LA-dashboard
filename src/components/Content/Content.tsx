// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Wrapper, Content } from './styles';
import { decryptUrlParams  } from '../utils';


const Main:React.FC = () => {
  const [urlParams, setUrlParams] = useState({})

  useEffect(() => {
    setUrlParams(decryptUrlParams())
  }, []);

  return (
    <Wrapper>
      <Content>
        <div style={{fontWeight: 'bold', fontSize: '22px'}}>Merchant name: <span style={{color: 'palegreen'}}>{urlParams?.merchant}</span></div>
        <div style={{fontWeight: 'bold', fontSize: '22px'}}>User id: <span style={{color: 'palegreen'}}>{urlParams?.userId}</span></div>
        <div style={{fontWeight: 'bold', fontSize: '22px'}}>Subscribtion id: <span style={{color: 'palegreen'}}>{urlParams?.subscriptionId}</span></div>
      </Content>
    </Wrapper>
  );
};

export default Main;