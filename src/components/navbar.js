import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from 'react-icons/fa';
import { useRef } from "react";






const Navbar = () => {
  const navRef = useRef (); 
  const [dropdown, setDropdown] = useState(false)

  const showNavbar =()=>{

    navRef.current.classList.toggle("responsive-nav")
  }
  
 const handleClick =()=>{
  setDropdown (dropdown => !dropdown)
 }
 
 let dropdownStateCheck = dropdown ? "dropactive " : "dropinactive"
  
  return (
    <>
    <nav >

      
     <div className='main-nav active'>
     <div className="iiti-logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png " alt=" okl"></img>
      </div>
     <div className="nav-2">
     <div className='logo'>
      
         <div className="mems">
          <span className="typo">M</span>etallurgical     <span className="typo">E</span>ngneering <br/> and <span className="typo">M</span>aterials <span className="typo">S</span>cience
          </div>
         <div className="iiti">
        Indian Institute of Technology Indore
         </div>
         {/* <img src="./images/img1234.png" alt=""/> */}

     </div>
     
     </div>
     <div className='menu-link'  >
       <ul className='menu-link-ul   ' ref={navRef}  >
        <li> <a href='/'> about </a> </li>
        <li > <a onClick={handleClick}> People</a>  </li>
        <li> <a href='academics '> academics </a> </li>
        <li> <a href='research '> research </a> </li>
        {/* <li> <a href='gallery '> gallery </a> </li>
        
        <li> <a href='resources '> resources </a> </li> */}
        <li> <a href='industry '> Industry relation </a> </li>
        </ul>
         
       </div>
       <div className={dropdownStateCheck} >
        
        <div> <a href='faculty'> Faculty Members</a> </div>
        <div> <a href='staff'> Staff Members    </a> </div>
        <div> <a href='ad'> Students </a> </div>
        
       </div>
      
       <div className="nav-ham"  onClick={showNavbar}>
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