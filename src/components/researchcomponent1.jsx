import React from 'react'
import './research.css'
import Navbar from './navbar'
import Footer from "../components/footer";  
import { FaCaretRight } from "react-icons/fa";



const researchcomponent1 = () => {
  return (
    <><div>
      <Navbar />
    </div><div className="head">

        RESEARCH

      </div><div className='research-main'>
        
      <div className='research-heads'>
        <div><h2>Research Areas</h2></div>

          <a href="ajkj"><i className='indicator1'><FaCaretRight/></i>MANDJJN</a>
          <a href="ann">ANANDN</a>
          <a href="adan">ADJKADD</a>
          <a href="akm">ADADNJJDA</a>

        </div>
        <div className="research-content">
          <div className="research-content-head">content 1</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus illum facilis consequuntur delectus repudiandae distinctio quae voluptatum obcaecati corrupti tempore quidem ex officiis, fugiat sint facere? Consequatur, molestias tempore!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ipsa quae tenetur quasi et distinctio voluptate odio, molestiae debitis blanditiis officiis deserunt sint eveniet commodi ducimus a, exercitationem in? Tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, et earum, vel, blanditiis eum neque similique laboriosam sunt optio quas veritatis sed sequi aspernatur officiis totam. Blanditiis quas ipsam architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, animi. Fugit repellendus nulla ratione ea reprehenderit ad incidunt quia perferendis debitis beatae sequi rem commodi nam, fugiat ipsam odit atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis esse totam obcaecati ratione. Aut repudiandae quibusdam enim beatae quasi repellendus provident excepturi, sint, nemo eveniet impedit esse atque aliquam. lo

        </div>
        <div className="prof-names">
        <div className="faculty-involved"><h3>FACULTIES</h3> </div>
          <ul>
            <li><a href="aas">anja ankd nnkadnak</a> </li>
            <li><a href="aas">anja ankd nnkadnak</a> </li>
            <li><a href="aas">anja ankd nnkadnak</a> </li>
            <li><a href="aas">anja ankd nnkadnak</a> </li>
            <li><a href="aas">anja ankd nnkadnak</a> </li>
            <li><a href="aas">anja ankd nnkadnak</a> </li>

          </ul>

        </div>
      </div><div>
        <Footer />
      </div></>
    
  )
}

export default researchcomponent1
