
"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/about" },
  { name: "Menu", href: "/menu" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full border-b border-white/10 bg-[#160d10]/70 text-[#f8f1e8] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-wide">
            THE LUXE POUR
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.42em] text-[#c6a46b]">
            Accra · Ghana
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-white/75 transition hover:text-[#d6b77d]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="border border-[#c6a46b] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#e0c18a] transition hover:bg-[#c6a46b] hover:text-[#160d10]"
          >
            Book Our Bar
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#d6b77d] md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#160d10] px-6 py-8 md:hidden">
          <div className="flex flex-col gap-7">
            {[
              ...navigation,
              { name: "Book Our Bar", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-white/80"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
    