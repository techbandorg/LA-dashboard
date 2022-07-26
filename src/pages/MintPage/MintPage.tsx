import React, { useEffect, useState } from 'react';
import { Button, Paragraph, Title, Text, RouterLink } from '../../theme';
import { checkNftExist } from '../../helpers/requests';
import { useWeb3React } from '@web3-react/core';
import { ErrorModal, MintModal } from '../../components/Modals/Modals';
import Backdrop from '../../components/Backdrop/Backdrop';


const MintPage: React.FC = () => {
  const { account } = useWeb3React();

  const [isNftExists, setIsNftExists] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isMintModal, setIsMintModal] = useState(false)
  const [isMintPending, setIsMintPending] = useState(false)

  useEffect(() => {
    checkNftExist().then(response => response?.length && setIsNftExists(true));
  }, []);

  return (
    <div>
      <Title margin='0 0 16px 0'>Liquid access</Title>
      {isNftExists
        ? <>
          <Paragraph margin='0 0 16px 0' fontSize='18px'>This subscription already transformed</Paragraph>
          <RouterLink to={'/dashboard'}>Go to dashboard</RouterLink>
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
  );
};


export default MintPage;