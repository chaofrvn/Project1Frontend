import React from "react";
import NavbarL from "../components/NavbarLogged";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarL />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div
          className="column hsfas-background-light is-10 is-offset-1"
          style={{ backgroundColor: "aliceblue" }}
        >
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
