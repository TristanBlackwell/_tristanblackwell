export default function Hero() {
  return (
    <div className="flex flex-row">
      <div>
        <h1 className="text-4xl font-archivo tracking-wider font-bold">
          Tristan Blackwell.
        </h1>
        <br />
        <h1 className="text-4xl font-archivo tracking-wider font-bold">
          Building on the web.
          <span className="text-2xl tracking-wide pl-3">(Mostly)</span>
        </h1>
      </div>
      <div className="border-t-2 border-gold ml-32 pt-4 pr-4 max-w-xs">
        <p>
          I am a software engineer based in Oxford, England. I focus on the web
          but work in other areas too. Right now I’m helping build cloud
          communications for businesses at{" "}
          <a
            href="https://zing.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-gold font-bold hover:underline decoration-gold"
          >
            Zing
          </a>
        </p>
      </div>
    </div>
  );
}
