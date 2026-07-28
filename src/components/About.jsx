import profilePic from "../assets/profile.jpg";

function About() {
  return (
    <section id="about">
      <div className="about-layout reveal">
        <div className="about-photo-wrap">
          <img src={profilePic} alt="Suseendhar T" className="about-photo" />
        </div>

        <div className="sec-head">
          <div className="sec-eyebrow">// About</div>
          <h2>Learning it properly, not skipping ahead</h2>
          <p className="sec-desc">
            I'm an aspiring full-stack developer working through HTML, CSS,
            JavaScript and React, currently focused on APIs before moving
            into Node.js, Express and MongoDB. Everything I learn gets
            applied directly on the SATS project — no tutorial left
            untested.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
