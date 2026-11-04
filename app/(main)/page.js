
import Link from "next/link";

const cocktails = [
  {
    name: "The Art of the Pour",
    image: "/images/cocktail-1.jpg",
    description: "An exceptional cocktail experience, every time.",
  },
  {
    name: "Crafted to Perfection",
    image: "/images/cocktail-2.jpg",
    description: "A collection of over 60 cocktails to explore.",
  },
  {
    name: "Moments Worth Celebrating",
    image: "/images/cocktail-3.jpg",
    description: "Beautifully served drinks for memorable occasions.",
  },
  {
    name: "Effortless Sophistication",
    image: "/images/cocktail-4.jpg",
    description: "Premium service without the usual waiting.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f8f4ed] text-[#211619]">
      {/* HERO */}
      <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden bg-[#160d10] text-center text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/cocktail-1.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/luxe-pour-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#160d10]/75 via-[#160d10]/45 to-[#160d10]/90" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-10 pt-32">
          <p className="mb-7 text-[10px] uppercase tracking-[0.45em] text-[#e1c28c] sm:text-xs">
            Premium Automated Cocktail Bar · Accra
          </p>

          <h1 className="font-serif text-5xl leading-[1.1] sm:text-6xl md:text-8xl">
            An Experience
            <br />
            Worth <span className="italic text-[#d6b77d]">Savouring.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Elevate your celebrations with over 60 craft cocktails,
            expertly poured in just 15 seconds. Exceptional drinks.
            Effortless service. Absolute budget control.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-[#c6a46b] px-9 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#160d10] transition hover:bg-[#e0c18a]"
            >
              Book The Experience
            </Link>

            <Link
              href="/about"
              className="border border-white/40 px-9 py-4 text-[10px] uppercase tracking-[0.22em] transition hover:border-[#d6b77d] hover:text-[#d6b77d]"
            >
              Discover Our Story
            </Link>
          </div>

          <p className="mt-16 text-[9px] uppercase tracking-[0.35em] text-white/45">
            Weddings · Birthdays · Corporate · Private Events
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 text-center sm:py-32">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
          The Art of Effortless Entertaining
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          More than a bar.
          <br />
          <span className="italic text-[#a17d45]">
            A statement of sophistication.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#75686a] sm:text-base">
          The Luxe Pour transforms the traditional bar experience
          through intelligent automation and premium cocktail
          craftsmanship. We bring speed, precision and sophistication
          to every occasion, leaving you free to enjoy the moment.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#211619] px-6 py-20 text-[#f8f4ed]">
        <div className="mx-auto grid max-w-7xl gap-12 text-center md:grid-cols-3">
          {[
            {
              number: "60+",
              title: "Cocktail Selection",
              description:
                "A diverse collection of craft cocktails for every taste and occasion.",
            },
            {
              number: "15s",
              title: "Precision Pouring",
              description:
                "Enjoy consistent cocktail service with remarkably fast preparation.",
            },
            {
              number: "100%",
              title: "Budget Control",
              description:
                "Plan your bar experience with greater cost predictability and control.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-serif text-5xl text-[#d6b77d] sm:text-6xl">
                {item.number}
              </p>
              <h3 className="mt-5 text-xs uppercase tracking-[0.2em]">
                {item.title}
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COCKTAIL SHOWCASE */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
                A Taste of Excellence
              </p>
              <h2 className="mt-5 font-serif text-4xl sm:text-6xl">
                The Pour Collection
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#75686a]">
              From timeless classics to contemporary favourites,
              discover a cocktail experience designed to impress.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cocktails.map((cocktail) => (
              <article key={cocktail.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-[#e7ded2]">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl">
                  {cocktail.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#75686a]">
                  {cocktail.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-[#eee6db] px-6 py-24 text-center sm:py-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
          Every Occasion, Elevated
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          Making exceptional moments even more memorable.
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Weddings", "Birthdays", "Corporate Events", "Private Celebrations"].map(
            (event) => (
              <span
                key={event}
                className="border border-[#b9a992] px-6 py-4 text-[10px] uppercase tracking-[0.15em]"
              >
                {event}
              </span>
            )
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#160d10] px-6 py-24 text-center text-white sm:py-32">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6b77d]">
          Your Occasion Deserves More
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl sm:text-6xl">
          Let&apos;s Make It
          <span className="italic text-[#d6b77d]"> Unforgettable.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/55">
          Bring the extraordinary cocktail experience to your next
          celebration.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-block bg-[#c6a46b] px-10 py-5 text-[10px] uppercase tracking-[0.22em] text-[#160d10] transition hover:bg-[#e0c18a]"
        >
          Enquire About Your Event
        </Link>
      </section>
    </main>
  );
}
