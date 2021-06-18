/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cart from "../images/cart.png";

// stateless functional component
// snippet sfc
const NavBar = (props) => {
  console.log("navBar render");
  return (
    <nav class="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        <img src={cart} width="50" height="50" alt="Chango"></img>
        Shopping
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
        <div>Total: ${props.total}</div>
      </a>
    </nav>
  );
};

export default NavBar;
