import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import shakeHands from ".././Assets/Images/contact1.webp";
import SocialIcons from "./SocialIcons";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";
import emailjs from "@emailjs/browser";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const form = useRef();

  const history = useHistory();
  const sendEmail = (e) => {
    e.preventDefault();
    // redirecting to thank page
    history.push("/portfolio/thank-you");

    emailjs
      .sendForm(
        "service_id_khan_sahab",
        "template_h9lbkl8",
        form.current,
        "user_ff1zVbvQjb0mjdI4XTgHI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <main className="container cardss contact_form_sec" id="contactFormSec">
        <section className="row" data-aos="fade-up" data-aos-duration="500">
          <div className="col-12 text-center">
            <span className="subtitle">CONTACT</span>
            <h2 className="title">Contact With Me</h2>
          </div>
        </section>
        <section className="row mt-5 g-5">
          <div
            className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12"
            data-aos="fade-in"
          >
            <div className="card">
              <div className="card-body">
                <div className="content portfolio_content">
                  <div className="image mb-4 mt-2">
                    <img
                      src={shakeHands}
                      className="img-fluid"
                      alt="test"
                      data-aos="flip-up"
                    />
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
          <div
            className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="card">
              <div className="card-body">
                <div className="content portfolio_content">
                  <form
                    onSubmit={sendEmail}
                    ref={form}
                  >
                    <section className="row mb-3">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label
                          htmlFor="your-name"
                          className="form-label text-uppercase"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          id="your-name"
                          aria-describedby="your-name"
                          name="from_name"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label
                          htmlFor="tel-phone"
                          className="form-label text-uppercase"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          required
                          id="tel-phone"
                          aria-describedby="tel-phone"
                          name="phone"
                        />
                      </div>
                    </section>
                    <section className="row mb-3">
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          required
                          id="email"
                          aria-describedby="email"
                          name="from_email"
                        />
                      </div>
                    </section>
                    <section className="row mb-3">
                      <div className="col-12">
                        <label
                          htmlFor="subject"
                          className="form-label text-uppercase"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          id="subject"
                          aria-describedby="subject"
                          name="subject"
                        />
                      </div>
                    </section>
                    <section className="row mb-3">
                      <div className="col-12">
                        <label
                          htmlFor="message"
                          className="form-label text-uppercase"
                        >
                          Your Message
                        </label>
                        <textarea
                          className="form-control"
                          required
                          id="message"
                          rows="10"
                          name="message"
                        ></textarea>
                      </div>
                    </section>
                    <button type="submit" className="btn text-uppercase mt-4">
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
