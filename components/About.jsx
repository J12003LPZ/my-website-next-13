export default function About() {
  return (
    <section className="container about" id="about">
      <div className="main-title">
        <h2>
          About <span>me</span>
          <span className="bg-text">my stats</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p>
            I have experience in front-end and back-end technologies, database
            creation and maintenance, and website design. I am a trained and
            experienced web developer. Strong analytical and creative abilities.
            Dedicated to the team and meticulous. <br />
            <br />
            My enthusiasm for both software design and software code development
            led me to pursue this career. Since I was a young child, I have been
            fascinated by how things function, and I have before and after in my
            life explained the wonderful world of web development.
          </p>
        </div>
        <div className="right-about">
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">25+</p>
              <p className="small-text">
                Projects <br />
                Completed
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">3+</p>
              <p className="small-text">
                Years of <br />
                experience
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">25+</p>
              <p className="small-text">
                Happy <br />
                Clients
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">25+</p>
              <p className="small-text">
                Customer <br />
                reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Education</p>
          <h5>Associate of Computer Science</h5>
          <p>Instituto Politecnico La Esperanza</p>

          <h5>Bachelor of Computer Science</h5>
          <p>New York City College of Technology</p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">WORK EXPERIENCE</p>
          <h5>
            NYC Departament of Records, New York, NY 10007
            <span>- Front End Developer</span>
          </h5>

          <h5>
            Italian American Civil Rights League, Brooklyn, NY 11239
            <span>- Front End Developer</span>
          </h5>

          <h5>
            New York Archival Society, New York, NY
            <span>- Web Content Creator/Full Stack Developer</span>
          </h5>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Technologies Skills</p>
          <h5>Languages:</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Bootstrap 5</li>
            <li>Tailwind CSS</li>
            <li>Express JS</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>

          <h5>Software:</h5>
          <ul>
            <li>Figma</li>
            <li>Git</li>
            <li>Github</li>
            <li>WordPress</li>
            <li>Shoptify</li>
            <li>Squarespace</li>
            <li>Microsoft Office (Word, PowerPoint, Excel)</li>
            <li>Node JS</li>
            <li>REST</li>
            <li>REST API</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Intellectual Skills</p>
          <ul>
            <li>🟢 Problem-Solving</li>
            <br />
            <li>🟢 Leadership/relationship/team building</li>
            <br />
            <li>
              🟢 Research, development, and project management critical and
              analytic thinking.
            </li>
            <br />
            <li>🟢 Bilingual (Spanish and English)</li>
          </ul>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Honors And Awards</p>
          <h5>Member of</h5>
          <p>National Honor Society</p>
          <h5>Award</h5>
          <p>President's Education Awards Program</p>
        </div>
      </div>
    </section>
  );
}
