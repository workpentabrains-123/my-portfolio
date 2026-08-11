import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <div className="sec-head reveal">
        <div className="sec-eyebrow">Active work</div>
        <h2>Projects</h2>
        <p className="sec-desc">
          Real repos, real requests — the exact stack I'm learning, applied
          for real.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card reveal"
         onClick={() => {
  console.log(project.link);
  if (project.link) {
    window.open(project.link, "_blank");
  }
}}
          style={{ cursor: project.link ? "pointer" : "default" }}
        >
          <div className="project-top">
            {/* <div className="project-title">
              {project.title}
            </div> */<div className={`project-title ${project.link ? "project-title--link" : ""}`}>
  {project.title}
</div>}

            <div className="project-tag">{project.tag}</div>
          </div>

          <p className="project-desc">{project.description}</p>

          <div className="repo-row">
            {project.repos.map((repo, i) => (
              <div key={i} className="repo-chip">
                {repo}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

