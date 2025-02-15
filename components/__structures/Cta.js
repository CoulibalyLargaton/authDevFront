import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <React.Fragment>
      <>
        <section
          className="py-20 bg-yellow-500 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("authdev-assets/elements/lines2.svg")',
          }}
        >
          
          <div className="container mx-auto px-4">
            
            <div className="flex justify-center mb-6">
              
              <div className="bg-yellow-100 py-1 px-2 text-xs font-bold inline-block">
                passer a l'action
              </div>
            </div>
            <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4">
              Prenez le devenir de votre business entre vos main en faisant de
              bon choix.
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-6">
              Authentic deviendra aussi tot un incontournable pour vos projet de
              develoopement et de conception des solution innovant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              
              <Link
                className="px-6 py-3 block text-center w-full sm:w-auto bg-green-500 text-white text-sm font-bold hover:bg-green-600 focus:ring focus:ring-green-300 transition duration-200"
                href="#"
              >
                Contacter les Experts
              </Link>
              <Link
                className="px-6 py-3 block text-center w-full sm:w-auto bg-orange-900 text-white text-sm font-bold hover:bg-orange-800 focus:ring focus:ring-orange-700 transition duration-200"
                href="#"
              >
                Share with friends
              </Link>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
