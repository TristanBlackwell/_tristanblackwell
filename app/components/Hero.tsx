import { Link } from "remix";

export default function Hero() {
  return (
    <div className="flex flex-row mt-16 lg:flex-col md:mt-2">
      <div>
        <h1
          className="text-4xl font-archivo tracking-wider font-bold text-soft-white md:text-3xl sm:text-2xl xs:text-center"
          data-aos="fade-right"
        >
          Tristan Blackwell.
        </h1>
        <br />
        <h1
          className="text-4xl font-archivo tracking-wider font-bold text-soft-white md:text-3xl sm:text-2xl xs:text-center"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Building on the web.
          <span className="text-2xl tracking-wide pl-3 sm:pl-1">(Mostly)</span>
        </h1>
      </div>
      <div className="border-t-2 border-gold ml-32 pt-4 px-2 max-w-xs lg:ml-0 lg:mt-8 xs:text-center">
        <p data-aos="fade-down">
          I am a software engineer based in Oxford, England. I focus on the web
          but work in other areas too. Right now I’m helping build cloud
          communications for businesses at{" "}
          <Link
            to="https://zing.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-gold font-bold hover:underline decoration-gold outline-gold"
          >
            Zing
          </Link>
        </p>
      </div>
    </div>
  );
}
