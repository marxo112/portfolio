"use client";
import { useEffect, useState } from "react";

interface ServerStatus {
  webserver: { online: boolean };
  nextcloud: { online: boolean };
  vaultwarden: { online: boolean };
  proxy: { online: boolean };
  windows_vm: { online: boolean };
  docker: { online: boolean };
}

export default function StatusTerminal() {
    const [status, setStatus] = useState<ServerStatus | null>(null);

    useEffect(() => {
        async function fetchStatus() {
            const response = await fetch("/api/server-status");
            const data = await response.json();
            setStatus(data);
        }
        fetchStatus();

        const interval = setInterval(fetchStatus, 2000); // Aktualisiere alle 2 Sekunden
        return () => clearInterval(interval);
    }, []);

    if (!status) {
        return (
            <main className="min-h-screen w-full flex flex-col items-center bg-neutral-900 text-neutral-200 p-10">
            {/* Header → bleibt vollständig sichtbar */}
            <section className="w-full max-w-3xl text-center mt-8">
                <h1 className="text-5xl font-bold text-teal-400 tracking-tight mb-3 font-mono">
                {"<"}Dedicated Server{"/>"}
                </h1>
                <p className="text-neutral-400 font-mono text-sm">
                // Neben der Ausbildung betreibe ich einen eigenen dedizierten Server mit unterschiedlichen Diensten. Basierend auf diesem Server hoste ich unter anderem meine persönliche Webseite sowie diverse Projekte.
                </p>
            </section>

            {/* Terminal sofort rendern */}
            <section className="mt-12 w-full max-w-3xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono">
                <p className="text-teal-400">
                marco@portfolio:~$ <span className="text-neutral-200">systemctl status servers</span>
                </p>

                {/* Placeholder Status */}
                <p className="mt-2 text-neutral-300 opacity-40">
                Lade Statusdaten...
                </p>
            </section>
            </main>
        );
    }

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-neutral-900 text-neutral-200 p-10">
      {/* Header */}
      <section className="w-full max-w-3xl text-center mt-8">
        <h1 className="text-5xl font-bold text-teal-400 tracking-tight mb-3 font-mono">
          {"<"}Dedicated Server{"/>"}
        </h1>
        <p className="text-neutral-400 font-mono text-sm">
          // Neben der Ausbildung betreibe ich einen eigenen dedizierten Server mit unterschiedlichen Diensten. Basierend auf diesem Server hoste ich unter anderem meine persönliche Webseite sowie diverse Projekte. Alle Dienste werden via Proxmox VE virtualisiert und verwaltet.
        </p>
      </section>

      {/* Terminal Style Intro */}
      <section className="mt-12 w-full max-w-3xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono">
        <p className="text-teal-400">
          marco@portfolio:~$ <span className="text-neutral-200">systemctl status servers</span>
        </p>
        <p className="mt-2 text-neutral-300">
          - Webserver (Keyhelp Panel)<br />
          STATUS: {status.webserver.online 
          ? <span className="text-green-400">active (running)</span> 
          : <span className="text-red-400">inactive (down)</span>}<br /><br />
          - Nextcloud<br />
          STATUS: {status.nextcloud.online
          ? <span className="text-green-400">active (running)</span> 
          : <span className="text-red-400">inactive (down)</span>}<br /><br />
          - Vaultwarden (Passwortmanager)<br />
          STATUS: {status.vaultwarden.online
          ? <span className="text-green-400">active (running)</span> 
          : <span className="text-red-400">inactive (down)</span>}<br /><br />
          - Proxy (Nginx)<br />
          STATUS: {status.proxy.online
          ? <span className="text-green-400">active (running)</span> 
          : <span className="text-red-400">inactive (down)</span>}<br /><br />
          - Windows VM<br />
          STATUS: {status.windows_vm.online
          ? <span className="text-green-400">active (running)</span> 
          : <span className="text-red-400">inactive (down)</span>}<br /><br />
          - Docker Container (verschiedene Dienste)<br />
          STATUS: {status.docker.online
          ? <span className="text-green-400">active (running)</span> 
          : <span className="text-red-400">inactive (down)</span>}<br /><br />
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-neutral-600 font-mono text-xs pb-6">
        <div className="mt-2 justify-center flex">
            Die Statusanzeige aktualisiert sich alle 2 Sekunden.
        </div>
        © {new Date().getFullYear()} Marco Giehmann – Crafted with Next.js & Tailwind CSS
        <div className="mt-2 justify-center flex">
          <a href="/imprint" className="ml-4 hover:text-teal-400">Impressum</a>
          <a href="/privacy" className="ml-4 hover:text-teal-400">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
