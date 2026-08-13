function Contact() {
  return (
    <section id="contact">
      <div className="contact-panel reveal">
        <h2>Let's build something</h2>
        <p>
          Open to conversations about frontend work, API design, or just
          talking through the next step on the path.
        </p>

        <div className="contact-links">
          <a href="mailto:tsuseendhar@gmail.com" className="btn btn-ghost">
            Email me
          </a>
          <a
            href="https://github.com/workpentabrains-123"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suseendhar-t-a1261b283/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
