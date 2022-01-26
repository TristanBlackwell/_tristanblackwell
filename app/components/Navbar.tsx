import { useState } from "react";
import { useLocation, Link } from "remix";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

const navItems = [
  {
    name: "about",
    location: "/#about",
  },
  {
    name: "experience",
    location: "/#experience",
  },
  {
    name: "projects",
    location: "/#projects",
  },
  {
    name: "contact",
    location: "/#contact",
  },
  {
    name: "blog",
    location: "/blog",
  },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const loc = useLocation();

  const navigateTo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    location: string
  ) => {
    // if we are on the index page then use scrollIntoView otherwise allow
    // browser to route
    if (location.startsWith("/#") && loc.pathname === "/") {
      e.preventDefault();
      const target = document.getElementById(location.substring(2));
      target?.scrollIntoView({ behavior: "smooth" });
      target?.focus();
      setNavOpen(false);
    } else if (location.startsWith("/#")) {
      // If we're on another page, let it paint then scroll to element
      setTimeout(() => {
        const target = document.getElementById(location.substring(2));
        target?.scrollIntoView({ behavior: "smooth" });
        target?.focus();
        setNavOpen(false);
      }, 500);
    }
  };

  return (
    <div>
      <nav className="flex flex-row p-8 pb-24">
        <div className="mr-20">
          <p className="text-xl font-bold">Logo</p>
        </div>
        <menu className="pt-2 md:hidden">
          <ul className="flex flex-row">
            {navItems.map((nav) => (
              <li key={nav.name} className="navItem">
                <Link
                  to={nav.location}
                  className="navItemLink"
                  prefetch="intent"
                  onClick={(e) => navigateTo(e, nav.location)}
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-duration="2000"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </menu>
        <div className="flex flex-1 " />
        <div>
          {/* <button className="btn md:hidden 2xl:block">Resume</button> */}
          {!navOpen && (
            <MenuIcon
              className="text-gold cursor-pointer md:block 2xl:hidden w-8"
              onClick={() => setNavOpen(!navOpen)}
            />
          )}
        </div>
      </nav>
      <Transition
        as="aside"
        show={navOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="h-screen w-64 fixed right-0 top-0 bg-slight-blue z-50"
        tabIndex={navOpen ? 1 : -1}
        aria-hidden={!navOpen}
      >
        <XIcon
          className="text-gold cursor-pointer md:block 2xl:hidden w-8 absolute top-8 right-8"
          onClick={() => setNavOpen(!navOpen)}
        />
        <ul className="mt-32 ml-12">
          {navItems.map((nav) => (
            <li key={nav.name + "_mobile"} className="navItem mt-8 max-w-max">
              <Link
                to={nav.location}
                prefetch="intent"
                className="navItemLink text-lg text-soft-white tracking-widest"
                onClick={(e) => navigateTo(e, nav.location)}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button className="btn mt-12">Resume</button>
        </div>
      </Transition>
    </div>
  );
}
