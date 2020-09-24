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
              <label htmlFor="FormContactName" className="darkgrey-text">
                <MDBIcon className="grey-text" icon="user"></MDBIcon>
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                id="FormContactName"
                className="form-control"
                placeholder="Your Name (required)"
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
                <MDBIcon className="grey-text" icon="tag"></MDBIcon>
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                id="FormContactSubject"
                className="form-control"
                placeholder="Subject (required)"
              />
              <br />
              <label htmlFor="FormContactMessage" className="grey-text">
                <MDBIcon className="grey-text" icon="pencil-alt"></MDBIcon>
              </label>
              <textarea
                onChange={handleInputChange}
                type="text"
                id="FormContactMessage"
                className="form-control"
                rows="3"
                placeholder="Your Message (required)"
              />
              <div className="text-center mt-4">
                <MDBBtn
                  disabled={
                    !(
                      form.FormContactMessage &&
                      form.FormContactSubject &&
                      form.FormContactName
                    )
                  }
                  color="indigo"
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
