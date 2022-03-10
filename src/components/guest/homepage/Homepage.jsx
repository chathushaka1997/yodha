import React from "react";

import NavbarComponent from "../common/NavbarComponent";
import FirstBannerComp from "./FirstBannerComp";
import ContentComp from "./ContentComp";
import FooterComp from "./FooterComp";

const Homepage = () => {
  return (
    <div>
     {/*  <NavbarComponent></NavbarComponent> */}
      <FirstBannerComp></FirstBannerComp>
      <ContentComp></ContentComp>
      <FooterComp></FooterComp>
    </div>
  );
};

export default Homepage;
