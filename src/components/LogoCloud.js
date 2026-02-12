import Image from "next/image";

const LogoCloud = () => {
  const logos = [
    { title: "Open AI", src: "/openai.webp" },
    { title: "Granola", src: "/granola.webp" },
    { title: "Character AI", src: "/characterai.webp" },
    { title: "Hello Patient", src: "/hello-patient.webp" },
    { title: "Portola", src: "/portola.webp" },
    { title: "Oracle", src: "/oracle.webp" },
  ];
  return (
    <section className="py-5">
      <h2 className="mx-auto max-w-xl text-center text-lg font-medium text-neutral-600 dark:text-neutral-400">
        Trusted by modern operators across industries.
        <br />
        <span className="text-neutral-400">
          From pilot to scale without chaos.
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3  max-w-3xl mx-auto">
        {logos.map((logo, index) => (
          <Image
            key={logo.title}
            alt={logo.title}
            src={logo.src}
            width={100}
            height={100}
            className="size-20 object-contain mx-auto"
          />
        ))}
      </div>
    </section>
  );
};

export { LogoCloud };
