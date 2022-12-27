import Link from "next/link";
import { use } from "react";
async function getProjects() {
  return await (
    await fetch("https://mywebsite-projects-api.herokuapp.com/projects/")
  ).json();
}

export default function Portfolio() {
  const allProjects = use(getProjects());
  return (
    <section className="container" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        {allProjects.map((project) => {
          return (
            <div className="portfolio-item" key={project.id}>
              <div className="image">
                <img
                  src={project.project_image}
                  alt={project.name}
                  width="700"
                  height="466"
                  className="img-fluid"
                />
              </div>
              <div className="hover-items">
                <h3 style={{ textAlign: "center" }}>{project.name}</h3>
                <div className="icons">
                  <Link
                    href={project.project_url}
                    className="icon"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      width="30"
                      style={{ marginLeft: "5px" }}
                      viewBox="0 0 384 512"
                    >
                      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
