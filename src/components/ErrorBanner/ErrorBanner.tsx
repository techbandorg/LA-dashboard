import React from 'react';
import { Wrapper, Content } from './styles';
import { Paragraph } from '../../theme'

const ErrorBanner = () => {
  return (
    <Wrapper>
      <Content>
        <Paragraph fontWeight={'700'} color={'crimson'}>Error:</Paragraph>
        <span>Link is deprecated or subscription with this data exist</span>
      </Content>
    </Wrapper>
  );
};

export default ErrorBanner;