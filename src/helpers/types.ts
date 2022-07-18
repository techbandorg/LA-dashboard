export interface SubsCardsProps {
  card: {
    title: string
    nft: string
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
  active?: boolean
  isUserHasSubs?: boolean
  isLinked?: boolean
}