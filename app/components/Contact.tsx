import { Link } from "remix";

export default function Contact() {
  return (
    <section id="contact">
      <div className="m-auto mt-20 max-w-md">
        <div>
          <h2 className="font-archivo text-soft-white text-center text-3xl font-bold tracking-wide">
            Get in touch
          </h2>
        </div>
        <div className="border-gold m-auto mt-2 w-48 border-t-2"></div>
        <p className="mt-8 text-center">
          I’m always open for new messages 👇 Send me something and I’ll get
          back to you as soon as possible.
        </p>
        <div className=" mt-8 flex justify-around">
          <Link
            to="mailto:tristanblackwell@hotmail.co.uk"
            className="btn  m-auto py-2"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
