import { Links, LiveReload, Meta, Outlet, Scripts } from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/tailwind.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "~/components/Navbar";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/aos@next/dist/aos.css",
    },
    {
      rel: "script",
      href: "https://unpkg.com/aos@next/dist/aos.js",
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Tristan Blackwell" };
};

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-dark-blue">
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <Navbar />

        <Outlet />
        <footer className="mt-20 flex justify-center py-5">
          <a
            href="https://github.com/TristanBlackwell/tristanblackwellv1"
            target="_blank"
            rel="noreferrer"
            className="outline-gold focus:text-gold"
          >
            <p className="hover:text-gold text-sm font-extralight tracking-wide transition-colors">
              Handcrafted by Tristan Blackwell
            </p>
          </a>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}
