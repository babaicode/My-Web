import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const navigation = [
         {id: 1, title: "Home", path: "/"},
         {id: 2, title: "About Us", path: "/aboutus"}
]

const Navbar = () => {
         const { pathname } = useRouter();
 
        return (
                  <nav className={styles.nav}>
                           <div className={styles.logo}>
                                    <Image src="/logo.png" alt="logo" width="50" height="50"/>
                           </div>
                           <div className={styles.links}>
                                    {navigation.map(({id, title, path}) => (
                                             <Link key={id} href={path} legacyBehavior>
                                                      <a className={pathname === path ? styles.active : ""}>
                                                               {title}
                                                      </a>
                                             </Link>
                                    ))}
                           </div>
                  </nav>
         )
}
export default Navbar;
