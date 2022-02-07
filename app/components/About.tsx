import { Link } from "remix";
import Me from "../images/me.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="mt-40 flex flex-row md:mt-28 md:flex-col">
        <div className="border-gold border-t-2 px-4 pt-4">
          <p data-aos="fade-up">
            Hi, I’m Tristan 👋 I’m a developer who enjoys solving challenging
            problems with clean and simple solutions. With an interest in
            innovative technologies, I always find myself busy trying out the
            latest thing and{" "}
            <Link
              to="https://zing.dev/"
              prefetch="intent"
              target="_blank"
              rel="noreferrer"
              className="text-gold decoration-gold outline-gold font-bold tracking-wide hover:underline"
            >
              getting involved wherever I can.
            </Link>
            <br />
            <br />
            Currently my focus in mostly on building out communication solutions
            for clients at Zing using the Twilio platform and similar services
            in this space.
            <br />
            <br /> When I’m not working on coding, at work or in my own time, I
            like to train at the gym and persue other interests. A fairly new
            activity to me is learning a second language, japanese!
          </p>
        </div>
        <div className="flex w-full justify-end md:mt-5 md:ml-0 md:justify-center lg:ml-6">
          <img src={Me} alt="Me!" className="object-contain" />
        </div>
      </div>
      <div className="mt-12">
        <ul className="styledList flex flex-row items-start justify-around justify-items-start md:flex-col md:items-center">
          <li className="md:mr-12" data-aos="fade-left">
            <span className="text-soft-white absolute mt-2 font-bold tracking-wider">
              Typescript
            </span>
          </li>
          <li className="md:mr-12" data-aos="fade-left" data-aos-delay="250">
            <span className="text-soft-white absolute mt-2 font-bold tracking-wider">
              React
            </span>
          </li>
          <li className="md:mr-12" data-aos="fade-left" data-aos-delay="500">
            <span className="text-soft-white absolute mt-2 font-bold tracking-wider">
              Node.js
            </span>
          </li>
          <li className="md:mr-12" data-aos="fade-left" data-aos-delay="750">
            <span className="text-soft-white absolute mt-2 font-bold tracking-wider">
              C#
            </span>
          </li>
          <li className="md:mr-12" data-aos="fade-left" data-aos-delay="1000">
            <span className="text-soft-white absolute mt-2 font-bold tracking-wider">
              Twilio
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
