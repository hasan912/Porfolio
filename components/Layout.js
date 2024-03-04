//Fonts
import {Sora} from "@next/font/google"

// fonts setting
const sora = Sora ({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300','400','500','600','700','800'],


});

//components
import Nav from "../components/Nav"
import Header from "../components/Header"
import TopLeftImage from "../components/TopLeftImg"

const Layout = ({children}) => {
  return( 
  <div className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative ${sora.variable}`}>
    
    <TopLeftImage/> 
    <Nav />
  <Header/>
  {children}
  </div>
)};

export default Layout;
