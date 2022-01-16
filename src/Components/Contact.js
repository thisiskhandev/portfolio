import React from "react";
import shakeHands from ".././Assets/Images/contact1.webp";
import SocialIcons from "./SocialIcons";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <main className="container cardss contact_form_sec" id="contactFormSec">
        <section className="row">
          <div className="col-12 text-center">
            <span className="subtitle">CONTACT</span>
            <h2 className="title">Contact With Me</h2>
          </div>
        </section>
        <section className="row mt-5 g-5">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <div className="content portfolio_content">
                  <div className="image mb-4 mt-2">
                    <img src={shakeHands} className="img-fluid" alt="test" />
                  </div>
                  <h5>Hi I am,</h5>
                  <h2>Hassan Khan</h2>
                  <p className="text-capitalize">front-end web developer</p>
                  <p>
                    I am available for freelance work. Connect with me via and
                    call in to my account.
                  </p>
                  <p>
                    <span>Phone: </span>
                    <span>
                      <a href="tel:03132535939"> 03132535939</a>
                    </span>
                  </p>
                  <p>
                    <span>Email: </span>
                    <span>
                      <a href="mailto:hassankhan427726@outlook.com">
                        hassankhan427726@outlook.com
                      </a>
                    </span>
                  </p>
                  <p>FIND WITH ME</p>
                </div>
                <SocialIcons />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <div className="content portfolio_content">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <section className="row mb-3">
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label
                          for="your-name"
                          class="form-label text-uppercase"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="your-name"
                          aria-describedby="your-name"
                        />
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label
                          for="tel-phone"
                          class="form-label text-uppercase"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          class="form-control"
                          id="tel-phone"
                          aria-describedby="tel-phone"
                        />
                      </div>
                    </section>
                    <section className="row mb-3">
                      <div class="col-12">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          aria-describedby="email"
                        />
                      </div>
                    </section>
                    <section className="row mb-3">
                      <div class="col-12">
                        <label for="subject" class="form-label text-uppercase">
                          Subject
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          aria-describedby="subject"
                        />
                      </div>
                    </section>
                    <section className="row mb-3">
                      <div class="col-12">
                        <label for="message" class="form-label text-uppercase">
                          Your Message
                        </label>
                        <textarea
                          class="form-control"
                          id="message"
                          rows="10"
                        ></textarea>
                      </div>
                    </section>
                    <button type="submit" class="btn text-uppercase mt-4">
                      Send Message <BsArrowRight />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
