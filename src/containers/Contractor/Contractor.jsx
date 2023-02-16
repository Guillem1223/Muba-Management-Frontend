import React, { useState } from "react";
import PropTypes from "prop-types";
export const Contractor = (props) => {
  const initialValues = {
    tax_data: "",
    backline: "",
    technical_rider: "",
  };
  const [tax_data, setTax_data] = useState("");
  const [backline, setBackline] = useState("");
  const [technical_rider, setTechnical_rider] = useState("");
  const handleTax_data = (ev) => {
    setTax_data(ev.target.value);
  };
  const handleBackline = (ev) => {
    setBackline(ev.target.value);
  };
  const handleTechnical_rider = (ev) => {
    setTechnical_rider(ev.target.value);
  };
  const handleRegister = () => {
    register(credentials);
    navigate("/");
    console.log(credentials);
  };
  return (
    <div className="contractorContainer">
      <div className="signCard">
        <div className="form">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputTaxData" className="form-label">
                Tax Data
              </label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                onChange={handleTax_data}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputSurname" className="form-label">
                Technical Rider
              </label>
              <textarea
                type="name"
                className="form-control"
                id="inputSurname"
                onChange={handleTechnical_rider}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Backline
              </label>
              <textarea
                type="email"
                className="form-control"
                id="inputEmail4"
                onChange={handleBackline}
              />
            </div>

            <div className="col-12"></div>
            <button className="btn btn-success" onClick={handleRegister}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
