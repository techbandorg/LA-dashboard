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