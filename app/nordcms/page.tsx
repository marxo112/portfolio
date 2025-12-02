export default function NordCMS() {
    return (
    <main className="min-h-screen w-full flex flex-col items-center bg-neutral-900 text-neutral-200 p-10">
        {/* Header */}
        <section className="w-full max-w-3xl text-center mt-8">
            <h1 className="text-5xl font-bold text-teal-400 tracking-tight mb-3 font-mono">
            {"<"}NordCMS{"/>"}
            </h1>
            <p className="text-neutral-400 font-mono text-sm">
            // Unteranderem habe ich das NordCMS ins Leben gerufen. Dabei handel es sich um ein Content-Management-System, dass sich für Onlinenachrichtenportale spezialisiert hat. Das System wurde in PHP entwickelt und nutzt MySQL als Datenbank. Es bietet eine benutzerfreundliche Oberfläche zur Verwaltung von Inhalten, Kategorien und Benutzern.<br /><br />Zusammen mit dem Projekt "Die Nordland" wurde eine Onlinezeitung für ein GTA5-Rollenspielserver realisiert, die auf dem NordCMS basiert.
            </p>
        </section>

        {/* Content Section */}
        <section className="mt-12 w-full max-w-5xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Funktionen von NordCMS:</h2>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Intuitive Benutzeroberfläche zur einfachen Verwaltung von Inhalten.</li>
            <li>Kategorisierung und Tagging von Artikeln für bessere Organisation.</li>
            <li>Benutzerverwaltung mit unterschiedlichen Rollen und Berechtigungen.</li>
            <li>Paywall-Modul zur Monetarisierung von Inhalten.</li>
            </ul>
        </section>

        {/* Place Image alternately left and right with description on the side */}
        <section className="mt-12 w-full max-w-5xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono flex flex-col md:flex-row items-center md:items-start">
            <img src="/img/nordredakt-dashboard.png" alt="NordRedakt Dashboard" className="w-full rounded-lg md:mr-6 border border-neutral-700 md:w-4/1" />
            <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">NordRedakt</h2>
            <p className="text-neutral-300">
                Das Verwaltungsmodul von NordCMS ist das interne Redaktionsmanagementsystem (RMS) namens NordRedakt. Es bietet den Redakteuren und Administratoren eine zentrale Plattform zur Verwaltung von Inhalten, Benutzern und Einstellungen.
            </p>
            </div>
        </section>

        <section className="mt-12 w-full max-w-5xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono flex flex-col md:flex-row-reverse items-center md:items-start">
            <img src="/img/nordcms-article.png" alt="NordCMS Artikelansicht" className="w-full rounded-lg md:mr-6 border border-neutral-700 md:w-4/1" />
            <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Individualität</h2>
            <p className="text-neutral-300">
                Von normalen Textpassagen bis hin zu eingebetteten Medieninhalten – NordCMS bietet eine Vielzahl von Werkzeugen, um ansprechende und informative Artikel zu erstellen. Das System unterstützt auch die Integration von Multimedia-Elementen wie Bildern und Videos, um die Inhalte lebendiger zu gestalten.
            </p>
            </div>
        </section>

        <section className="mt-12 w-full max-w-5xl bg-black border border-neutral-800 rounded-lg p-6 shadow-xl shadow-black/40 font-mono flex flex-col md:flex-row items-center md:items-start">
            <img src="/img/nordlandplus-article.png" alt="NordlandPlus Artikel" className="w-full rounded-lg md:mr-6 border border-neutral-700 md:w-4/1" />
            <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">NordlandPlus</h2>
            <p className="text-neutral-300">
                Ein besonderes Merkmal von NordCMS ist die Paywall. Dieses ermöglicht es den Redakteuren, bestimmte Inhalte nur "zahlenden" Abonnenten zugänglich zu machen. Dadurch können exklusive Artikel mit nur einem Klick monetarisiert werden.
            </p>
            <p className="text-sm text-neutral-500 mt-2">
                (Es handelt sich hierbei um eine fiktive Monetarisierungsdarstellung im Rahmen eines GTA5-Rollenspielservers.)
            </p>
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
