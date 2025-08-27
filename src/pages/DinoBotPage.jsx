import Features from "@components/Features";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import React, { Fragment } from "react";

const DinoBotPage = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </Fragment>
  );
};

export default DinoBotPage;
