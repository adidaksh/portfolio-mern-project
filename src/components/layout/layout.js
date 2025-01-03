import React, {useState} from 'react';
import Home from '../../pages/homepages/home';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import "./layout.css";
import Menus from "../Menus/Menus";



const Layout = () => {
 const [toggel, setToggel]= useState(true);
 //   function for change toggel position 
 const handelToggel =() =>{
setToggel(!toggel);
 }; 


  return (
    <>
      <div className= 'sidebar-secton'>
        <div className={toggel? 'sidebar-toggel sidebar' : 'sidebar'}>
        <div className='sidebar-toggel-icons'>
       <p onClick={handelToggel}> 
        {
          toggel? (<AiOutlineDoubleLeft  size={30}/>):(<AiOutlineDoubleRight  size={30}/>)
        }
       </p>
            </div>  
            <Menus toggel={toggel}/>
        </div>
             
        <Home/>
       </div>
 
    </>
  )
}

export default Layout;
