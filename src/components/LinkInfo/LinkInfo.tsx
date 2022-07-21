import React, { useEffect, useState } from 'react';
import { decryptUrlParams } from '../../helpers/utils';
import { Paragraph } from '../../theme';
import { UrlParams } from '../../helpers/types';


const LinkInfo = () => {
  const [urlParams, setUrlParams] = useState<UrlParams>();

  useEffect(() => {
    // setUrlParams(decryptUrlParams());
  }, []);

  return (
    <div>
      <Paragraph fontWeight={'600'} fontSize={'18px'}>
        Merchant name:
        <Paragraph color={'palegreen'}>{urlParams?.merchant}</Paragraph>
      </Paragraph>
      <Paragraph fontWeight={'600'} fontSize={'18px'}>
        User id:
        <Paragraph color={'palegreen'}>{urlParams?.userId}</Paragraph>
      </Paragraph>
      <Paragraph fontWeight={'600'} fontSize={'18px'}>
        Subscription id:
        <Paragraph color={'palegreen'}>{urlParams?.subscriptionId}</Paragraph>
      </Paragraph>
    </div>
  );
};

export default LinkInfo;