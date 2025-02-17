import FeatureSection from "@/components/__structures/FeatureSection";
import IndexSection__structures3 from "@/components/__structures/DevSection";
import AbonnementSection from "@/components/__structures/AbonnementSection";
import Cta from "@/components/__structures/Cta";
import TeamSection from "@/components/__structures/TeamSection";
import TemoignageSection from "@/components/__structures/TemoignageSection";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { Fugaz_One } from "next/font/google";
import Image from "next/image";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <Main className="">
      <Hero />
      {/* autres section ajouter par franck */}
      <FeatureSection />
      {/* section 3 */}
      <IndexSection__structures3 />
      {/* troisieme section dedies aux abonnement */}
      <AbonnementSection />

      {/* section dedier aux temoignages */}
      <TemoignageSection/>
      {/* section dedier a la presentation des menbres de la team */}
      <TeamSection/>

      {/* setion dedier au call to action  */}
      <Cta />
      

    </Main>
  );
}
