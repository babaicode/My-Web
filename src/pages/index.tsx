import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export interface IHomePageProps {}

const Home : React.FunctionComponent<IHomePageProps>= (props) => {
  return (
    <>
      <Head>
        <title>Erth Of Bois</title>
      </Head>
      <div>
        <h2 className={styles.wrapper}>Erth of Bois</h2>
        <h2 className={styles.wrapper}>We are an open organization located on Bertramka. Our main task is to distribute a little style.</h2>
        <Image src="/ErthOfBois.png" width={1080} height={1080} alt="ErthOfBois" className={styles.mainIng}/>
      </div>
  </>
  )
}
export default Home;