import { useEffect, useRef } from "react";

// Lines the terminal types out, in order.
// prompt: shown before the text (e.g. "$ "), dim: styled muted, cursor: shows blinking cursor instead of text
const TERMINAL_LINES = [
  { prompt: "$ ", text: "who am i" },
  { prompt: "", text: "suseedhar — full-stack developer in training", dim: true },
  { prompt: "$ ", text: "what i'm doing" },
  {
    prompt: "",
    text: "building SATS · testing codes . shipping daily .  ",
    dim: true,
  },
  { prompt: "$ ", text: "_", cursor: true },
];

function Hero() {
  const termRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return; // avoid double-typing in StrictMode
    hasRun.current = true;

    const container = termRef.current;

    function typeLine(el, text, speed) {
      return new Promise((resolve) => {
        let i = 0;
        el.style.opacity = 1;
        const iv = setInterval(() => {
          el.textContent += text[i];
          i++;
          if (i >= text.length) {
            clearInterval(iv);
            resolve();
          }
        }, speed);
      });
    }

    async function run() {
      for (const line of TERMINAL_LINES) {
        const div = document.createElement("div");
        div.className = "line";
        if (line.dim) div.style.color = "var(--muted)";
        container.appendChild(div);

        if (line.cursor) {
          div.style.opacity = 1;
          const span = document.createElement("span");
          span.className = "cursor";
          div.appendChild(span);
          break;
        }

        const full = line.prompt + line.text;
        await new Promise((r) => setTimeout(r, 150));
        await typeLine(div, full, line.prompt ? 45 : 22);
        await new Promise((r) => setTimeout(r, 220));
      }
    }
    run();
  }, []);

  return (
    <section className="hero">
      <div className="eyebrow">Currently testing codes</div>

      <h1>
        Suseendhar builds <span className="grad">full-stack</span>
        <br />
        things that actually ship.
      </h1>

      <p className="hero-sub">
        Frontend developer in training, working through the full stack one
        layer at a time — React on the surface, APIs underneath, MongoDB at
        the bottom. Right now, live in production on the SATS project.
      </p>

      <div className="terminal">
        <div className="term-bar">
          <div className="dot r"></div>
          <div className="dot y"></div>
          <div className="dot g"></div>
          <div className="term-title">suseendhar@dev</div>
        </div>
        <div className="term-body" ref={termRef}></div>
      </div>

      <div className="hero-ctas">
        <a href="#projects" className="btn btn-primary">
          View SATS project →
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
