import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"
import Head from 'next/head'
import { initializeApp } from 'firebase/app'
import { config } from '@/config/config'
import AuthRoute from '../components/AuthRoute'

initializeApp(config.firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {



  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <AuthRoute>
          <Component {...pageProps} />
        </AuthRoute>
      </Layout>
    </>
  )
}