import React from "react";
import "./navbar.css";







const Navbar = () => {
  return (
    <>
    <nav >

      
     <div className='main-nav '>
     <div className='menu-link'>
       <ul className='menu-link-ul' >
        <li> <a href='/ '> about </a> </li>
        <li> <a href='people '> People </a> </li>
        <li> <a href='academics '> academics </a> </li>
        <li> <a href='research '> research </a> </li>
        <li> <a href='gallery '> gallery </a> </li>
        
        <li> <a href='resources '> resources </a> </li>
        <li> <a href='contact '> contact us </a> </li>
        
       </ul>
       </div>
     </div>
     <div className="nav-2">
     <div className='logo'>
         <h2>
          <span className="typo">M</span>etallurgy and <span className="typo">M</span>aterial <span className="typo">S</span>cience
         </h2>
         
         <h4>Indian Institute of Technology Indore</h4>
     </div>
     <div className="circle">

     </div>
     </div>
  
    </nav>
   { 
}

    </>
  )


}



export default Navbar;