import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/Login.module.scss'


export interface ILoginPageProps { }

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {

         const auth = getAuth();
         const router = useRouter();
         const [authing, setAuthing] = useState(false);

         const signInWithGoogle = async () => {
                  setAuthing(true);

                  signInWithPopup(auth, new GoogleAuthProvider())
                           .then(response => {
                                    console.log(response.user.uid);
                                    router.push('/');
                           })
                           .catch(error => {
                                    console.log(error);
                                    setAuthing(false);
                           })
         }

         return (
                  <div className={styles.wrapper}>
                           <h1>Login Page</h1>
                           <button className={styles.button} onClick={() => signInWithGoogle()} disabled={authing}>
                                    <h3>Sign in with Google</h3>
                           </button>
                  </div>
         )
}

export default LoginPage;