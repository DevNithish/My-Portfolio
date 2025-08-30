import "./Projects.css";

const Projects = () => {
  return (
    <div id="Projects">
      <h2>Projects</h2>
      <div className="all-proj">
        <div className="proj-card">
          <img src="trading.png" alt="" />
          <div className="cont">
            <h3>Signal Based Trading Algorithm using Machine Learning</h3>
            <p>
              Developed an <b>AI-powered trading indicator</b> that helps users
              make informed stock market decisions by leveraging machine
              learning techniques. The system combines a{" "}
              <b>1D CNN and LightGBM</b> to generate predictions on stock
              trends, while an interactive Streamlit-based UI enables seamless
              visualization of insights and model outputs.
            </p>
            <div className="stack">
              <span>Python</span>
              <span>Streamlit</span>
              <span>XGBoost</span>
            </div>
          </div>
        </div>
        <div className="proj-card" id="left">
          <img src="weather.png" alt="" />
          <div className="cont">
            <h3>Weather Forecasting using Random Forest</h3>
            <p>
              Developed a full-stack <b>Weather Forecasting Web App</b> using
              Random Forest model to predict weather conditions based on inputs
              from <b>Visual Crossing API</b>. Developed React frontend with
              login and registration pages, a Express.js backend for secure user
              authentication and storing prediction histories, and a Flask API
              that serves the ML model. Logged-in users can make predictions,
              view their past forecasts, and manage their data through a
              dashboard.
            </p>
            <div className="stack">
              <span>React</span>
              <span>Python</span>
              <span>Express</span>
              <span>SQL Database</span>
              <span>Flask API</span>
            </div>
          </div>
        </div>
        <div className="proj-card">
          <img src="e-commerce.png" alt="" />
          <div className="cont">
            <h3>Static E-Commerce Web App Clone</h3>
            <p>
              Developed a static <b>single-page e-commerce web app</b> inspired
              by Flipkart, built using HTML, CSS, and Bootstrap. The application
              features a responsive design with product listings, categories,
              and a modern UI that mimics the look and feel of a real online
              shopping platform.
            </p>
            <div className="stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
