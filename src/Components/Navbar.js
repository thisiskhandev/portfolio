import React from "react";

const Navbar = () => {
  return (
    <>
      <header id="MenuD">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <section className="container-xxl">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <a className="navbar-brand" href="#">
                Khan
              </a>
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
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav" id="mainNav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Clients
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
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
            <pre className="menu_text">Menu</pre>
          </a>
        </section>

        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
