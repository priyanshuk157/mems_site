import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaAngleLeft } from "react-icons/fa";
import Table from "react-bootstrap/Table";

const profile2 = () => {
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
            <img src="http://mems.iiti.ac.in/images/shirage.jpg" alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
            <span className="pc1-head">Prof. Parasharam M. Shirage</span>

            <ul>
              <li>Email : pmshirage@iiti.ac.in</li>
              <li>Office : pod 305 </li>
              <li>
                webpage :{" "}
                <a href="https://iiti.ac.in/people/~pmshirage//">
                  {" "}
                  visit page
                </a>
              </li>
              <li>contact : +91 731 2438 739</li>
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
                <td>Ph.D. </td>
                <td>2004</td>
              </tr>
              <tr>
                <td>Shivaji University, Kolhapur</td>
                <td>M.Sc. Physics (Electronics) </td>
                <td>1999</td>
              </tr>
              <tr>
                <td>Shivaji University, Kolhapur</td>
                <td>B.Sc. (Physics) </td>
                <td>1997</td>
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
                  Prateek Bhojane, Parasharam M Shirage, "Impact of Post-Synthesis Heat Treatment Avoidance on Cobalt Carbonate Hydroxide as a Battery-Type Electrode Material", Applied Surface Science 2023, 615, 156352. https://doi.org/10.1016/j.apsusc.2023.156352
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Alfa Sharma, Akash Sharma, Subhash Chand Yadav, Achyuta Nanda Acharya, Parasharam M Shirage, "Adaptive Estimation of Measurement Error in Chemiresistive Sensors and Its Correlation with Sensitivity", 2023. https://doi.org/10.21203/rs.3.rs-2424288/v1
                    .
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Abhishek Srivastava, Jena Akash Kumar Satrughna, Manish Kumar Tiwari, Archana Kanwade, Subhash Chand Yadav, Kiran Bala, Parasharam M Shirage, "Effect of Ti1-xFexO2 photoanodes on the performance of dye-sensitized solar cells utilizing natural betalain pigments extracted from Beta vulgaris (BV)", Energy Advances 2023, 2, 148-160. DOI: 10.1039/D2YA00197G

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
                   --
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          MRSI Medal 2020
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          Materials Science and Condensed Matter Physics
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile2;
