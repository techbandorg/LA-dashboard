export interface SubsCardsProps {
  card: {
    merchant: string
    transactionHash: string
    nftId: number
  }
}

export interface UrlParams {
  merchant: string
  userId: string
  subscriptionId: string
}

export interface MintSectionProps {
  setIsMintPending: (b: boolean) => void
  isMintPending: boolean
  setIsLinked: (b: boolean) => void
}

export interface CreateSubArgs {
  account: string | null | undefined
  setIsMintPending: (b: boolean) => void
  setIsLinkChanged: (b: boolean) => void
  setIsError: (b: boolean) => void
}

export interface ModalProps {
  text: string
  account?: string
}

export interface BackdropProps {
  children: JSX.Element[] | JSX.Element,
  setIsModalOpen: (b: boolean) => void
}