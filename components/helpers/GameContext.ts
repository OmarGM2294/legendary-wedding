import { createContext } from 'react'

type ContextType = {
  showGame: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setShowGame: any
}

const GameTypeContext: ContextType = {
  showGame: false,
  setShowGame: () => null,
}

const GameContext = createContext(GameTypeContext)

export default GameContext
