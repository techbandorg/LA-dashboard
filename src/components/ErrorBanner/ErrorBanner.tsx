import React from 'react';
import { Wrapper, Content } from './styles';
import { Text } from '../../theme'

const ErrorBanner = () => {
  return (
    <Wrapper>
      <Content>
        <Text fontWeight={'700'} color={'crimson'}>Error:</Text>
        <span>Link is deprecated or subscription with this data exist</span>
      </Content>
    </Wrapper>
  );
};

export default ErrorBanner;