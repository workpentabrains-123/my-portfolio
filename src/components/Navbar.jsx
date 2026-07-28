import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  <img src={logo} alt="Susee Logo" className="logo-img" />
  <span>
    susee<span>.dev</span>
  </span>
</div>
      

      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
