import { Links, LiveReload, Meta, Outlet, Scripts } from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/tailwind.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

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
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
