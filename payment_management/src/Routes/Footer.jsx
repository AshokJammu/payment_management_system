import React from "react";

export default function Footer(props) {
  return (
    <div className="row text-white bg bg-dark p-3 mt-5">
      <div className="col-12 d-flex ">
        <h3 className="font-weight-bold text-white">
          Payment management system
        </h3>
        <p className="ml-5">Home</p>
        <p className="ml-5">About Us</p>
        <p className="ml-5">Privacy Policy</p>
        <p className="ml-5">Terms of use</p>
        <p className="ml-5">Forums</p>
      </div>

      <div className="col-12 card bg bg-dark border-4 border border-dark text-white py-2">
        <div className="row card-footer">
          <div className="col-6 offset-2">
            <p>2020 Epicture Life Ventures. All Rights Reserved</p>
          </div>

          <div className="col-3">
            <i style={{ fontSize: "30px" }} className="fab fa-twitter" />
            <i
              style={{ marginLeft: "10px", fontSize: "30px" }}
              className="fab fa-instagram"
            />
            <i
              style={{ marginLeft: "10px", fontSize: "30px" }}
              className="fab fa-facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
