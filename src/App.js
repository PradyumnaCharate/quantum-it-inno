import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from './screens/SignupScreen';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ContactScreen from './screens/ContactScreen';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "./screens/Blogs/Blogs";
import Androidappdevelopment from "./screens/Services/Appdevelopments/Androidappdevelopment";
import Swiftappdevelopment from "./screens/Services/Appdevelopments/Swiftappdevelopment";
import Ipadappdevelopment from "./screens/Services/Appdevelopments/Ipadappdevelopment";
import Crossplatformapp from "./screens/Services/Appdevelopments/Crossplatformapp";
import Iosappdevelopment from "./screens/Services/Appdevelopments/Iosappdevelopment";
import Mobilegamedevelopment from "./screens/Services/Appdevelopments/Mobilegamedevelopment";
import Webdevelopment from "./screens/Services/Webdevelopment/Webdevelopment";
import Phpdevelopment from "./screens/Services/Webdevelopment/Phpdevelopment";
import Dotnetdevelopment from "./screens/Services/Webdevelopment/Dotnetdevelopment";
import Nodejsdevelopment from "./screens/Services/Webdevelopment/Nodejsdevelopment";
import Joomladevelopment from "./screens/Services/Webdevelopment/Joomladevelopment";
import Rordevelopment from "./screens/Services/Webdevelopment/Rordevelopment";
import Webdevelopmentusa from "./screens/Services/Webdevelopment/Webdevelopmentusa";
import Digitalmarketing from "./screens/Services/Digitalmarketing/Digitalmarketing";
import Seoservicecompany from "./screens/Services/Digitalmarketing/Seoservicecompany";
import Ppcmanagement from "./screens/Services/Digitalmarketing/Ppcmanagement";
import Appstoreoptimization from "./screens/Services/Digitalmarketing/Appstoreoptimization";
import Socialmediamarketing from "./screens/Services/Digitalmarketing/Socialmediamarketing";
import Newjersyseo from "./screens/Services/Digitalmarketing/Newjersyseo";
import Advertisingusa from "./screens/Services/Digitalmarketing/Advertisingusa";
import Seoservicesusa from "./screens/Services/Digitalmarketing/Seoservicesusa";
import Whyquantum from "./screens/Company/Whyquantum";
import Privacypolicy from "./screens/Quicklinks/Privacypolicy"
import Refundandcancellation from "./screens/Quicklinks/Refundandcancellation"
import Termsandcondition from "./screens/Quicklinks/Termsandcondition"
import Disclaimer from "./screens/Quicklinks/Disclaimer"
import Professionalseoservices from "./screens/Topservices/Professionalseoservices";
import Partnership from "./screens/Company/Partnership"
import Portfolio from "./screens/Portfolio/Portfolio";
import Appdevelopment from "./screens/Services/Appdevelopments/Appdevelopment"
import Ai from "./screens/Services/Emergingtechnologies/Ai"
import Iot from "./screens/Services/Emergingtechnologies/Iot";
import Roboticsinnovation from "./screens/Services/Emergingtechnologies/Roboticsinnovation"

function App() {
  return (
    <BrowserRouter>
    
<Header/>

  
   <Routes>
 
     

     <Route path='/' element={<HomeScreen/>}/>
  
          <Route path="/why-quantumitinnovation" element={<Whyquantum />} />
          <Route path="/partnership" element={<Partnership />} />
     

          <Route path="/app-development" element={<Appdevelopment />} />
          <Route path="/android-application-development-company" element={<Androidappdevelopment/>} />
          <Route path="/swift-application-development-company" element={<Swiftappdevelopment/>} />
          <Route path="/ipad-app-development-company" element={<Ipadappdevelopment/>} />
          <Route path="/cross-platform-mobile-app-development" element={<Crossplatformapp/>} />
          <Route path="/iphone-application-development-company" element={<Iosappdevelopment/>} />
          <Route path="/mobile-game-development-company" element={<Mobilegamedevelopment/>} />

          <Route path="/web-development" element={<Webdevelopment/>} />
          <Route path="/php-development-company" element={<Phpdevelopment/>} />
          <Route path="/dotnet-development-company" element={<Dotnetdevelopment/>} />
          <Route path="/node-js-development" element={<Nodejsdevelopment/>} />
          <Route path="/ruby-on-rails-development-company" element={<Rordevelopment/>} />
          <Route path="/joomla-development-company" element={<Joomladevelopment/>} />
          <Route path="/web-development-company-usa" element={< Webdevelopmentusa/>} />

          <Route path="/internet-of-things" element={<Iot/>} />
          <Route path="/artificial-intelligence" element={<Ai/>} />
          <Route path="/robotic-process-automation" element={<Roboticsinnovation/>} />

          <Route path="/digital-marketing-agency" element={<Digitalmarketing/>} />
          <Route path="/seo-services-company" element={<Seoservicecompany/>} />
          <Route path="/ppc-campaign-management-services" element={<Ppcmanagement/>} />
          <Route path="/app-store-optimization-company" element={<Appstoreoptimization/>} />
          <Route path="/social-media-marketing" element={<Socialmediamarketing/>} />
          <Route path="/nj-seo-company" element={<Newjersyseo/>} />
          <Route path="/advertising-company-usa" element={<Advertisingusa/>} />
          <Route path="/seo-services-company-usa" element={<Seoservicesusa/>} />

          <Route path="/Privacypolicy" element={<Privacypolicy/>} />
          <Route path="/refundandcancellation" element={<Refundandcancellation/>} />
          <Route path="/termsandcondition" element={<Termsandcondition/>} />
          <Route path="/disclaimer" element={<Disclaimer/>} />

          <Route path="/professionalseoservices" element={<Professionalseoservices/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactus" element={<ContactScreen />} />
    
   
   </Routes>
<Footer/>
  

   </BrowserRouter>
   
  );
}

export default App;
