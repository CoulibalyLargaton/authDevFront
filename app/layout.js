import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const opensans = Open_Sans({
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
    <NavBar />
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
        className={`w-full max-w-[1500px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${opensans.className}`}
      >
        {header}
          {children}
        {footer}
      </body>
      
    </html>
  );
}