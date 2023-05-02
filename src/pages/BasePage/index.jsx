import React from "react";
import Container from "components/container";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";

function BasePage() {
  return (
    <main>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}

export default BasePage;
