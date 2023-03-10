import styles from "/Users/andreimaracheuski/frnt course/MyWeb/shi/src/styles/sport.module.scss";
import Head from "next/head";
import Image from "next/image";

const Sport = () => {

   return (
      <>
         <Head>
            <title>Sport</title>
         </Head>
         <div>
            <div className={styles.divText}>
               <h1>Sport</h1>
            </div>
            <div className={styles.OnePiece}>
               <h3>Sport is a very important thing for our organization.</h3>
               <h3>There are three sports branches in our organization.</h3>
               <h3>The first branch, from which everything was born, was SKATEBOARDING.</h3>
               < Image src="/skatePlaza.jpeg" width={1280} height={720} alt="ErthOfBois" className={styles.image} />
            </div>
            <div className={styles.OnePiece}>
               <h3>The second direction is the gym.</h3>
               <h3>Strength of mind is very important in our organization, and it, in turn, improves in the gym.</h3>
               < Image src="/gym.jpg" width={1280} height={720} alt="ErthOfBois" className={styles.image} />
            </div>
            <div className={styles.OnePiece}>
               <h3>The third direction is martial arts.</h3>
               <h3>Martial arts unite and strengthen our association.</h3>
               < Image src="/fight.jpg" width={500} height={500} alt="ErthOfBois" className={styles.image} />
            </div>
         </div>

      </>
   )
}
export default Sport;