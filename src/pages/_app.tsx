import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {



  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  )
}