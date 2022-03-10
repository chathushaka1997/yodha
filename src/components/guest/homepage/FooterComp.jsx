import React from "react";
import logo from "../../../assets/images/logo1.PNG";

const FooterComp = () => {
  return (
    <div className="footerComp mt-5 pb-5 overflow-hidden">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-3 mb-4 mt-mb-0 ">
            <img src={logo} width="200px" alt="Yodha resort logo" className="mb-3" />
            <p className="mb-2">About Us</p>
            <p className="mb-2">Entertainment</p>
            <p className="mb-2">Cosmetology</p>
            <p className="mb-2">Contacts</p>
          </div>
          <div className="col-md-3 mb-4 mt-mb-0">
            <h4 className="main-title mb-4">The address</h4>
            <p>
              Yodha resort,
              <br />
              Kataragama Road,
              <br />
              Tissamaharamaya
            </p>
          </div>
          <div className="col-md-3 mb-4 mt-mb-0">
            <h4 className="main-title mb-4">Contacts</h4>
            <p className="mb-2">071 542 2154</p>
            <p className="mb-2">047 542 5484</p>
            <p className="mb-2">yodharesort@gmail.com</p>
          </div>
          <div className="col-md-3 ">
            <h4 className="main-title mb-4">Follow us</h4>
            <p className="mb-4 d-flex"><i class="fa-brands fa-facebook me-3" style={{fontSize:"30px"}}></i> Yodha resort./ </p>
            <p className="mb-4 d-flex"> <i class="fa-brands fa-instagram me-3" style={{fontSize:"30px"}}></i> @yodharesort</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
