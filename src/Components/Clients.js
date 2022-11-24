import React from "react";
// import BootClasses from "./Environments/BootClasses";
import WordPressToolsArr from "./Environments/ClientsArr/WordPressToolsArr";
import HTMLToolsArr from "./Environments/ClientsArr/HTMLToolsArr";
import ReactToolArr from "./Environments/ClientsArr/ReactToolArr";

const Clients = () => {
  return (
    <>
      <main className="container" id="clients">
        <section className="row" data-aos="fade-up" data-aos-duration="500">
          <div className="col-12">
            <span className="subtitle">AWESOME TOOLS I WORK ON</span>
            <h2 className="title">POPULAR TOOLS</h2>
          </div>
        </section>
        <section className="row mt-5">
          <div className="col-12">
            <section className="row">
              <Tabs />
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
export default Clients;

const Tabs = () => {
  return (
    <>
      <main className="container">
        <section className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="sticky-top">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  WordPress
                </button>
                <button
                  className="nav-link"
                  id="v-pills-customsite-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-customsite"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-customsite"
                  aria-selected="false"
                >
                  Custom Front-End
                </button>
                <button
                  className="nav-link"
                  id="v-pills-reactweb-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-reactweb"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-reactweb"
                  aria-selected="false"
                >
                  React Web App
                </button>
              </div>
            </div>
          </div>
          <TabContent />
        </section>
      </main>
    </>
  );
};

const TabContent = () => {
  return (
    <>
      <section className="col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <section className="row client_info text-center g-4">
              {WordPressToolsArr.map((values, index) => {
                return (
                  <ClientData
                    key={index}
                    ClientImage={values.ClientImage}
                    ClientName={values.ClientName}
                    // ClientTarget={values.ClientTarget}
                  />
                );
              })}
            </section>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-customsite"
            role="tabpanel"
            aria-labelledby="v-pills-customsite-tab"
          >
            <section className="row client_info text-center g-4">
              {HTMLToolsArr.map((values, index) => {
                return (
                  <ClientData
                    key={index}
                    ClientImage={values.ClientImage}
                    ClientName={values.ClientName}
                    // ClientTarget={values.ClientTarget}
                  />
                );
              })}
            </section>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-reactweb"
            role="tabpanel"
            aria-labelledby="v-pills-reactweb-tab"
          >
            <section className="row client_info text-center g-4">
              {ReactToolArr.map((values, index) => {
                return (
                  <ClientData
                    key={index}
                    ClientImage={values.ClientImage}
                    ClientName={values.ClientName}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

const ClientData = (props) => {
  const { ClientTarget, ClientImage, ClientName } = props;
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="client_card card">
          <a href={ClientTarget} target="_blank" rel="noopener noreferrer">
            {ClientImage === "" ? null : (
              <img src={ClientImage} alt={ClientName} className="img-fluid" />
            )}

            <h3>{ClientName}</h3>
            <hr style={{ width: "100%", backgroundColor: "#000" }} />
            <h5>{ClientName}</h5>
          </a>
        </div>
      </div>
    </>
  );
};
