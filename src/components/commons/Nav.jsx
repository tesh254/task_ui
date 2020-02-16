import React from "react";
import { NavLink } from "react-router-dom"

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink
            style={{ fontWeight: "bold", fontSize: "18pt" }}
            className="navbar-item"
            to="/"
          >
            Tasks
          </NavLink>
          {/* eslint-disable-next-line */}
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink to="/login" className="button is-primary">
                  <strong>Log in</strong>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
