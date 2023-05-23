import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./section.css"

const section = () => {
  return (
    <>
    <div className='sec'>
       <div className='sec-cont '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda ullam quam asperiores nostrum maxime esse, excepturi et laudantium necessitatibus similique unde iusto ipsam hic quas voluptate quisquam quaerat commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores sunt expedita vel tempora explicabo aliquam aut corrupti optio, eligendi necessitatibus veniam hic vitae, officiis, ipsum dicta quia accusamus laborum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure magnam quae, officiis iusto architecto amet quam repellat nesciunt aut. Quo temporibus odio ullam dolore dolorum fugiat quisquam cupiditate nobis quam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sit fuga temporibus ducimus omnis atque optio. Saepe facilis libero necessitatibus ipsa dolorum quisquam molestias amet, odit ut molestiae earum cupiditate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex neque consectetur reiciendis. Totam enim, facilis at mollitia, consectetur laborum necessitatibus deleniti earum provident alias vero! Culpa quos quasi sit amet?
        </div>
        <div className='sec-img'>
        <img src="https://iiti.ac.in/people/~ajaykk/ajaykk.jpg" alt="" />
        </div>
       
    </div>
    <div className='vision '>
      <div ><h2>VISION AND MISSION</h2></div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda ullam quam asperiores nostrum maxime esse, excepturi et laudantium necessitatibus similique unde iusto ipsam hic quas voluptate quisquam quaerat commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores sunt expedita vel tempora explicabo aliquam aut corrupti optio, eligendi necessitatibus veniam hic vitae, officiis, ipsum dicta quia accusamus laborum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure magnam quae, officiis iusto architecto amet quam repellat nesciunt aut. Quo temporibus odio ullam dolore dolorum fugiat quisquam cupiditate nobis quam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sit fuga temporibus ducimus omnis atque optio. Saepe facilis libero necessitatibus ipsa dolorum quisquam molestias amet, odit ut molestiae earum cupiditate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex neque consectetur reiciendis. Totam enim, facilis at mollitia, consectetur laborum necessitatibus deleniti earum provident alias vero! Culpa quos quasi sit amet?
    </div>
    <div className='ranking'>
      <div ><h2>RANKINGS</h2></div>
   <div className='ranking-main'></div>
    </div>
  
   
 
    
    <div className='eve-pos'>
   
     
      <div className="events">
      <div><h1>EVENTS</h1></div>
      <Carousel variant="dark">
      <Carousel.Item className='item-cor'>
       
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-cor'>
       
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-cor'>
        
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div >
      <div  className=' open-pos'>
      <div><h1>OPEN POSITIONS</h1></div>
   <table className='table-main'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
     
        
       

      </tbody>
      </table>
      </div>
    </div>
   
    </>
  )
}

export default section
