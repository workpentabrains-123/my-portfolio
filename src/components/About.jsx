import profilePic from "../assets/profile.jpg";

function About() {
  return (
    <section id="about">
      <div className="about-layout reveal">
        <div className="about-photo-wrap">
          <img src={profilePic} alt="Suseendhar T" className="about-photo" />
        </div>

        <div className="sec-head">
          <div className="sec-eyebrow">About</div>
          <h2>Full-stack, layer by layer</h2>
          <p className="sec-desc">
            I build with React on the frontend and connect it to real APIs on 
the backend — currently deep in REST API integration, with Node.js, 
Express and MongoDB next in line. Every concept gets tested on a live 
project, SATS, not just in isolated exercises.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
