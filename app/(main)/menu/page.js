
import Link from "next/link";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

export const metadata = {
  title: "Our Cocktail Menu | The Luxe Pour Accra",
  description:
    "Explore The Luxe Pour Accra's collection of premium automated cocktails and alcohol-free mocktails, crafted for exceptional events.",
};

const menuSections = [
  {
    id: "tequila",
    number: "01",
    category: "Tequila Selections",
    spirit: "TEQUILA",
    drinks: [
      {
        name: "Classic Margarita",
        description:
          "Tangy lime juice perfectly balanced with sweet triple sec and ultra-premium tequila.",
      },
      {
        name: "Jalapeño Margarita",
        description:
          "A bold twist on the classic with a refreshing, fiery kick of real jalapeño crispness.",
      },
    ],
  },
  {
    id: "vodka",
    number: "02",
    category: "Vodka Selections",
    spirit: "VODKA",
    drinks: [
      {
        name: "Cosmopolitan",
        description:
          "A sophisticated, crisp blend of tart cranberry, lime, and sweet orange liqueur.",
      },
      {
        name: "Sex on the Beach",
        description:
          "A tropical, high-energy fusion of sweet peach, orange, and tart cranberry.",
      },
    ],
  },
  {
    id: "whiskey",
    number: "03",
    category: "Whiskey Selections",
    spirit: "WHISKEY",
    drinks: [
      {
        name: "Old Fashioned",
        description:
          "The timeless classic. A rich, aromatic blend of bitters, cane sugar, and orange citrus.",
      },
      {
        name: "Whiskey Sour",
        description:
          "A smooth balance of tart lemon, bright lime, and a subtle touch of sweetness.",
      },
    ],
  },
  {
    id: "gin-rum",
    number: "04",
    category: "Gin & Rum Selections",
    spirit: "GIN & RUM",
    drinks: [
      {
        name: "Long Island Iced Tea",
        description:
          "A legendary powerhouse blend featuring bright citrus notes and a smooth finish.",
      },
      {
        name: "Rum Breeze",
        description:
          "An island escape featuring a bright, tropical blend of pineapple, lime, and passionfruit juices.",
      },
    ],
  },
  {
    id: "mocktails",
    number: "05",
    category: "Signature Mocktails",
    spirit: "100% ALCOHOL-FREE",
    subtitle: "Premium Alcohol-Free Blends",
    drinks: [
      {
        name: "Amaretto Sour Mocktail",
        description:
          "A beautifully balanced, sweet-and-sour blend featuring rich, nutty almond notes and bright lemon citrus.",
      },
      {
        name: "Ginger Citrus Mocktail",
        description:
          "A crisp, deeply refreshing blend with a fiery ginger bite and a zesty twist of fresh lime and lemon juice.",
      },
      {
        name: "Mint Strong Mocktail",
        description:
          "A cooling, energetic rush of sweet garden mint and tart lime juices, perfectly mimicking a premium Mojito.",
      },
    ],
  },
];

const cocktailImages = [
  "/images/cocktail-1.jpg",
  "/images/cocktail-2.jpg",
  "/images/cocktail-3.jpg",
  "/images/cocktail-4.jpg",
];

