import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaAngleLeft } from "react-icons/fa";
import Table from "react-bootstrap/Table";

const profile3 = () => {
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
            <img src="http://mems.iiti.ac.in/images/devan.jpg" alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
            <span className="pc1-head">Prof. Rupesh Devan</span>

            <ul>
              <li>Email : rupesh@iiti.ac.in</li>
              <li>Office : pod 305 </li>
              <li>
                webpage :{" "}
                <a href="https://rupesh76.wixsite.com/rupesh">
                  {" "}
                  visit page
                </a>
              </li>
              <li>contact : +91 732 4306 526</li>
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
                <td>Shivaji University, Kolhapur</td>
                <td>Ph.D. Physics
(Materials Science) </td>
                <td>2007</td>
              </tr>
              <tr>
                <td>Shivaji University, Kolhapur</td>
                <td>M.Sc. Physics
(Materials Science) </td>
                <td>2004</td>
              </tr>
              <tr>
                <td>Shivaji University, Kolhapur</td>
                <td>B.Sc. Physics
(Materials Science)</td>
                <td>2002</td>
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
                  S. Bimli,V. Manjunath, S. R. Mulani, A. Miglani, O. S. Game, and R. S. Devan*, “Theoretical investigations of all inorganic Cs2SnI6 double perovskite solar cells for efficiency ~30%” (Solar Energy 256 (2023) 76-87) (DOI:  10.1016/j.solener.2023.03.059)
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  N. Kitchamsetti, M. Samtham, D. Singh, E. Choudhary, S. R. Rondiya, Y. R. Ma, R. W. Cross, N. Y. Dzade, and R. S. Devan*, “Hierarchical 2D MnO2@1D mesoporous NiTiO3 core-shell hybrid structures for high-performance supercapattery electrodes:Theoretical and experimental investigations” (J. of Electroanalytical Chemistry 936 (2023) 117359) (DOI: 10.1016/j.jelechem.2023.117359)
                    .
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    S. Bimli, Y. K. Reddy, V. Manjunath, and R. S. Devan*, “Performance evaluation of metal oxide transport and absorber layers for all oxide heterostructure solar cells with ∼26% efficiency” (Chinese J. of Physics  82 (2023) 120-133) (DOI: 10.1016/j.cjph.2023.01.007)
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
                    Amorphous Metal Oxide films, (Technology is licensed) ;
                    K.L.G. Goh, H.Q. Le, and Ajay Kushwaha, Patent Publication
                    Number: 20170259300,US Patent (Patent number: 10668500):
                    Date of Patent: June 2, 2020
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          DUO-India Professor Fellowship Award, Govt. of India and ASEMDUO, South Korea (2020-22).
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
           
           1. Nano-hetero-architectures <br />
           2. Materials for energy storage and conversion<br />
           3. Photoactive Materials<br />

          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile3;
