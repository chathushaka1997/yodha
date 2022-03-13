import React from "react";
import { Form } from "react-bootstrap";
import bgImg from "../../../assets/images/bg1.png";
import NavbarComponent from "../common/NavbarComponent";
const FirstBannerComp = () => {
  return (
    <div className="bannerContainer">
      <NavbarComponent></NavbarComponent>
      <div className="container checkin-container">
        <div>
          <h1 className="main-title1 mb-5">Enjoy the gentle Breeze on the Yodha lake</h1>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3" >
              <input type="date" className="form-control me-0 me-md-5 mb-4" placeholder="Check In : &nbsp; " />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <input type="date" className="form-control me-0 me-md-5 mb-4" placeholder="Check out : &nbsp; " />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <Form.Select aria-label="Default select example" style={{  marginRight: "100px" }} className=" me-0 me-md-5 mb-4">
                <option>Persons</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <button className="btn ps-5 pe-5" style={{ background: "#E1963C",width:"100%"  }}>
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBannerComp;
