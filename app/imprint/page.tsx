import Image from "next/image";
import WavingHand from "@/components/WavingHand";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-neutral-900 text-neutral-200 p-10">
      {/* Header */}
      <section className="w-full max-w-3xl text-center mt-8">
        <h1 className="text-5xl font-bold text-teal-400 tracking-tight mb-3 font-mono">
          {"<"}Impressum{"/>"}
        </h1>
        <p className="text-neutral-400 font-mono text-sm">
          // Angaben gemäß § 5 DDG und § 18 MStV 
        </p>
      </section>

      {/* Terminal Style Intro */}
      <section className="mt-12 w-full max-w-3xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono">
        <p className="text-teal-400">
          marco@portfolio:~$ <span className="text-neutral-200">cat imprint.txt</span>
        </p>
        <p className="mt-2 text-neutral-300">
          Marco Giehmann<br />
          Weißenburger Str. 42<br />
          66113 Saarbrücken<br />
          Germany<br /><br />
          <b>Kontakt</b><br />
          Telefon: <a href="tel:+4901791023234" className="text-teal-400 hover:underline">+49 179 1023234</a><br />
          E-Mail: <a href="mailto:marco@marcogiehmann.de" className="text-teal-400 hover:underline">marco@marcogiehmann.de</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-neutral-600 font-mono text-xs pb-6">
        © {new Date().getFullYear()} Marco Giehmann – Crafted with Next.js & Tailwind CSS
        <div className="mt-2 justify-center flex">
          <a href="/imprint" className="ml-4 hover:text-teal-400">Impressum</a>
          <a href="/privacy" className="ml-4 hover:text-teal-400">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
