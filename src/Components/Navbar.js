import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <header id="MenuD" className="mb-5 pb-5">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <section className="container">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <NavLink className="navbar-brand" to="/portfolio">
                Khan
              </NavLink>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9">
              <main id="MenuDekstop">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavDropdown"
                >
                  <MenuLinks />
                </div>
              </main>
              <MenuM />
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

const MenuM = () => {
  return (
    <>
      <header id="MenuM">
        <section className="breadcum">
          <a
            className="mobile_menu"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <span className="menu_line"></span>
            <span className="menu_line"></span>
            <span className="menu_line"></span>
            {/* <pre className="menu_text">Menu</pre> */}
          </a>
        </section>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="canvasMenuTitle"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="canvasMenuTitle">
              <NavLink to="/portfolio">Hassan Khan</NavLink>
            </h5>
            <div id="closeBtn">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="offcanvas-body">
            <MenuLinks />
          </div>
        </div>
      </header>
    </>
  );
};

const MenuLinks = () => {
  return (
    <>
      <div>
        <ul className="navbar-nav" id="mainNav">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/portfolio"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="portfolio#featuresMain" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio/portfolios">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio/about">
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio/blogs">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
