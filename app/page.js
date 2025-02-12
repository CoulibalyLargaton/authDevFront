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
      <Hero/>
    </Main>
  );
}
