import Header from "./Header";
import Footer from "./Footer";

type TitleProps = {
         children: object
}
const Layout = ({ children }: TitleProps) => {
         return (
         <>
         <Header/>
         {children}
         <Footer/>
         </>
         )
}
export default Layout;