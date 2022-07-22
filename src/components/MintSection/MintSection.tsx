import React, { useEffect, useState } from 'react';
import { Button, Paragraph, Title, Text } from '../../theme';
import { MintSectionProps } from '../../helpers/types';
import { checkNftExist } from '../../helpers/requests';
import { useWeb3React } from '@web3-react/core';
import Backdrop from '../Backdrop/Backdrop';
import { ErrorModal, MintModal } from '../Modals/Modals';

const MintSection: React.FC<MintSectionProps> = ({ setIsMintPending, isMintPending, setIsLinked }) => {
  const { account } = useWeb3React();
  const [isNftExists, setIsNftExists] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isMintModal, setIsMintModal] = useState(false)

  useEffect(() => {
    // checkNftExist().then(response => setSubAccount(response[0]?.userAddress));
    checkNftExist().then(response => response?.length && setIsNftExists(true));
  }, []);

  return (
    <div>
      <Title margin='0 0 16px 0'>Liquid access</Title>
      {isNftExists
        ? <>
          <Paragraph margin='0 0 16px 0' fontSize='18px'>This subscription already transformed</Paragraph>
          <Button onClick={() => {
            window.history.pushState({}, '', 'cards');
            setIsLinked(false);
          }}>
            Go to dashboard
          </Button>
        </>
        : <>
          <Paragraph margin='0 0 16px 0' fontSize='18px'>
            This wallet <Text color='palegreen' fontWeight='600'>{account}</Text> will receive nft
          </Paragraph>
          <Paragraph margin='0 0 16px 0' fontSize='18px'>Transform subscription to NFT</Paragraph>
          {/*<Button padding={'6px 24px'} onClick={() => createUserNft(account, setIsMintPending, setIsLinked, setIsError)}>*/}
          <Button padding='6px 24px' onClick={() => setIsMintModal(true)}>
            {isMintPending ? 'Pending...' : 'Mint'}
          </Button>
        </>
      }
      {isMintModal
        && <Backdrop setIsModalOpen={setIsMintModal}>
          <MintModal
            /*@ts-ignore*/
            account={account}
            setIsMintModal={setIsMintModal}
            setIsMintPending={setIsMintPending}
            setIsLinked={setIsLinked}
            setIsError={setIsErrorModal}
          />
        </Backdrop>
      }
      {isErrorModal &&
        <Backdrop setIsModalOpen={setIsErrorModal}>
          <ErrorModal setIsErrorModal={setIsErrorModal}/>
        </Backdrop>
      }
    </div>
  )
}


export default MintSection;