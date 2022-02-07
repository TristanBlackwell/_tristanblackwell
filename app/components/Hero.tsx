import { Link } from "remix";

export default function Hero() {
  return (
    <div className="mt-16 flex flex-row justify-between md:mt-2 lg:flex-col">
      <div>
        <h1
          className="font-archivo text-soft-white xs:text-center text-4xl font-bold tracking-wider sm:text-2xl md:text-3xl"
          data-aos="fade-right"
        >
          Tristan Blackwell.
        </h1>
        <br />
        <h1
          className="font-archivo text-soft-white xs:text-center text-4xl font-bold tracking-wider sm:text-2xl md:text-3xl"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Building on the web.
          <span className="pl-3 text-2xl tracking-wide sm:pl-1">(Mostly)</span>
        </h1>
      </div>
      <div className="border-gold xs:text-center max-w-xs border-t-2 px-2 pt-4 lg:ml-0 lg:mt-8">
        <p data-aos="fade-down">
          I am a software engineer based in Oxford, England. I focus on the web
          but work in other areas too. Right now I’m helping build cloud
          communications for businesses at{" "}
          <Link
            to="https://zing.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-gold decoration-gold outline-gold font-bold hover:underline"
          >
            Zing
          </Link>
        </p>
      </div>
    </div>
  );
}
