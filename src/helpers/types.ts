export interface SubsCardsProps {
  card: {
    merchant: string
    transactionHash: string
  }
}

export interface HeaderProps {
  setIsUserHasSubs: (b: boolean) => void
}

export interface MainProps {
  isUserHasSubs: boolean
}

export interface UrlParams {
  merchant: string
  userId: string
  subscriptionId: string
}

export interface HeroSectionProps {
  setIsMintPending?: (b: boolean) => void
  isMintPending?: boolean
  setIsLinkChanged?: (b: boolean) => void
}

export interface CreateSubArgs {
  account: string | null | undefined
  setIsMintPending: (b: boolean) => void
  setIsLinkChanged: (b: boolean) => void
  setIsError: (b: boolean) => void
}