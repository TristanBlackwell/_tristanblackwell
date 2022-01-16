export default function Navbar() {
  const scrollToView = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    location: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(location);
    target?.scrollIntoView({ behavior: "smooth" });
    target?.focus();
  };

  return (
    <div>
      <nav className="flex flex-row p-8 pb-24">
        <div className="mr-20">
          <p className="text-xl font-bold">Logo</p>
        </div>
        <menu className="pt-2">
          <ul className="flex flex-row">
            <li className="navItem">
              <a
                href="#about"
                className="navItemLink"
                onClick={(e) => scrollToView(e, "about")}
              >
                About
              </a>
            </li>
            <li className="navItem">
              <a
                href="#experience"
                className="navItemLink"
                onClick={(e) => scrollToView(e, "experience")}
              >
                Experience
              </a>
            </li>
            <li className="navItem">
              <a
                href="#projects"
                className="navItemLink"
                onClick={(e) => scrollToView(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="navItem">
              <a
                href="#contact"
                className="navItemLink"
                onClick={(e) => scrollToView(e, "contact")}
              >
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="/blog" className="navItemLink">
                Blog
              </a>
            </li>
          </ul>
        </menu>
        <div className="flex flex-1" />
        <div className="">
          <button className="btn focus:">Resume</button>
        </div>
      </nav>
    </div>
  );
}
