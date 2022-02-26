import { FC } from 'react'

import AppBar from '../common/AppBar'
import Footer from '../common/Footer'

const Base: FC = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Base
