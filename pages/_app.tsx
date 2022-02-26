import type { AppProps } from 'next/app'

import Base from '../components/layout/Base'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  )
}

export default MyApp
