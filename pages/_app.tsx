import type { AppProps } from 'next/app'
import { useMemo, useState } from 'react'

import ZoomContext from '../components/helpers/ZoomContext'
import Base from '../components/layout/Base'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [imageUrl, setImageUrl] = useState('')
  const value = useMemo(() => ({ imageUrl, setImageUrl }), [imageUrl])

  return (
    <ZoomContext.Provider value={value}>
      <Base>
        <Component {...pageProps} />
      </Base>
    </ZoomContext.Provider>
  )
}

export default MyApp
