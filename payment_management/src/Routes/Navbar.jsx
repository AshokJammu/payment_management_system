import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-center">
        <div style={{ display: "flex" }}>
          <Link className="navbar-brand" style={{ flex: 1 }} to="/">
            HOME
          </Link>
          <Link className="navbar-brand" style={{ flex: 1 }} to="/users">
            USERS
          </Link>
          <Link className="navbar-brand" style={{ flex: 1 }} to="/category">
            CATEGORY
          </Link>
        </div>
      </nav>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Navbar> */}
    </>
  );
}

export default Navbar;
