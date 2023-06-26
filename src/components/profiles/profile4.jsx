import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaAngleLeft } from "react-icons/fa";
import Table from "react-bootstrap/Table";

const profile4 = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="head4">
        <i className="back-button">
          <a href="faculty">
            <FaAngleLeft />
          </a>
        </i>
        <span>PROFILE</span>
      </div>

      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src="http://mems.iiti.ac.in/images/hosmani.jpg" alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
            <span className="pc1-head">Prof. Santosh Hosmani</span>

            <ul>
              <li>Email : sshosmani@iiti.ac.in</li>
              <li>Office : pod 305 </li>
              <li>
                webpage :{" "}
                <a href="https://sites.google.com/site/santoshhosa/">
                  {" "}
                  visit page
                </a>
              </li>
              <li>contact : +91 732 4306 525</li>
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
          <Table>
            <thead>
              <tr>
                <th>INSTITUTE</th>
                <th>COURSE</th>
                <th>YEAR OF PASSING</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Max-Plank-Inst., Stuttgart, Germany </td>
                <td>Ph.D. </td>
                <td>2006
</td>
              </tr>
              <tr>
                <td>IIT, Bombay</td>
                <td>M.Tech (Process
Metallurgy) </td>
                <td>2003</td>
              </tr>
              <tr>
                <td>RCE (currently NIT), Nagpur</td>
                <td>B.E. (Metallurgical
Engineering)  </td>
                <td>2001</td>
              </tr>
            </tbody>
          </Table>
          <br />
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
              Supervised 4 Ph.D students, 6 M.Tech and 11 B.tech students.
            </li>
            <li>Completed 2 Research Projects.</li>
            <li>
              Published 65 Journals, 10 conferences, 281 citations, 28 h-index,
              44 i10-index.
            </li>
            <li>
              Organised 3 workshops, 6 training programs, 2 short-term courses.{" "}
            </li>
            <li>
              Given 10 Invited/Contributory talk in national / international
              conferences.
            </li>
          </ul>
        </div>

        <div className="pc1">
          <span className="pc1-head">PUBLICATIONS</span>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th> Publication Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                  Nilesh K. Kumbhar, Manoj D. Joshi, Vikesh Kumar, S.S. Hosmani*, “An Impact of the Recent Developments in Coating Materials and Techniques on the Corrosion Response of AZ91D Alloy: A Review”, Advanced Engineering Materials, Accepted (2023). DOI: 10.1002/adem.202201680
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  M.D. Joshi, N.K. Kumbhar, O.V. Rambadey, P.R. Sagdeo, R. S. Devan, S.S. Hosmani*, “Exfoliated Nano-hBN Additives for Enhancing Tribological Performance of ATSP Coatings Deposited on AISI 316L Steel: Role of SMAT Pre-Treatment”, Surface and Coatings Technology, Vol. 447, 15 October 2022, Manuscript No. 128829, Pages 128829-1 to 128829-16 (2022). DOI: 10.1016/j.surfcoat.2022.128829
                    .
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Vikesh Kumar, A. Sharma, S.S. Hosmani, I. Singh*, “Effect of Ball Size and Impact Velocity on the Microstructure and Hardness of Surface Mechanical Attrition Treated 304L Steel: Experiment and Finite Element Simulations”, The International Journal of Advanced Manufacturing Technology, Vol. 120, 03 March 2022, Pages 3251–3267 (2022). DOI: 10.1007/s00170-022-08978-8
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">PATENTS</span>
          <div>
            <Table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {" "}
                    NA  
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          Written a book on “An Introduction to Surface Alloying of Metals”,
Published by Springer
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
           1. Surface Engineering <br />
           2. Severe Surface Deformation<br />
           3. Tribology and Physical
Metallurgy<br />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile4;
