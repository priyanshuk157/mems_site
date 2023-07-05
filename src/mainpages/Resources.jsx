import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AccordianMain from "../components/AccordianMain";
import "./resources.css";

const Resources = () => {
  return (
    <>
      <div className="body">
        <div>
          <Navbar />
        </div>
        <div className="head">RESOURCES</div>
        <div>
          <AccordianMain />
        </div>
        <div className="resource-body">
          <div className="resource-block">
            <div className="head9">DPGC </div>
            <ul>
              <li>Dr. Sumanta Samal (Convener)</li>
              <li>Dr. Dhirendra Kumar Rai</li>
              <li>Dr. Nishith Kumar Prasad</li>
              <li>Dr. Dudekula Althaf Basha (HOD)</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">DUGC</div>
            <ul>
              <li>Dr. Hemant Borkar (Convener)</li>
              <li>Dr. M. Dubey</li>
              <li>Dr. Jayaprakash Murugesan</li>
              <li>Dr. Sunil Kumar (HOD)</li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Safety</div>
            <ul>
              <li>Dr. M. Dubey (Convener)</li>
              <li>Dr. Vinod Kumar</li>
              <li>Prof. Parasharam M Shirage</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Library Committee </div>
            <ul>
              <li>Dr. Sunil Kumar (Convener)</li>
              <li>Dr. Abhijit Ghosh</li>
              <li>Dr. Sumanta Samal</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Outreach Activities</div>
            <ul>
              <li>Dr. Ram Sajeevan Maurya (Convener)</li>
              <li>Dr. Dudekula Althaf Basha</li>
              <li>Dr. Nishith Kumar Prasad HOD</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Placement & Industry Relations </div>
            <ul>
              <li>Dr. Nishith Kumar Prasad (Convener) </li>
              <li>Dr. Chandan Haldar</li>
              <li>Dr. Hemant Borkar</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Annual Report and RTI </div>
            <ul>
              <li>Dr. Chandan Haldar (Convener)</li>
              <li>Dr. Vinod Kumar</li>
              <li>Dr. Ram Sajeevan Maurya</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Website </div>
            <ul>
              <li>Dr. K. V. Vamsi (Convener)</li>
              <li>Dr. Chandan Haldar</li>
              <li>Dr. Nishith Kumar Prasad</li>
              <li>
                Student Representatives: <br/> Mr. Priyanshu, Mr. Pranjal, Ms. Tanvi
              </li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">DFM Secretary </div>
            <ul>
              <li>Dr. Dhirendra Kumar Rai </li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Departmental Common Facilities/Labs </div>
            <ul>
              <li>HOD (ex officio) (Convener) Dr. Hemant Borkar</li>
              <li>Dr. Ram Sajeevan Maurya</li>
              <li>Dr. Dhirendra Kumar Rai</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">SEM</div>
            <ul>
              <li>Dr. Ajay Kumar Kushwaha (Convener)</li>
              <li>Prof. P. M. Shirage</li>
              <li>Dr. Dhirendra Rai</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">XRD</div>
            <ul>
              <li>Dr. Rupesh Devan (Convener)</li>
              <li>Dr. Abhijit Ghosh</li>
              <li>Dr. Sunil Kumar</li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Computational</div>
            <ul>
              <li>Dr. Chandan Haldar (Convener)</li>
              <li>Dr. Sumanta Samal</li>
              <li>Dr. K. V. Vamsi</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">UTM</div>
            <ul>
              <li>Dr. Eswar Prasad (Convener)</li>
              <li>Dr. Jayaprakash</li>
              <li>Dr. Abhijeet Gosh</li>
              <li>Dr. Santosh Hosmani</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">SPS</div>
            <ul>
              <li>Dr. Vinod Kumar (Convener)</li>
              <li>Dr. Ram Sajeevan Maurya</li>
              <li>Dr. Sumanta Samal</li>
              <li>Prof. P. M. Shirage</li>
            </ul>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Resources;
