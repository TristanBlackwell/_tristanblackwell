import Me from "../images/me.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-row mt-40 md:flex-col md:mt-28">
        <div className="border-t-2 border-gold pt-4 px-4 max-w-xl">
          <p data-aos="fade-down" data-aos-once="true">
            Hi, I’m Tristan 👋 I’m a developer who enjoys solving challenging
            problems with clean and simple solutions. With an interest in
            innovative technologies, I always find myself busy trying out the
            latest thing and{" "}
            <a
              href="https://zing.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-gold font-bold hover:underline decoration-gold outline-gold tracking-wide"
            >
              getting involved wherever I can.
            </a>
            <br />
            <br />
            Currently my focus in mostly on building out communication solutions
            for clients at Zing using the Twilio platform and similar services
            in this space.
            <br />
            <br /> When I’m not working on coding, at work or in my own time, I
            like to train at the gym or a fairly new activity to me is learning
            a second language, japanese!
          </p>
        </div>
        <div className="flex justify-center w-full lg:ml-6 md:mt-5 md:ml-0">
          <img src={Me} alt="Me!" className="object-contain" />
        </div>
      </div>
      <div className="mt-12">
        <ul className="flex flex-row items-start justify-items-start justify-around styledList md:flex-col md:items-center">
          <li className="md:mr-12">
            <span className="absolute mt-2 font-bold tracking-wider text-soft-white">
              Typescript
            </span>
          </li>
          <li className="md:mr-12">
            <span className="absolute mt-2 font-bold tracking-wider text-soft-white">
              React
            </span>
          </li>
          <li className="md:mr-12">
            <span className="absolute mt-2 font-bold tracking-wider text-soft-white">
              Node.js
            </span>
          </li>
          <li className="md:mr-12">
            <span className="absolute mt-2 font-bold tracking-wider text-soft-white">
              C#
            </span>
          </li>
          <li className="md:mr-12">
            <span className="absolute mt-2 font-bold tracking-wider text-soft-white">
              Twilio
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
