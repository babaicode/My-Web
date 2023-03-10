import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";


const AboutUs = () => {

   return (
      <>
         <Head>
            <title>About EOB</title>
         </Head>
         <div className={styles.divText}>
            <h2>About Erth of Bois</h2>
         </div>
         <div className={styles.mainDiv}>
            <div className={styles.oneSlide}>
               <a href={'/aboutus/sport'} >
                  <div className={styles.OnePiece} >
                     < Image src="/sport.jpg" width={400} height={400} alt="ErthOfBois" className={styles.image} />
                     <h3 className={styles.wrapper}>Sport</h3>
                  </div>
               </a>
               <a href={'/aboutus/chillin'}>
                  <div className={styles.OnePiece}>
                     < Image src="/chiiilin.jpg" width={400} height={400} alt="ErthOfBois" className={styles.image} />
                     <h3 className={styles.wrapper}>Chillin</h3>
                  </div>
               </a>
            </div>
            <div>
               <a href={'/aboutus/informationPolicy'}>
                  <div className={styles.OnePiece}>
                     < Image src="/informationPolitic.jpg" width={400} height={400} alt="ErthOfBois" className={styles.image} />
                     <h3 className={styles.wrapper}>Information Policy</h3>
                  </div>
               </a>
               <a href={'/aboutus/products'}>
                  <div className={styles.OnePiece}>
                     < Image src="/products.jpg" width={400} height={400} alt="ErthOfBois" className={styles.image} />
                     <h3 className={styles.wrapper}>Products</h3>
                  </div>
               </a>
            </div>
         </div>
      </>
   )
}
export default AboutUs;