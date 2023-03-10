import styles from "../styles/404.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    },3000)
  }, [router])

  return (
    <>
    <Head>
      <title>Error</title>
    </Head>
    <div className={styles.wrapper}>
      <h1>404...</h1>
      <h2>Something went wrong</h2>
    </div>
    </>
  )
}
export default Error;