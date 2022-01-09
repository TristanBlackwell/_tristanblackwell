export default function Contact() {
  return (
    <section>
      <div className=" w-96 m-auto mt-20">
        <div>
          <h2 className="font-archivo font-bold text-3xl tracking-wide text-center">
            Get in touch
          </h2>
        </div>
        <div className="border-t-2 border-gold w-48 m-auto mt-2"></div>
        <p className="text-center mt-8">
          I’m always open for new messages 👇 Send me something and I’ll get
          back to you as soon as possible.
        </p>
        <div className=" mt-8 flex justify-around">
          <a
            href="mailto:tristanblackwell@hotmail.co.uk"
            className="btn  m-auto py-2"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
