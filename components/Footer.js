
import Link from "next/link";
import CurrentYear from "./CurrentYear";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/about" },
  { name: "Book Our Bar", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#160d10] px-6 pb-8 pt-20 text-[#f8f1e8] lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-3xl tracking-wide">
              THE LUXE POUR
            </h2>
            <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-[#c6a46b]">
              Accra · Ghana
            </p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              Elevated cocktail experiences. Effortless service.
              Unforgettable occasions.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#c6a46b]">
              Explore
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition hover:text-[#d6b77d]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#c6a46b]">
              The Experience
            </h3>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              Weddings, private celebrations, birthdays and corporate
              gatherings. We bring the bar experience to you.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row">
          <p>
            © <CurrentYear /> The Luxe Pour Accra. All rights
            reserved.
          </p>
          <p>Crafted for extraordinary occasions.</p>
        </div>
      </div>
    </footer>
  );
}
