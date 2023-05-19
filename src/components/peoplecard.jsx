import React from "react";
import "./peoplecard.css";
import img from "../image.png";

const peoplecard = () => {
  return (
    <>
      <h1 align="center" style={{ color: "white" }}>
        HOD
      </h1>
      <div className="hodsec container d-flex justify-center align-center">
        <img src={img} className="hodimg" alt="okf" />
        <div className="hodtext">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
        </div>
      </div>
      <div className="container mt-5 peoplecont">
        <div className="faculty d-flex">
          <div className="m-auto text-center">
            FACULTY
            <br />
            <small>
              <i>Get to know our best in class faculty</i>
            </small>
          </div>
        </div>
        <div className="staff d-flex">
          <div className="m-auto text-center">
            STAFF
            <br />
            <small>
              <i>Get to know our best in class staff</i>
            </small>
          </div>
        </div>
        <div className="students d-flex">
          <div className="m-auto text-center">
            STUDENTS
            <br />
            <small>
              <i>Get to know our best in class staff</i>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default peoplecard;
