import "./About.css";

const About = () => {
  return (
    <div id="About" className="abt ">
      <h2>ABOUT ME :)</h2>
      <div className="abtcnt">
        <h3>Hello there..</h3>
        <p>
          &emsp;&emsp; I am Nithish, a passionate Computer Science and
          Engineering graduate with a strong interest in Artificial
          Intelligence, Machine Learning, and Web Development. My journey in
          technology is fueled by curiosity and a continuous drive to learn, as
          I constantly explore new avenues to enhance my skills. <br />
          <br />
          &emsp;&emsp; I have hands-on experience with a variety of technologies
          including Java, SQL, JavaScript, React, Node.js, and Python. With a
          particular focus on AI, I leverage AI tools to boost productivity and
          creativity — a field that never fails to inspire and fascinate me.
          <br />
          <br />
        </p>
      </div>

      <div className="secskill">
        <h2 id="bl">Skills</h2>
        <div className="skill">
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="java.png" alt="" />
            </div>
            Java
          </div>
          {/* -------------------skill1------------------------ 
          <div className="cir">
            <div className="skill-cir">
              <img src="c.png" alt="" />
            </div>
            C
          </div> */}
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="python.png" alt="" />
            </div>
            Python
          </div>{" "}
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="html.png" alt="" />
            </div>
            HTML
          </div>
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="css.png" alt="" />
            </div>
            CSS
          </div>
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="js.png" alt="" />
            </div>
            Javascript
          </div>
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="react.png" alt="" />
            </div>
            React
          </div>
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="sql.png" alt="" />
            </div>
            SQL
          </div>
          {/* -------------------skill1------------------------ */}
          <div className="cir">
            <div className="skill-cir">
              <img src="git.png" alt="" />
            </div>
            Git
          </div>{" "}
          {/* -------------------skill1------------------------
          <div className="cir">
            <div className="skill-cir">
              <img src="figma.png" alt="" />
            </div>
            Figma
          </div> */}
        </div>
      </div>
      <div className="abtcnt">
        <h2 id="bl">Education and Experience</h2>
        <div className="timeline">
          {/* ------------------------------------------------exp1 -----------------------------------------------------------*/}
          <div className="pack">
            <div className="timeline-dot">
              <div className="tlcnt">
                <div>
                  <h3>Java Full Stack Development</h3>
                  <h4>Jspiders, Marathahalli</h4>
                  <h4>Jun-Present(2025)</h4>
                  <p>
                    Learned in Depth about technologies like Java, SQL, HTML,
                    CSS, Javascript
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------exp1 -----------------------------------------------------------*/}
          <div className="pack">
            <div className="timeline-dot">
              <div className="tlcnt left">
                <div>
                  <h3>Java Full Stack Intern</h3>
                  <h4>Pumo Technovations, Chennai</h4>
                  <h4>Jul-Aug 2024</h4>
                  <p>
                    Worked on a responsive Web Development Projects under the
                    guidance of MR.Raghuram
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------exp1 -----------------------------------------------------------*/}
          <div className="pack">
            <div className="timeline-dot">
              <div className="tlcnt">
                <div>
                  <h3>Bachelor of Engineering (CSE)</h3>
                  <h4>University College of Engineering, Ariyalur</h4>
                  <h4>2021-2025</h4>
                  <p>
                    Gained strong foundations in programming, DSA, Databases,
                    OS, and Computer Networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------exp1---------------------------------------------------------- */}
          {/* <div className="pack">
            <div className="timeline-dot">
              <div className="tlcnt left">
                <div>
                  <h3>Java Full Stack Development</h3>
                  <h4>June-Present(2025)</h4>
                  <h4>Jspiders, Marathahalli</h4>
                  <div>
                    Learned in Depth about technologies like Java, SQL, HTML,
                    CSS, Javascript
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* ------------------------------------------------exp1 -----------------------------------------------------------*/}
          {/* <div className="pack">
            <div className="timeline-dot">
              <div className="tlcnt">
                <div>
                  <h3>Java Full Stack Development</h3>
                  <h4>June-Present(2025)</h4>
                  <h4>Jspiders, Marathahalli</h4>
                  <div>
                    Learned in Depth about technologies like Java, SQL, HTML,
                    CSS, Javascript
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
