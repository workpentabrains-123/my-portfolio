import skills from "../data/skills";

const STATUS_LABEL = {
  done: "Done",
  active: "done",
  upcoming: "Next up",
};

function Skills() {
  return (
    <section id="skills">
      <div className="sec-head reveal">
        <div className="sec-eyebrow">Toolkit</div>
        <h2>What's actually in use</h2>
        <p className="sec-desc">
          Tracked honestly — done means built with it, not just read about
          it.
        </p>
      </div>

      <div className="skills-grid reveal">
        {skills.map((skill) => (
          <div key={skill.name} className={`skill-card status-${skill.status}`}>
            <h3>{skill.name}</h3>
            <span className="skill-status">{STATUS_LABEL[skill.status]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
