import React, { useEffect, useState } from 'react';
import { decryptUrlParams } from '../utils';
import { Text } from '../theme';
import { UrlParams } from '../types';


const LinkInfo = () => {
  const [urlParams, setUrlParams] = useState<UrlParams>();

  useEffect(() => {
    setUrlParams(decryptUrlParams());
  }, []);

  return (
    <div>
      <Text fontWeight={'600'} fontSize={'18px'}>
        Merchant name:
        <Text color={'palegreen'}>{urlParams?.merchant}</Text>
      </Text>
      <Text fontWeight={'600'} fontSize={'18px'}>
        User id:
        <Text color={'palegreen'}>{urlParams?.userId}</Text>
      </Text>
      <Text fontWeight={'600'} fontSize={'18px'}>
        Subscription id:
        <Text color={'palegreen'}>{urlParams?.subscriptionId}</Text>
      </Text>
    </div>
  );
};

export default LinkInfo;