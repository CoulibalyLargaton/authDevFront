import Link from "next/link";
import React from "react";
import { DevItem } from "../DevItem";

export default function DevSection() {
  return (
    <React.Fragment>
      <>
        <section className="py-20">
          
          <div className="container mx-auto px-4">
            
            <div className="flex flex-wrap items-center -m-4">
              
              <div className="w-full lg:w-1/2 p-4">
                
                <div className="bg-yellow-500 px-2 py-1 mb-6 text-xs font-bold inline-block">
                  Vous etes dev?
                </div>
                <h1 className="font-heading text-4xl font-bold mb-6 max-w-md">
                  Devenir un dev africain connecté
                </h1>
                <p className="text-gray-500 max-w-md mb-6">
                  Rejoignez une communauté engagée pour l'innovation tech
                  africaine.
                </p>
                <Link
                  className="px-6 py-3 inline-block text-center w-full sm:w-auto bg-green-500 text-white text-sm font-bold hover:bg-green-600 focus:ring focus:ring-green-300 transition duration-200"
                  href="#"
                >
                  Nous rejoindre
                </Link>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                
                <div className="bg-gray-50 p-12">
                  <DevItem
                    number={1}
                    title=" Profil personnalisé"
                    description="Montrez vos compétences aux entreprises africaines."
                  />
                  <DevItem
                    number={2}
                    title="Projets collaboratifs"
                    description="Travaillez sur des défos tech panafricains."
                  />
                  <DevItem
                    number={3}
                    title="Suivi de carrière"
                    description="Accédez à des mentors locaux et internationaux."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
