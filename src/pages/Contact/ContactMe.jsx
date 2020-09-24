import React from "react";

import CardHeaderContact from "../../components/Card-Header-Contact";
import ContactForm from "../../components/Contact-Form";

function ContactMe() {
  return (
    <div className="container">
      <CardHeaderContact />
      <ContactForm />
      <br></br>
    </div>
  );
}

export default ContactMe;
