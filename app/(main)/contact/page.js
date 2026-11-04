
import Link from "next/link";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export const metadata = {
  title: "Bookings & Enquiries | The Luxe Pour Accra",
  description:
    "Bring The Luxe Pour Accra's premium automated cocktail bar experience to your next wedding, birthday, corporate event or private celebration.",
};

// Replace these with the business's actual contact details.
const WHATSAPP_NUMBER = "0244868779";
const BUSINESS_EMAIL = "";
const INSTAGRAM_URL = "https://www.instagram.com/theluxepour.accra?rpxt=MTcweGczY3IxZjZuaQ==";

const eventTypes = [
  "Weddings",
  "Birthdays",
  "Corporate Events",
  "Private Celebrations",
];

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello The Luxe Pour Accra, I'm interested in booking your cocktail bar service for an upcoming event. I'd love to know more."
  );

  return (
    <main className="bg-[#f8f4ed] text-[#211619]">

      {/* HERO */}
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-[#160d10] px-6 pb-16 pt-36 text-center text-white">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/cocktail-4.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#160d10]/50 via-[#160d10]/65 to-[#160d10]/95" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <p className="text-[10px] uppercase tracking-[0.4em] text-[#d6b77d]">
            Let's Make It Memorable
          </p>

          <h1 className="mt-7 font-serif text-5xl leading-tight sm:text-7xl">
            Your Event.
            <br />
            <span className="italic text-[#d6b77d]">
              Our Expertise.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
            Planning something extraordinary? Bring The Luxe Pour
            experience to your next occasion. We'd love to be part
            of it.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#c6a46b] px-9 py-5 text-[10px] uppercase tracking-[0.2em] text-[#160d10] transition hover:bg-[#e0c18a]"
          >
            <FaWhatsapp size={17} />
            Enquire About Your Event
            <FiArrowUpRight size={15} />
          </a>

        </div>
      </section>

      {/* CONTACT INTRO */}
      <section className="px-6 py-20 text-center sm:py-24">

        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17d45]">
          Book The Experience
        </p>

        <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Exceptional events deserve an exceptional bar.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#75686a]">
          Whether you're hosting an intimate celebration or a
          grand occasion, let's create a cocktail experience
          your guests will remember.
        </p>

      </section>

      {/* CONTACT OPTIONS */}
      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start border border-[#ded4c6] bg-white p-8 transition duration-300 hover:border-[#c6a46b] hover:shadow-xl"
          >
            <FaWhatsapp
              size={27}
              className="text-[#a17d45]"
            />

            <h3 className="mt-8 font-serif text-2xl">
              WhatsApp
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#75686a]">
              Speak with us directly about your upcoming event
              and booking enquiries.
            </p>

            <span className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#a17d45]">
              Start a Conversation
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>

          {/* EMAIL */}
          {/* <a
            href={`mailto:${BUSINESS_EMAIL}`}
            className="group flex flex-col items-start border border-[#ded4c6] bg-white p-8 transition duration-300 hover:border-[#c6a46b] hover:shadow-xl"
          >
            <FiMail
              size={27}
              className="text-[#a17d45]"
            />

            <h3 className="mt-8 font-serif text-2xl">
              Email
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#75686a]">
              Prefer email? Send us your event enquiries
              and we'll be happy to assist.
            </p>

            <span className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#a17d45]">
              Send an Enquiry
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a> */}

          {/* INSTAGRAM */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start border border-[#ded4c6] bg-white p-8 transition duration-300 hover:border-[#c6a46b] hover:shadow-xl"
          >
            <FaInstagram
              size={27}
              className="text-[#a17d45]"
            />

            <h3 className="mt-8 font-serif text-2xl">
              Instagram
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#75686a]">
              Explore our cocktail experiences, discover
              our style and connect with us.
            </p>

            <span className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#a17d45]">
              Follow Our Journey
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>

        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="bg-[#211619] px-6 py-20 text-center text-white sm:py-24">

        <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6b77d]">
          Whatever The Occasion
        </p>

        <h2 className="mt-6 font-serif text-4xl sm:text-5xl">
          We've Got The Pour.
        </h2>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {eventTypes.map((event) => (
            <span
              key={event}
              className="border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[0.15em] text-white/75"
            >
              {event}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-16 flex items-center justify-center gap-2 text-xs text-white/45">
          <FiMapPin className="text-[#d6b77d]" />
          Accra, Ghana
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d6b77d] transition hover:text-white"
        >
          Back to Home
          <FiArrowUpRight />
        </Link>

      </section>

    </main>
  );
}
