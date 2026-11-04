
import Link from "next/link";

export const metadata = {
  title: "Our Story | The Luxe Pour Accra",
  description:
    "Discover The Luxe Pour Accra, where intelligent automation meets premium cocktail experiences.",
};

export default function About() {
  return (
    <main className="bg-[#f8f4ed] text-[#211619]">
      {/* ABOUT HERO */}
      <section className="relative flex min-h-[65vh] items-center justify-center bg-[#160d10] px-6 pb-12 pt-36 text-center text-white">
        <div className="absolute inset-0 bg-[url('/images/cocktail-4.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160d10]/40 to-[#160d10]/90" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#d6b77d]">
            Our Story · Our Philosophy
          </p>

          <h1 className="mt-7 font-serif text-5xl sm:text-7xl">
            Redefining the
            <br />
            <span className="italic text-[#d6b77d]">Art of the Bar.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65">
            A new standard of cocktail entertainment, created for
            those who appreciate the finer details.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
            The Luxe Pour Accra
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            Where innovation meets hospitality.
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-8 text-[#75686a]">
            <p>
              We believe exceptional events deserve an equally
              exceptional bar experience.
            </p>
            <p>
              The Luxe Pour brings together intelligent cocktail
              automation and the sophistication of premium
              hospitality to create a bar experience that is
              efficient, consistent and memorable.
            </p>
            <p>
              With over 60 cocktail options and drinks poured in
              approximately 15 seconds, we help event hosts deliver
              more while keeping service seamless and budgets
              predictable.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/cocktail-2.jpg"
            alt="Premium cocktail experience"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-5 -left-5 border border-[#c6a46b] bg-[#f8f4ed] px-7 py-5 sm:px-10">
            <p className="font-serif text-3xl text-[#a17d45]">15s</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em]">
              Precision Pouring
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#211619] px-6 py-24 text-center text-white sm:py-32">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6b77d]">
          What Sets Us Apart
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl sm:text-6xl">
          The luxury of a seamless experience.
        </h2>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-3">
          {[
            {
              title: "Consistency",
              description:
                "Every pour is designed to deliver a consistent cocktail experience.",
            },
            {
              title: "Efficiency",
              description:
                "Intelligent automation helps minimise waiting and keep service moving.",
            },
            {
              title: "Control",
              description:
                "Enjoy greater visibility and predictability over your event bar budget.",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="mx-auto mb-6 h-px w-12 bg-[#c6a46b]" />
              <h3 className="font-serif text-3xl text-[#d6b77d]">
                {item.title}
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 py-24 text-center sm:py-32">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
          Experience The Difference
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl sm:text-6xl">
          Exceptional occasions begin with an exceptional pour.
        </h2>
        <Link
          href="/contact"
          className="mt-10 inline-block bg-[#211619] px-10 py-5 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#a17d45]"
        >
          Book The Luxe Pour
        </Link>
      </section>
    </main>
  );
}
