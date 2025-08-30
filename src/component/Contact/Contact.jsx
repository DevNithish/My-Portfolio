import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <section id="contact">
        <div className="container fs-4 ">
          <h2 className="section-title text-center">Get in Touch</h2>
          <p className="text-center mb-5">
            I’m always open to discussing opportunities, collaborations, or
            exciting projects. Let’s build something amazing together!
          </p>
          <div className="row">
            <div className="col-md-6">
              <form
                action="mailto:nithish10vln@gmail.com"
                method="post"
                encType="text/plain"
                className="p-4 contact-form"
              >
                <div className="mb-3">
                  <label className="form-label mb-0">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label mb-0">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label ">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </form>
            </div>
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
              <p>
                <strong>Email : </strong>
                <a href="mailto:nithish10vln@gmail.com">
                  nithish10vln@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone : </strong>
                <a href="tel:+919629258772">+91 96292 58772</a>
              </p>
              <p>
                <strong>LinkedIn : </strong>
                <a href="https://linkedin.com/in/nikux30">
                  linkedin.com/in/nikux30
                </a>
              </p>
              <div className="social-icons mt-3">
                <a href="https://linkedin.com/in/nikux30">
                  <img src="linkedinIcon.png" alt="" />
                </a>
                <a href="mailto:nithish10vln@gmail.com">
                  <img src="emailIcon.png" alt="" />
                </a>
                <a href="tel:+919629258772">
                  <img src="githubIcon.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cont-cnt">
        <div className="rights">
          @2025 Nithish Kumar S | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;
