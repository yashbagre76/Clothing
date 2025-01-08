import React from "react";
import MainContent from "../components/MainContent";
import Footer from "../components/footer";
import Head from "../components/Head";
import Shopify from "../components/Shopify";
import Arrival from "../components/arrival";

function Home() {
  return (
    <>
      <Head />
      <MainContent />
      <Shopify />
      <Arrival />
      <Footer />
    </>
  );
}

export default Home;
