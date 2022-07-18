import react from 'react'
import { StateContext } from '../context/StateContext'
import '../styles/scss/main.scss'
import { Layout } from '../components'


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
