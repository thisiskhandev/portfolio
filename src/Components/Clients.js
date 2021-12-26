import React from "react";
// import BootClasses from "./Environments/BootClasses";
import WordPressClientsArr from "./Environments/ClientsArr/WordPressClientsArr";
import HTMLClientsArr from "./Environments/ClientsArr/HTMLClientsArr";

const Clients = () => {
  return (
    <>
      <main className="container" id="clients">
        <section className="row">
          <div className="col-12">
            <span className="subtitle">POPULAR CLIENTS</span>
            <h2 className="title">Popular Clients</h2>
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
      <section className="container">
        <div className="row">
          <div className="align-items-start d-lg-flex">
            <div
              className="nav flex-column nav-pills me-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
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
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Custom HTML
              </button>
            </div>
            <TabContent />
          </div>
        </div>
      </section>
    </>
  );
};

const TabContent = () => {
  return (
    <>
      <section className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <section className="row client_info text-center g-4">
              {WordPressClientsArr.map((values) => {
                return (
                  <ClientData
                    key={values.id}
                    ClientImage={values.ClientImage}
                    ClientName={values.ClientName}
                    ClientTarget={values.ClientTarget}
                  />
                );
              })}
            </section>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <section className="row client_info text-center g-4">
              {HTMLClientsArr.map((values) => {
                return (
                  <ClientData
                    key={values.id}
                    ClientImage={values.ClientImage}
                    ClientName={values.ClientName}
                    ClientTarget={values.ClientTarget}
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
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="client_card card">
          <a
            href={props.ClientTarget}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.ClientImage}
              alt={props.ClientName}
              className="img-fluid"
            />
            <hr style={{ width: "100%", backgroundColor: "#000" }} />
            <h5>{props.ClientName}</h5>
          </a>
        </div>
      </div>
    </>
  );
};
