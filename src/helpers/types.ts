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
  setIsMintPending: (b: boolean) => void
  isMintPending: boolean
}