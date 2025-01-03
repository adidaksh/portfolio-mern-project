
import Layout from "./components/layout/layout";
import MobileNav from "./components/MobileNav/MobileNav";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Education from "./pages/education/Education";
import Project from "./pages/projects/Project";
import Skills from  "./pages/skills/Skills";
import Footer from "./pages/footer/footer";
import ScrollToTop from "react-scroll-to-top";
import '../src/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

function App() {
  return (
    <> 
    <ToastContainer/>
    <MobileNav/>
    <Layout/>
     <div className="container">
   
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      
      </div>
      
       <ScrollToTop smooth/>
  
      

       
    </>
  );
}

export default App;
