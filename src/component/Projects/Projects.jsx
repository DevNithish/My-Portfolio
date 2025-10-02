import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Signal Based Trading Algorithm using Machine Learning",
      description:
        "Developed an AI-powered trading indicator that helps users make informed stock market decisions by leveraging machine learning techniques. The system combines a 1D CNN and LightGBM to generate predictions on stock trends, while an interactive Streamlit-based UI enables seamless visualization of insights and model outputs.",
      image: "trading.png",
      stack: ["Python", "Streamlit", "XGBoost"],
      align: "right",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather Forecasting using Random Forest",
      description:
        "Developed a full-stack Weather Forecasting Web App using Random Forest model to predict weather conditions based on inputs from Visual Crossing API. Features React frontend with authentication, Express.js backend, and Flask API serving the ML model. Users can make predictions and view forecast history.",
      image: "weather.png",
      stack: ["React", "Python", "Express", "SQL Database", "Flask API"],
      align: "left",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Static E-Commerce Web App Clone",
      description:
        "Developed a static single-page e-commerce web app inspired by Flipkart, built using HTML, CSS, and Bootstrap. The application features a responsive design with product listings, categories, and a modern UI that mimics real online shopping platforms.",
      image: "e-commerce.png",
      stack: ["HTML", "CSS", "Bootstrap"],
      align: "right",
      demoLink: "#",
      codeLink: "#"
    },
  ];

  return (
    <div id="projects">
      {" "}
      {/* Changed to lowercase */}
      <h2 className="section-title">Projects</h2>
      <div className="all-proj">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`proj-card ${
              project.align === "left" ? "left-align" : ""
            }`}
          >
            <img src={project.image} alt={project.title} />
            <div className="cont">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.codeLink} className="code-link" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;