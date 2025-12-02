import Image from "next/image";
import WavingHand from "@/components/WavingHand";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-neutral-900 text-neutral-200 p-10">
      {/* Header */}
      <section className="w-full max-w-3xl text-center mt-8">
        <h1 className="text-5xl font-bold text-teal-400 tracking-tight mb-3 font-mono">
          {"<"}Marco Giehmann{"/>"}
        </h1>
        <p className="text-neutral-400 font-mono text-sm">
          // Angehender Fachinformatiker Systemintegration  • Proxmox  • Netzwerke • PHP
        </p>
      </section>

      {/* Avatar
      <div className="mt-10">
        <Image
          src="/profile.jpg"
          alt="Portrait von Marco Giehmann"
          width={200}
          height={200}
          className="rounded-full shadow-lg shadow-teal-700/30 border border-neutral-700"
        />
      </div> */}

      {/* Terminal Style Intro */}
      <section className="mt-12 w-full max-w-3xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono">
        <p className="text-teal-400">
          marco@portfolio:~$ <span className="text-neutral-200">whoami</span>
        </p>
        <p className="mt-2 text-neutral-300">
          <WavingHand /> Hey! Ich bin Marco Giehmann, ein junger und leidenschaftlicher IT-Enthusiast mit Fokus auf Virtualisierung und Netzwerke. Derzeit strebe ich eine Ausbildung zum Fachinformatiker für Systemintegration an und liebe es, meine eigenen IT-Projekte in meiner eigenen Umgebung zu realisieren.
        </p>

        <p className="text-teal-400 mt-6">
          marco@portfolio:~$ <span className="text-neutral-200">cat tech_stack.txt</span>
        </p>
        <div className="mt-2 grid grid-cols-2 gap-3 text-neutral-300">
          <span>• Linux (Debian)</span>
          <span>• Docker</span>
          <span>• Proxmox (VE 8)</span>
          <span>• Networking</span>
          <span>• JavaScript (Node.js)</span>
          <span>• PHP</span>
        </div>
      </section>

      {/* Projekte */}
      <section className="mt-12 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-teal-400 mb-4 font-mono">
          // Aktuelle Projekte
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Dedicated Server */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 shadow-lg shadow-black/40 hover:border-teal-500 transition">
            <a href="/dedicated-server" className="no-underline">
              <h3 className="font-mono text-teal-300 text-lg mb-2">Dedizierter Server</h3>
              <p className="text-neutral-300 text-sm">
                Mein selbstverwalteter dedizierter Server, der verschiedene Dienste und Anwendungen mithilfe von Proxmox hostet.
              </p>
            </a>
          </div>

          {/* NordCMS */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 shadow-lg shadow-black/40 hover:border-teal-500 transition">
            <a href="/nordcms" className="no-underline">
              <h3 className="font-mono text-teal-300 text-lg mb-2">NordCMS</h3>
              <p className="text-neutral-300 text-sm">
                Ein Content-Management-System (CMS) entwickelt mit PHP und MySQL. Angedacht für eine Nachrichtenplattform.
              </p>
            </a>
          </div>
        </div>
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
