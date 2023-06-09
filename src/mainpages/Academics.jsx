// import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './academic.css'
import React, { useEffect } from 'react';
// import styles from "academic.css";


const Academics = () => {
  // useEffect(() => {
  //   const scrollAnimElements = document.querySelectorAll(
  //     "[data-animate-on-scroll]"
  //   );
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       for (const entry of entries) {
  //         if (entry.isIntersecting || entry.intersectionRatio > 0) {
  //           const targetElement = entry.target;
  //           targetElement.classList.add(styles.animate);
  //           observer.unobserve(targetElement);
  //         }
  //       }
  //     },
  //     {
  //       threshold: 0.15,
  //     }
  //   );

  //   for (let i = 0; i < scrollAnimElements.length; i++) {
  //     observer.observe(scrollAnimElements[i]);
  //   }

  //   return () => {
  //     for (let i = 0; i < scrollAnimElements.length; i++) {
  //       observer.unobserve(scrollAnimElements[i]);
  //     }
  //   };
  // }, []);
  return (
    <>
      <div className="body">
        <div>
          <Navbar />
        </div>
        <div className="head">

          ACADEMICS

        </div>
        <div className="acad-card">
          <div className="wwiitbacinByHtmltodesi" id="box">
            <div className="divcontainer">
              <div className="admission">
                < a
                  href="https://academic.iiti.ac.in/"
                  target="_blank"
                />
                <div className="admission1">
                  Click here to know the admission process for the degree programs
                  offered by the Department of Metallurgical Engineering and
                  Materials Science at IIT Indore
                </div>
              </div>



              <div className="divcontainer1" id="programs">
                <div className="divprograms">
                  <div className="mtech2">
                    <div className="mtech21" id="box" />
                    <b className="mispelledStrongContainer">
                      <ul className="mtechWithSpecialization">
                        M.Tech. with Specialization in Metallurgical Engineering (2
                        Years):
                      </ul>
                    </b>
                  </div>
                  <div className="phd">
                    <div className="mtech21" id="box" />
                    <p className="mispelledStrongContainer1">
                      <ul className="mtechWithSpecialization">
                        Ph.D. Program
                      </ul>
                    </p>

                  </div>
                  <div className="mtech1">
                    <div className="mtech21" id="box" />
                    <p className="strongDualContainer">
                      <ul className="mtechWithSpecialization">
                        M.Tech. with Specialization in Materials Science and
                        Engineering (2 Years):
                      </ul>
                    </p>
                  </div>
                  <div className="btech">
                    <div className="mtech21" id="box" />
                    <p className="mispelledStrongContainer2">
                      <ul className="mtechWithSpecialization">
                        B.Tech. in Metallurgical Engineering and Materials Science (4
                        Years):
                      </ul>
                    </p>
                  </div>
                  <div className="p">
                    <div className="degreeProgramsOffered">
                      Degree programs offered by the Department of Metallurgical
                      Engineering and Materials Science at IIT Indore revolve around
                      exploring the properties of matter and their practical
                      utilization in various areas of science and engineering.
                    </div>
                  </div>

                  <img
                    className="image1Icon"
                    alt="error_404"
                    src="/image-1@1x.png"
                    data-animate-on-scroll
                  />
                </div>
                <div className="divpageTitle">
                  <h1 className="heading1" id="program">
                    Programmes
                  </h1>
                </div>
              </div>
              <div className="cal" id="cal" >

                <a className="academicCalenderForContainer">
                  <span className="academicCalenderForContainer1">
                    <p className="academicCalenderFor">
                      Academic Calender for the year 23-24
                    </p>
                    <p className="academicCalenderFor">UG</p>
                    <p className="academicCalenderFor">PG/PHD</p>
                  </span>
                </a>
              </div>
              <div className="curriculum" id="curr">
                <a
                  className="curriculumLink"
                  href="https://academic.iiti.ac.in/"
                  target="_blank"
                >
                  Curriculum link
                </a>
              </div>
            </div>

          </div>
        </div>
        <div>
          <Footer />
        </div>

      </>
      )
}

      export default Academics
