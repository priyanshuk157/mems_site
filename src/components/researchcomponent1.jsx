import React from 'react'
import './research.css'
import Navbar from './navbar'
import Footer from "../components/footer";  
import { FaCaretRight } from "react-icons/fa";
import { useState } from 'react';




const Researchcomponent1 = () =>   {
  const [ toggleState , setToggleState] = useState(1);

  const toggleTab = (index  ) => { 
setToggleState(index);
  }
 

  return (
    <><div>
      <Navbar />
    </div><div className="head">

        RESEARCH

      </div><div className='research-main'>
        
      <div className='research-heads'>
        <div><h2>Research Areas</h2></div>

          <div className='heads-1' onClick={() => toggleTab(1)}><i className={toggleState===1 ? "active-indicator1" : "indicator1"}><FaCaretRight/></i>MANDJJN</div>
          <div className='heads-1' onClick={() => toggleTab(2)}><i className={toggleState===2 ? "active-indicator1" : "indicator1"}><FaCaretRight/></i>MANDJJN</div>
          <div className='heads-1' onClick={() => toggleTab(3)}><i className={toggleState===3 ? "active-indicator1" : "indicator1"}><FaCaretRight/></i>MANDJJN</div>
          <div className='heads-1' onClick={() => toggleTab(4)}><i className={toggleState===4 ? "active-indicator1" : "indicator1"}><FaCaretRight/></i>MANDJJN</div>
         

        </div>
        <div className={toggleState===1 ?  " active-content1"  : " research-content"}>
          <div className="research-content-head">content 1</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus illum facilis consequuntur delectus repudiandae distinctio quae voluptatum obcaecati corrupti tempore quidem ex officiis, fugiat sint facere? Consequatur, molestias tempore!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ipsa quae tenetur quasi et distinctio voluptate odio, molestiae debitis blanditiis officiis deserunt sint eveniet commodi ducimus a, exercitationem in? Tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, et earum, vel, blanditiis eum neque similique laboriosam sunt optio quas veritatis sed sequi aspernatur officiis totam. Blanditiis quas ipsam architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, animi. Fugit repellendus nulla ratione ea reprehenderit ad incidunt quia perferendis debitis beatae sequi rem commodi nam, fugiat ipsam odit atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis esse totam obcaecati ratione. Aut repudiandae quibusdam enim beatae quasi repellendus provident excepturi, sint, nemo eveniet impedit esse atque aliquam. lo

        </div>
        <div className={toggleState===2 ?  " active-content1"  : " research-content"}>
          <div className="research-content-head">content 2</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus illum facilis consequuntur delectus repudiandae distinctio quae voluptatum obcaecati corrupti tempore quidem ex officiis, fugiat sint facere? Consequatur, molestias tempore!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ipsa quae tenetur quasi et distinctio voluptate odio, molestiae debitis blanditiis officiis deserunt sint eveniet commodi ducimus a, exercitationem in? Tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, et earum, vel, blanditiis eum neque similique laboriosam sunt optio quas veritatis sed sequi aspernatur officiis totam. Blanditiis quas ipsam architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, animi. Fugit repellendus nulla ratione ea reprehenderit ad incidunt quia perferendis debitis beatae sequi rem commodi nam, fugiat ipsam odit atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis esse totam obcaecati ratione. Aut repudiandae quibusdam enim beatae quasi repellendus provident excepturi, sint, nemo eveniet impedit esse atque aliquam. lo

        </div>
        <div className={toggleState===3 ?  " active-content1"  : " research-content"}>
          <div className="research-content-head">content 3</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus illum facilis consequuntur delectus repudiandae distinctio quae voluptatum obcaecati corrupti tempore quidem ex officiis, fugiat sint facere? Consequatur, molestias tempore!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ipsa quae tenetur quasi et distinctio voluptate odio, molestiae debitis blanditiis officiis deserunt sint eveniet commodi ducimus a, exercitationem in? Tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, et earum, vel, blanditiis eum neque similique laboriosam sunt optio quas veritatis sed sequi aspernatur officiis totam. Blanditiis quas ipsam architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, animi. Fugit repellendus nulla ratione ea reprehenderit ad incidunt quia perferendis debitis beatae sequi rem commodi nam, fugiat ipsam odit atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis esse totam obcaecati ratione. Aut repudiandae quibusdam enim beatae quasi repellendus provident excepturi, sint, nemo eveniet impedit esse atque aliquam. lo

        </div>
        <div className={toggleState===4 ?  " active-content1"  : " research-content"}>
          <div className="research-content-head">content 4</div>
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

export default Researchcomponent1
