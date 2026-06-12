export const deckColors = {
  blue: '#0072b6',
  green: '#6cab64',
  red: '#bd0152',
  purple: '#744b92',
  white: '#ffffff',
} as const

export type DeckColor = keyof typeof deckColors
