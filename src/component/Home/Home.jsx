import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="bdy">
      <div className="text">
        <h1 className="name">
          I'm <span>Nithish Kumar</span>
        </h1>
        <h3>Web Developer & AI Enthusiast</h3>
        <p>
          I'm a full-stack developer and AI Enthusiast. Always curious and
          driven by a passion for technology, I have dedicated myself to
          exploring the depths of various technologies. Reach out if you'd like
          to know more...!
        </p>
        <a href="mailto:nithish10vln@gmail.com">
          <button>Contact Me!</button>
        </a>
      </div>
      <img src="me.png" alt="Nithish Kumar - Web Developer" />
    </div>
  );
};

export default Home;