export default function MenuPage() {
  return (
    <main className="bg-[#f8f4ed] text-[#211619]">

      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#160d10] px-6 pb-16 pt-36 text-center text-white">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/cocktail-1.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#160d10]/60 via-[#160d10]/65 to-[#160d10]/95" />

        <div className="relative z-10 mx-auto max-w-4xl">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d6b77d]">
            The Luxe Pour Accra Presents
          </p>

          <h1 className="mt-8 font-serif text-6xl leading-tight sm:text-8xl">
            The Art of
            <br />
            <span className="italic text-[#d6b77d]">
              The Pour.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
            Discover our curated collection of premium cocktails
            and signature alcohol-free creations, crafted for
            extraordinary occasions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-[9px] uppercase tracking-[0.2em] text-white/65">
            <span>60+ Cocktail Possibilities</span>
            <span className="text-[#d6b77d]">✦</span>
            <span>Precision Pouring</span>
            <span className="text-[#d6b77d]">✦</span>
            <span>Premium Experience</span>
          </div>

          <a
            href="#menu"
            className="mt-14 inline-flex items-center gap-3 border border-[#c6a46b]/60 px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-[#e0c18a] transition hover:bg-[#c6a46b] hover:text-[#160d10]"
          >
            Explore The Menu
            <FiArrowDown />
          </a>

        </div>
      </section>

      {/* MENU INTRO */}
      <section
        id="menu"
        className="px-6 py-20 text-center sm:py-28"
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
          The Intelligent Bar
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl sm:text-6xl">
          A Collection of Exceptional Flavours.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#75686a]">
          From timeless cocktail classics to refreshing alcohol-free
          blends, every selection is an invitation to experience
          something extraordinary.
        </p>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <span className="border border-[#c6a46b] px-6 py-3 text-[10px] uppercase tracking-[0.2em]">
            Premium Cocktails
          </span>
          <span className="border border-[#c6a46b] px-6 py-3 text-[10px] uppercase tracking-[0.2em]">
            Signature Mocktails
          </span>
        </div>
      </section>

      {/* MENU CATEGORY NAVIGATION */}
      <section className="border-y border-[#e2d8ca] bg-white/60 px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-5">
          {menuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-[9px] uppercase tracking-[0.16em] text-[#75686a] transition hover:text-[#a17d45]"
            >
              {section.category}
            </a>
          ))}
        </div>
      </section>

      {/* COCKTAIL COLLECTION */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">

        <div className="mb-16 flex items-end justify-between border-b border-[#ded4c6] pb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
              The Cocktail Collection
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Crafted Classics
            </h2>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#a17d45] sm:block">
            01 — 04
          </span>
        </div>

        <div className="space-y-24">
          {menuSections.filter((section) => section.id !== "mocktails").map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_2fr]">

                <div>
                  <p className="text-[10px] tracking-[0.3em] text-[#a17d45]">
                    COLLECTION {section.number}
                  </p>

                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                    {section.category}
                  </h3>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#a17d45]">
                    {section.spirit}
                  </p>
                </div>

                <div className="divide-y divide-[#ded4c6]">
                  {section.drinks.map((drink, index) => (
                    <article
                      key={drink.name}
                      className="flex gap-5 py-7 first:pt-0 last:pb-0"
                    >
                      <span className="pt-1 font-serif text-lg text-[#c6a46b]">
                        0{index + 1}
                      </span>

                      <div>
                        <h4 className="font-serif text-2xl sm:text-3xl">
                          {drink.name}
                        </h4>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#75686a]">
                          {drink.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {cocktailImages.map((image, index) => (
          <div
            key={image}
            className="aspect-[4/5] overflow-hidden bg-[#211619]"
          >
            <img
              src={image}
              alt={`The Luxe Pour cocktail selection ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        ))}
      </section>

      {/* MOCKTAIL COLLECTION */}
      <section
        id="mocktails"
        className="scroll-mt-20 bg-[#eee6db] px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
              The Alcohol-Free Collection
            </p>

            <h2 className="mt-6 font-serif text-4xl sm:text-6xl">
              Signature Mocktails
            </h2>

            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#a17d45]">
              100% Alcohol-Free Premium Blends
            </p>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#75686a]">
              Beautifully balanced, refreshing creations that
              deliver a sophisticated drinking experience without
              the alcohol.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {menuSections.find((section) => section.id === "mocktails").drinks.map((drink, index) => (
              <article
                key={drink.name}
                className="border border-[#d7c9b7] bg-[#f8f4ed] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
              >
                <span className="font-serif text-4xl text-[#c6a46b]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 font-serif text-2xl leading-snug">
                  {drink.name}
                </h3>

                <div className="my-5 h-px w-12 bg-[#c6a46b]" />

                <p className="text-sm leading-8 text-[#75686a]">
                  {drink.description}
                </p>

                <p className="mt-8 text-[9px] uppercase tracking-[0.2em] text-[#a17d45]">
                  Alcohol-Free
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className="bg-[#211619] px-6 py-24 text-center text-white sm:py-32">

        <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6b77d]">
          The Science of Sophistication
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          Precision in Every Pour.
          <br />
          <span className="italic text-[#d6b77d]">
            Excellence in Every Detail.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/55">
          Our drinks are mixed with surgical precision using
          advanced automated technology, crystal-clear
          slow-melting ice, and premium garnishes.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/70">
          {[
            "Advanced Automation",
            "Crystal-Clear Ice",
            "Premium Garnishes",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <FiCheck className="text-[#d6b77d]" />
              {item}
            </span>
          ))}
        </div>

      </section>

      {/* BOOKING CTA */}
      <section className="px-6 py-24 text-center sm:py-32">

        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
          Bring The Experience To Your Event
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl sm:text-6xl">
          Your Occasion Deserves
          <span className="italic text-[#a17d45]">
            {" "}The Luxe Pour.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#75686a]">
          Let's create an extraordinary cocktail experience
          for you and your guests.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 bg-[#211619] px-10 py-5 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#a17d45]"
        >
          Enquire About Your Event
          <FiArrowUpRight />
        </Link>

      </section>

    </main>
  );
}
