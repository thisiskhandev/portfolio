import React from "react";
import Contact from "../Contact";
const ContactPage = () => {
  return (
    <>
      <main className="general my-5 py-5 head_line" id="contactPage">
        <Contact />
        <p className="text-center pt-5">
          Please enter your email and phone number on our contact form and I
          will be happy to assist you
        </p>
      </main>
    </>
  );
};
export default ContactPage;
