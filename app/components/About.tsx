import Me from "../images/me.jpg";

export default function About() {
  return (
    <section>
      <div className="flex flex-row justify-between mt-32">
        <div className="border-t-2 border-gold pt-4 px-4 max-w-xl">
          Hi, I’m Tristan 👋 I’m a developer who enjoys solving challenging
          problems with clean and simple solutions. With an interest in
          innovative technologies, I always find myself busy trying out the
          latest thing.
          <br />
          <br />
          Currently my focus in mostly on building out communication solutions
          for clients at Zing using the Twilio platform and similar services in
          this space.
          <br />
          <br /> When I’m not in front of a computer screen you’ll probably find
          me down the gym.
        </div>
        <div className="">
          <img src={Me} alt="Me!" />
        </div>
      </div>
      <div className="mt-12">
        <ul
          id="skillList"
          className="flex flex-row items-start justify-items-start justify-around  "
        >
          <li>
            <span className="absolute mt-6 font-bold tracking-wider text-soft-white">
              Typescript
            </span>
          </li>
          <li>
            <span className="absolute mt-6 font-bold tracking-wider text-soft-white">
              React
            </span>
          </li>
          <li>
            <span className="absolute mt-6 font-bold tracking-wider text-soft-white">
              Node.js
            </span>
          </li>
          <li>
            <span className="absolute mt-6 font-bold tracking-wider text-soft-white">
              C#
            </span>
          </li>
          <li>
            <span className="absolute mt-6 font-bold tracking-wider text-soft-white">
              Twilio
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
