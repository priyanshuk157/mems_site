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
import Researchcomponent1 from './components/researchcomponent1'
import Researchcomponent2 from './components/researchcomponent2'
import Researchcomponent3 from './components/researchcomponent3'
import Researchcomponent4 from './components/researchcomponent4'
import Researchcomponent5 from './components/researchcomponent5'
import Researchcomponent6 from './components/researchcomponent6'
import Profile1 from './components/profiles/profile1'
import Profile2 from './components/profiles/profile2'
import Profile3 from './components/profiles/profile3'
import Profile4 from './components/profiles/profile4'
import Profile5 from './components/profiles/profile5'
import Profile6 from './components/profiles/profile6'
import Profile7 from './components/profiles/profile7'
import Profile8 from './components/profiles/profile8'
import Profile9 from './components/profiles/profile9'
import Profile10 from './components/profiles/profile10'
import Profile11 from './components/profiles/profile11'
import Profile12 from './components/profiles/profile12'
import Profile13 from './components/profiles/profile13'
import Profile14 from './components/profiles/profile14'
import Profile15 from './components/profiles/profile15'
import Profile16 from './components/profiles/profile16'
import Profile17 from './components/profiles/profile17'
import Profile18 from './components/profiles/profile18'
import Profile19 from './components/profiles/profile19'
import Industryrelation from './mainpages/industryrelation'
import ResearchStaff from './components/ResearchStaff';

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
        <Route path='staff' element={<ResearchStaff/>}></Route>
        <Route path='ajkj' element={<Researchcomponent1/>}></Route>
        <Route path='profile1' element={<Profile1/>}></Route>
        <Route path='profile2' element={<Profile2/>}></Route>
        <Route path='profile3' element={<Profile3/>}></Route>
        <Route path='profile4' element={<Profile4/>}></Route>
        <Route path='profile5' element={<Profile5/>}></Route>
        <Route path='profile6' element={<Profile6/>}></Route>
        <Route path='profile7' element={<Profile7/>}></Route>
        <Route path='profile8' element={<Profile8/>}></Route>
        <Route path='profile9' element={<Profile9/>}></Route>
        <Route path='profile10' element={<Profile10/>}></Route>
        <Route path='profile11' element={<Profile11/>}></Route>
 <Route path='profile12' element={<Profile12/>}></Route>
 <Route path='profile13' element={<Profile13/>}></Route>
 <Route path='profile14' element={<Profile14/>}></Route>
 <Route path='profile15' element={<Profile15/>}></Route>
 <Route path='profile16' element={<Profile16/>}></Route>
 <Route path='profile17' element={<Profile17/>}></Route>
 <Route path='profile18' element={<Profile18/>}></Route>
 <Route path='profile19' element={<Profile19/>}></Route>
 <Route path='researchcomponent1' element={<Researchcomponent1/>}></Route>
 <Route path='researchcomponent2' element={<Researchcomponent2/>}></Route>
 <Route path='researchcomponent3' element={<Researchcomponent3/>}></Route>
 <Route path='researchcomponent4' element={<Researchcomponent4/>}></Route>
 <Route path='researchcomponent5' element={<Researchcomponent5/>}></Route>
 <Route path='researchcomponent6' element={<Researchcomponent6/>}></Route>

        <Route path='industry' element={<Industryrelation/>}></Route>
      </Routes>
     
      {/* <div> <Footer/></div> */}
      
     
      </div>
    </>
  )   
 
  }

export default App;
