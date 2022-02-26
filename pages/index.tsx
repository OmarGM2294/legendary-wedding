import type { NextPage } from 'next'
import Head from 'next/head'

import Banner from '../components/Banner'
import DressCode from '../components/DressCode'
import Flight from '../components/Flight'
import Fun from '../components/Fun'
import Gift from '../components/Gift'
import RSVP from '../components/RSVP'
import SaveDate from '../components/SaveDate'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>M&J - Legendary Wedding</title>
        <meta
          property="og:title"
          content="M&J - Legendary Wedding"
          key="title"
        />
      </Head>
      <Banner />
      <SaveDate />
      <Flight />
      <DressCode />
      <Fun />
      <Gift />
      <RSVP />
    </>
  )
}

export default Home
