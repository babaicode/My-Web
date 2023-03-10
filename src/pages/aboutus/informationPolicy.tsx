import Head from "next/head";
import styles from "/Users/andreimaracheuski/frnt course/MyWeb/shi/src/styles/infPol.module.scss";
const InformationPolicy = () => {

  return (
    <>
      <Head>
        <title>Information Policy</title>
      </Head>
      <div>
        <div className={styles.divText}>
          <h1>Information Policy</h1>
        </div>
        <div className={styles.OnePiece}>
          <h3>We do not advise you to spread too much about our organization.</h3>
          <h3>The management of the organization has a desire for our culture to spread to a small number of people.</h3>
        </div>
        <div className={styles.OnePiece}>
          <h3>Good luck to everyone!</h3>
        </div>
      </div>
    </>
  )
}
export default InformationPolicy;