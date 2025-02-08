import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const opensan = Open_Sans({
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Authentic Dev",
  description: "Plateforme de presentation de l'equipe de Auth Dev son humeur journalier",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8  flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>
        {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
      </Link>
      <div className="flex items-center justify-between">
        PLACEHOLDER CTA || STATS
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 place-items-center">
      <p className={'text-indigo-600 ' + fugaz.className }>
        Fait avec 🧡
      </p>
    </footer>
  )
  return (
    <html lang="fr">
      
      <body
        className={`w-full max-w-[1000] max-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700 ${opensan.className} antialiased`}
      >
        {header}
          {children}
        {footer}
      </body>
      
    </html>
  );
}