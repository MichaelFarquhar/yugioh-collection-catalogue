export const deckColors = {
  blue: '#0072b6',
  green: '#6cab64',
  red: '#bd0152',
  purple: '#744b92',
  white: '#ffffff',
  body: '#e67e22',
  calm: '#27ae60',
  fury: '#c0392b',
  mind: '#2980b9',
  order: '#f1c40f',
  chaos: '#8e44ad',
} as const

export type DeckColor = keyof typeof deckColors
