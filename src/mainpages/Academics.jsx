import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './academic.css'
import styles from "academic.css";


const Academics = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);



  return (
    <>
      <div className="body">
        <div>
          <Navbar />
        </div>
        <div className="head">

          ACADEMICS

        </div>

        <div>
          <div className="acad-card">


            return (
            <div className={styles.wwiitbacinByHtmltodesi} id="box">
              <div className={styles.divcontainer}>
                <div className={styles.admission}>
                  < a
                    href="https://academic.iiti.ac.in/"
                    target="_blank"
                  />
                  <div className={styles.admission1}>
                    Click here to know the admission process for the degree programs
                    offered by the Department of Metallurgical Engineering and
                    Materials Science at IIT Indore
                  </div>
                </div>



                <div className={styles.divcontainer1} id="programs">
                  <div className={styles.divprograms}>
                    <div className={styles.mtech2}>
                      <div className={styles.mtech21} id="box" />
                      <b className={styles.mispelledStrongContainer}>
                        <ul className={styles.mtechWithSpecialization}>
                          M.Tech. with Specialization in Metallurgical Engineering (2
                          Years):
                        </ul>
                      </b>
                    </div>
                    <div className={styles.phd}>
                      <div className={styles.mtech21} id="box" />
                      <p className={styles.mispelledStrongContainer1}>
                        <ul className={styles.mtechWithSpecialization}>
                          Ph.D. Program
                        </ul>
                      </p>
                    </div>
                    <div className={styles.mtech1}>
                      <div className={styles.mtech21} id="box" />
                      <p className={styles.strongDualContainer}>
                        <ul className={styles.mtechWithSpecialization}>
                          M.Tech. with Specialization in Materials Science and
                          Engineering (2 Years):
                        </ul>
                      </p>
                    </div>
                    <div className={styles.btech}>
                      <div className={styles.mtech21} id="box" />
                      <p className={styles.mispelledStrongContainer2}>
                        <ul className={styles.mtechWithSpecialization}>
                          B.Tech. in Metallurgical Engineering and Materials Science (4
                          Years):
                        </ul>
                      </p>
                    </div>
                    <div className={styles.p}>
                      <div className={styles.degreeProgramsOffered}>
                        Degree programs offered by the Department of Metallurgical
                        Engineering and Materials Science at IIT Indore revolve around
                        exploring the properties of matter and their practical
                        utilization in various areas of science and engineering.
                      </div>
                    </div>

                    <img
                      className={styles.image1Icon}
                      alt="error_404"
                      src="/image-1@1x.png"
                      data-animate-on-scroll
                    />
                  </div>
                  <div className={styles.divpageTitle}>
                    <h1 className={styles.heading1} id="program">
                      Programmes
                    </h1>
                  </div>
                </div>
                <div className={styles.cal} id="cal" >

                  <a className={styles.academicCalenderForContainer}>
                    <span className={styles.academicCalenderForContainer1}>
                      <p className={styles.academicCalenderFor}>
                        Academic Calender for the year 23-24
                      </p>
                      <p className={styles.academicCalenderFor}>UG</p>
                      <p className={styles.academicCalenderFor}>PG/PHD</p>
                    </span>
                  </a>
                </div>
                <div className={styles.curriculum} id="curr">
                  <a
                    className={styles.curriculumLink}
                    href="https://academic.iiti.ac.in/"
                    target="_blank"
                  >
                    Curriculum link
                  </a>
                </div>
              </div>
              {/* <div className={styles.link}>
        <div className={styles.skipToMain}>Skip to main content</div>
      </div>
      <div className={styles.list}>
        <img
          className={styles.itemLinkTwitterpng}
          alt=""
          src="/item--link--twitterpng@2x.png"
        />
        <div className={styles.item}>
          <img
            className={styles.linkFacebookpng}
            alt=""
            src="/link--facebookpng@2x.png"
          />
        </div>
        <div className={styles.item1}>
          <img
            className={styles.linkFacebookpng}
            alt=""
            src="/link--googlepng@2x.png"
          />
        </div>
        <div className={styles.item2}>
          <img
            className={styles.linkFacebookpng}
            alt=""
            src="/link--linkedinpng@2x.png"
          />
        </div>
      </div>
      <div className={styles.link1}>
        <div className={styles.scroll}>Scroll</div>
      </div> */}
            </div>









          </div>
          <div>

          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Academics
