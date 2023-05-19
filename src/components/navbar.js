import React from "react";
import "./navbar.css";
import { FaBars } from 'react-icons/fa';






const Navbar = () => {
  
  return (
    <>
    <nav >

      
     <div className='main-nav active'>
     <div className="nav-2">
     <div className='logo'>
         <div className="mems">
          <span className="typo">M</span>etallurgical     <span className="typo">E</span>ngneering <br/> and <span className="typo">M</span>aterial <span className="typo">S</span>cience
          </div>
         <div className="iiti">
        Indian Institute of Technology Indore
         </div>
     </div>
     
     </div>
     <div className='menu-link' >
       <ul className='menu-link-ul  '  >
        <li> <a href='/'> about </a> </li>
        <li> <a href='people '> People </a> </li>
        <li> <a href='academics '> academics </a> </li>
        <li> <a href='research '> research </a> </li>
        <li> <a href='gallery '> gallery </a> </li>
        
        <li> <a href='resources '> resources </a> </li>
        <li> <a href='contact '> contact us </a> </li>
        </ul>
         
       </div>
       <div className="nav-ham" >
           <FaBars /> 
          </div> 
     </div>
    
  
    </nav>
   { 
}

    </>
  )


}



export default Navbar;