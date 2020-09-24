import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

const ContactForm = () => {
  const [form, setForm] = useState({});

  function handleInputChange(event) {
    const { id, value } = event.target;
    setForm({
      ...form,
      [id]: value,
    });
  }
  console.log({ form });
  return (
    <MDBRow>
      <MDBCol md="12">
        <MDBCard color="white" text="black" className="text-center">
          <MDBCardBody>
            <form>
              <p className="h4 text-center mb-4">Write to Me</p>
              <label htmlFor="FormContactName" className="grey-text">
                Your name
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                id="FormContactName"
                className="form-control"
              />
              <br />
              {/* <label htmlFor="FormContactEmail" className="grey-text">
                Your email
              </label>
              <input
                onChange={handleInputChange}
                type="email"
                id="FormContactEmail"
                className="form-control"
              />
              <br /> */}
              <label htmlFor="FormContactSubject" className="grey-text">
                Subject
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                id="FormContactSubject"
                className="form-control"
              />
              <br />
              <label htmlFor="FormContactMessage" className="grey-text">
                Your message
              </label>
              <textarea
                onChange={handleInputChange}
                type="text"
                id="FormContactMessage"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <MDBBtn
                  color="warning"
                  outline
                  type="submit"
                  href={`mailto:mvolonnino12@gmail.com?subject=${form.FormContactSubject}&body=${form.FormContactMessage}
                  %0d%0a%0d%0a%0d%0aSincerely ${form.FormContactName}`}
                >
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default ContactForm;
