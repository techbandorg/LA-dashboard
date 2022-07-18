export interface SubsCardsProps {
  card: {
    merchant: string
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
}