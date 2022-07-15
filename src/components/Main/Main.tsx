import React, { useEffect, useState } from 'react';
import { Wrapper, Content, Img, ImgContainer, SubsCardsContainer } from './styles';
import { decryptUrlParams } from '../utils';
import { Title, Text } from '../theme';
// @ts-ignore
import nftMain from '../../assets/img/nft.jpg';
import { MainProps } from '../types';
import { subsCards } from '../constants';
import SubsCard from '../SubsCard/SubsCard';


const Main:React.FC<MainProps> = ({isUserHasSubs}) => {
  const [urlParams, setUrlParams] = useState({});

  useEffect(() => {
    setUrlParams(decryptUrlParams());
  }, []);

  return (
    <Wrapper>
      <Content>
        {/*<div>*/}
        {/*  <Title fontSize={'55px'} fontWeight={'600'} margin={'0 0 16px 0'} style={{marginBottom: '20px'}}>Liquid access</Title>*/}
        {/*  <Text maxWidth={'600px'}>*/}
        {/*    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti*/}
        {/*    atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique*/}
        {/*    sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga*/}
        {/*  </Text>*/}
        {/*</div>*/}
        {/*<ImgContainer>*/}
        {/*  <Img src={nftMain} />*/}
        {/*</ImgContainer>*/}

        <div>
            <Title fontSize={'55px'} fontWeight={'600'} margin={'0 0 16px 0'} style={{marginBottom: '20px'}}>Liquid access</Title>
            <Text maxWidth={'600px'} fontSize={'22px'}>
              Your nft subscriptions
            </Text>
          <SubsCardsContainer>
            {subsCards.map((card, index) => (
              <SubsCard key={index} card={card}/>
            ))}
          </SubsCardsContainer>
        </div>


        {/*<div style={{fontWeight: 'bold', fontSize: '22px'}}>Merchant name: <span style={{color: 'palegreen'}}>{urlParams?.merchant}</span></div>*/}
        {/*<div style={{fontWeight: 'bold', fontSize: '22px'}}>User id: <span style={{color: 'palegreen'}}>{urlParams?.userId}</span></div>*/}
        {/*<div style={{fontWeight: 'bold', fontSize: '22px'}}>Subscribtion id: <span style={{color: 'palegreen'}}>{urlParams?.subscriptionId}</span></div>*/}
      </Content>
    </Wrapper>
  );
};

export default Main;