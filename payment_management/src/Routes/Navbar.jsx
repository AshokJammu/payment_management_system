import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex" }}>
      <Link style={{ flex: 1 }} to="/">
        Home
      </Link>
      <Link style={{ flex: 1 }} to="/users">
        USERS
      </Link>
      <Link style={{ flex: 1 }} to="/category">
        CATEGORY
      </Link>
    </div>
  );
}

export default Navbar;
