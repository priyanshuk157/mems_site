import React from 'react'
// import { ReactDOM } from 'react-dom';

import People from './mainpages/people'
import Home from './mainpages/Home'
import {Routes , Route} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';  
import Academics from './mainpages/Academics'
import Research from './mainpages/Research'
import GalleryPage from './mainpages/GalleryPage';
import Resources from './mainpages/Resources'
import Faculty from './components/faculty'
import Staff from './components/staff'

import Researchcomponent1 from './components/researchcomponent1'
import Profile1 from './components/profiles/profile1'

// import Home from './components/Home'
const App = () => {
  return (
    <>
    
    <div>
      {/* <div>
      <Navbar/>
      </div>
      <div>
      <Slider/>
      </div>
      <div> <Cards/></div> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='people' element={<People/>}></Route>
        <Route path='academics' element={<Academics/>}></Route>
        <Route path='research' element={<Research/>}></Route>
        <Route path='gallery' element={<GalleryPage/>}></Route>
        <Route path='resources' element={<Resources/>}></Route>
        <Route path='faculty' element={<Faculty/>}></Route>
        <Route path='staff' element={<Staff/>}></Route>
     
        <Route path='ajkj' element={<Researchcomponent1/>}></Route>
        <Route path='profile2' element={<Profile1/>}></Route>
      </Routes>
     
      {/* <div> <Footer/></div> */}
      
     
      </div>
    </>
  )   
 
  }

export default App;
