import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-subtitle">
          I'm always open to discussing opportunities, collaborations, or
          exciting projects. Let's build something amazing together!
        </p>

        <div className="contact-content">
          <form
            action="mailto:nithish10vln@gmail.com"
            method="post"
            encType="text/plain"
            className="contact-form"
          >
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <strong>Email : </strong>
              <a href="mailto:nithish10vln@gmail.com">nithish10vln@gmail.com</a>
            </div>
            <div className="info-item">
              <strong>Phone : </strong>
              <a href="tel:+919629258772">+91 96292 58772</a>
            </div>
            <div className="info-item">
              <strong>LinkedIn : </strong>
              <a
                href="https://linkedin.com/in/nikux30"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/nikux30
              </a>
            </div>
            <div className="info-item">
              <strong>GitHub : </strong>
              <a
                href="https://github.com/nikux30"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/nikux30
              </a>
            </div>

            <div className="social-icons">
              <a
                href="https://linkedin.com/in/nikux30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="linkedinIcon.png" alt="LinkedIn" />
              </a>
              <a href="mailto:nithish10vln@gmail.com">
                <img src="emailIcon.png" alt="Email" />
              </a>
              <a
                href="https://github.com/nikux30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="githubIcon.png" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="rights">
          @2025 Nithish Kumar S | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;
