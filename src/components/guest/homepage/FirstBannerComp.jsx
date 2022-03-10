import React from "react";
import { Form } from "react-bootstrap";
import bgImg from "../../../assets/images/bg1.png";
import NavbarComponent from "../common/NavbarComponent";
const FirstBannerComp = () => {
  return (
    <div className="bannerContainer">
      <NavbarComponent></NavbarComponent>
      {/*  <img src={bgImg} alt="yodha resort" /> */}
     
      <input type="date" className="form-control" placeholder="Chack In : &nbsp; "/>
      <input type="date" className="form-control" placeholder="Check out : &nbsp; " />
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};

export default FirstBannerComp;
