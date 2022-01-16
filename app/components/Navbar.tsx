export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row p-8 pb-24">
        <div className="mr-20">
          <p className="text-xl font-bold">Logo</p>
        </div>
        <menu className="pt-2">
          <ul className="flex flex-row">
            <li className="navItem">
              <a href="#about">About</a>
            </li>
            <li className="navItem">
              <a href="#experience">Experience</a>
            </li>
            <li className="navItem">
              <a href="#projects">Projects</a>
            </li>
            <li className="navItem">
              <a href="#contact">Contact</a>
            </li>
            <li className="navItem">Blog</li>
          </ul>
        </menu>
        <div className="flex flex-1" />
        <div className="">
          <button className="btn">Resume</button>
        </div>
      </nav>
    </div>
  );
}
