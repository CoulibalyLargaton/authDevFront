import Link from "next/link";
import React from "react";
import { CheckLink } from "../CheckLink";

export default function AbonnementSection() {
  return (
    <React.Fragment>
      <>
        <section className="py-20">
          
          <div className="container mx-auto px-4">
            
            <div className="flex flex-wrap items-center -m-4">
              
              <div className="w-full lg:w-1/3 p-4">
                
                <div className="bg-yellow-500 px-2 py-1 mb-6 text-xs font-bold inline-block">
                  TechAfrique
                </div>
                <h1 className="font-heading text-4xl font-bold mb-6">
                  Des abonnements pour chaque Acteur africain
                </h1>
                <p className="text-gray-500 max-w-xs">
                  Choisissez un plan adapté à vos ambitions tech en Afrique.
                </p>
              </div>
              <div className="w-full lg:w-1/3 p-4">
                
                <div className="bg-green-500 p-6">
                  
                  <p className="text-center text-green-300 text-xl font-bold mb-4">
                    Débutant
                  </p>
                  <h2 className="font-heading text-white text-center text-5xl font-bold mb-6">
                    XFA 20 000
                  </h2>
                  <ul className="mb-6">
                    
                    <li className="flex gap-2 items-center mb-3">
                      
                      <span>
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 11.5L11 14.5L17 8.5"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-50">Accès aux projets locaux</p>
                    </li>
                    <li className="flex gap-2 items-center mb-3">
                      
                      <span>
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 11.5L11 14.5L17 8.5"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-50">Formations en ligne</p>
                    </li>
                    <li className="flex gap-2 items-center mb-3">
                      
                      <span>
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 11.5L11 14.5L17 8.5"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-50">Réseau professionnel</p>
                    </li>
                    <li className="flex gap-2 items-center mb-3">
                      
                      <span>
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 11.5L11 14.5L17 8.5"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-50">Support technique</p>
                    </li>
                    <li className="flex gap-2 items-center">
                      
                      <span>
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 11.5L11 14.5L17 8.5"
                            stroke="#99C0B9"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-50">Certifications locales</p>
                    </li>
                  </ul>
                  <Link
                    className="px-6 py-3 block text-center w-full sm:w-auto bg-white text-sm font-bold hover:bg-gray-100 focus:ring focus:ring-gray-200 transition duration-200"
                    href="#"
                  >
                    Commencer
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-4">
                
                <div className="bg-gray-50 p-6">
                  
                  <p className="text-center text-xl font-bold mb-4">
                    Expert
                  </p>
                  <h2 className="font-heading text-green-500 text-center text-5xl font-bold mb-6">
                    XFA 70 000
                  </h2>
                  <ul className="mb-6">
                    <CheckLink content="Projets internationaux"/>
                    <CheckLink content="Mentorat VIP"/>
                    <CheckLink content="Accès aux startups"/>
                    <CheckLink content="Certifications globales"/>
                    <CheckLink content="Cahier des charges sur mesures"/>
                    <CheckLink content="Delais Respecter"/>


                  </ul>
                  <Link
                    className="px-6 py-3 block text-center w-full sm:w-auto bg-green-500 text-white text-sm font-bold hover:bg-green-600 focus:ring focus:ring-green-300 transition duration-200"
                    href="#"
                  >
                    Commencer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
