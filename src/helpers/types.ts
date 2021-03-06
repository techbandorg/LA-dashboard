export interface CardProps {
  card: {
    merchant: string
    transactionHash?: string
    nftId: number
  }
  isMerchantCard?: boolean
}

export interface UrlParams {
  merchant: string
  userId: string
  subscriptionId: string
}

export interface MintPageProps {
  setIsLinked: (b: boolean) => void
}

export interface CreateSubArgs {
  account: string | null | undefined
  setIsMintPending: (b: boolean) => void
  setIsLinkChanged: (b: boolean) => void
  setIsError: (b: boolean) => void
}

export interface MintModalProps {
  text?: string
  account?: string
  setIsMintModal: (b: boolean) => void
  setIsError: (b: boolean) => void
  setIsMintPending: (b: boolean) => void
}

export interface ErrorModalProps {
  setIsErrorModal: (b: boolean) => void
}

export interface BackdropProps {
  children: JSX.Element[] | JSX.Element,
  setIsModalOpen: (b: boolean) => void
}