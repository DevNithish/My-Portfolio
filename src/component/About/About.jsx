import "./About.css";

const About = () => {
  const skills = [
    { name: "Java", icon: "java.png" },
    { name: "Python", icon: "python.png" },
    { name: "React", icon: "react.png" },
    { name: "HTML", icon: "html.png" },
    { name: "CSS", icon: "css.png" },
    { name: "Javascript", icon: "js.png" },
    { name: "SQL", icon: "sql.png" },
    { name: "Git", icon: "git.png" },
  ];

  const experiences = [
    {
      title: "Java Full Stack Development",
      company: "Jspiders, Marathahalli",
      period: "Jun-Present(2025)",
      description:
        "Learned in Depth about technologies like Java, SQL, HTML, CSS, Javascript ",
      details: [
        "Mastering Core Java concepts including OOPs, Collections, Multithreading, and Exception Handling",
        "Building robust backend systems with JDBC, Servlets, and Spring Framework",
        "Developing dynamic frontend applications using HTML5, CSS3, JavaScript, and React.js",
        "Database design and optimization with MySQL, Postgres and Oracle database, writing complex queries and stored procedures",
        "Version control with Git and collaborative development workflows",
      ],
      achievements: [
        "Completed 15+ hands-on projects including e-commerce applications and CRM systems",
        "Achieved 95%+ in all module assessments",
        "Leading a team project for a hospital management system",
      ],
    },
    {
      title: "Java Full Stack Intern",
      company: "Pumo Technovations, Chennai",
      period: "Jul-Aug 2024",
      description:
        "Worked on responsive Web Development Projects under the guidance of MR.Raghuram",
      details: [
        "Developed responsive web applications using React.js",
        "Worked with MySQL databases for data persistence and retrieval",
        "Participated in code reviews and daily stand-up meetings",
      ],
      achievements: [
        "Successfully delivered 3 client projects ahead of schedule",
        "Received 'Star Performer' award for exceptional code quality",
        "Reduced page load time by 40% through optimization techniques",
      ],
    },
    {
      title: "Bachelor of Engineering (CSE)",
      company: "University College of Engineering, Ariyalur",
      period: "2021-2025",
      description:
        "Gained strong foundations in programming, DSA, Databases, OS, and Computer Networks.",
      details: [
        "Overall CGPA: 7.8/10.0",
        "Core Courses: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering",
        "Advanced Topics: Artificial Intelligence, Machine Learning, Cloud Computing, Web Technologies",
        "Programming Languages: Java, Python, C, SQL",
        "Tools & Technologies: Git, Docker, MySQL, React, Node.js",
      ],
      achievements: [
        "Class Representative for 2 consecutive years",
        "Participated in 5+ technical workshops and hackathons",
        "Published research paper on 'AI in Healthcare Applications'",
        "Organized college tech fest with 500+ participants",
      ],
    },
  ];

  return (
    <div id="about" className="abt">
      <h2 className="section-title">ABOUT ME :)</h2>
      <div className="abt-content">
        <h3>Hello there..</h3>
        <p>
          I am Nithish Kumar, a passionate Computer Science and Engineering
          student with a strong inclination towards Full-Stack Development and
          Artificial Intelligence. My journey in technology is driven by an
          insatiable curiosity and a relentless pursuit of knowledge, constantly
          exploring emerging technologies to expand my skill set.
        </p>
        <p>
          With hands-on experience across the entire development stack - from
          Java-based backend systems to React-powered frontend applications - I
          thrive on building scalable, efficient, and user-friendly solutions.
          My particular fascination with AI drives me to integrate intelligent
          features into applications, enhancing user experiences through smart
          automation and data-driven insights.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new frameworks,
          contributing to open-source projects, or experimenting with AI tools
          to solve real-world problems. I believe in continuous learning and am
          always excited to take on challenges that push my boundaries.
        </p>
        
      </div>
      <div className="skills-section">
        <h2 className="section-subtitle">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-circle">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="abt-content">
        <h2 className="section-subtitle">Education and Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <h4>{exp.period}</h4>
                <p>{exp.description}</p>
                <ul>{exp.details.map((li,index)=>(
                  <li>{li}</li>
                ))}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="abt-content">
        <h3>My Philosophy</h3>
        <p>
          I believe that great software is built at the intersection of robust
          engineering and intuitive design. My approach combines technical
          excellence with user-centric thinking, ensuring that every line of
          code I write serves a purpose and enhances the overall experience.
        </p>
        <p>
          I'm particularly passionate about the potential of AI to transform how
          we interact with technology and am constantly exploring ways to
          integrate intelligent features into everyday applications. Whether
          it's through machine learning models or smart automation, I'm always
          looking for opportunities to make technology work smarter, not harder.
        </p>
      </div>
    </div>
  );
};

export default About;
