import type { AppProps } from 'next/app'
import { useMemo, useState } from 'react'

import GameContext from '../components/helpers/GameContext'
import ZoomContext from '../components/helpers/ZoomContext'
import Base from '../components/layout/Base'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [imageUrl, setImageUrl] = useState('')
  const [showGame, setShowGame] = useState(false)
  const value = useMemo(() => ({ imageUrl, setImageUrl }), [imageUrl])
  const valueGame = useMemo(() => ({ showGame, setShowGame }), [showGame])

  return (
    <GameContext.Provider value={valueGame}>
      <ZoomContext.Provider value={value}>
        <Base>
          <Component {...pageProps} />
        </Base>
      </ZoomContext.Provider>
    </GameContext.Provider>
  )
}

export default MyApp
