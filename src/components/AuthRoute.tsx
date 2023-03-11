import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';


export interface IAuthRouteProps {
         children: any
}

const AuthRoute : React.FunctionComponent<IAuthRouteProps> = (props) => {

         const { children } = props; 
         const auth = getAuth();
         const router = useRouter();
         const [loading, setLoading] = useState(false);

         useEffect(() => {
                  AuthCheck();
                  return () => AuthCheck();
         }, [auth])

         const AuthCheck = onAuthStateChanged(auth, (user) => {
                  if (user){
                           setLoading(false);
                  } else {
                           console.log('unsuccess');
                           router.push('/login');
                  }
         })

         if (loading) return <p>loading ...</p>
         return (
                  <div>{children}</div>
         )
}

export default AuthRoute;
