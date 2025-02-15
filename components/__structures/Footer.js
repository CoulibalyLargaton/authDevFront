import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <>
        <section className="py-20 bg-black">
          
          <div className="container mx-auto px-4">
            
            <div className="flex flex-wrap -m-4 pb-20 mb-6 border-b border-gray-800">
              
              <div className="w-full lg:w-1/4 p-4">
                
                <Link className="inline-block" href="#">
                  
                  <span className=" text-white font-bold text-2xl capitalize text-nowrap">
                    Authentic Dev
                  </span>
                </Link>
              </div>
              <div className="w-full lg:w-3/4 p-4">
                
                <div className="flex flex-wrap -m-4">
                  
                  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    
                    <p className="text-white font-bold mb-6">Produits</p>
                    <ul>
                      
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Solutions Logicielles
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          API &amp; Intégrations
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Sécurité &amp; Conformité
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Tarification
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Témoignages Clients
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    
                    <p className="text-white font-bold mb-6">
                      Pour les Développeurs
                    </p>
                    <ul>
                      
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Documentation
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Base de Connaissances
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Statut du Système
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Tutoriels
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Sécurité
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    
                    <p className="text-white font-bold mb-6">Ressources</p>
                    <ul>
                      
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          À Propos
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Équipe
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Carrières
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                          href="#"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    
                    <p className="text-white font-bold mb-6">Newsletter</p>
                    <form action>
                      
                      <div className="flex">
                        
                        <input
                          className="flex-1 h-12 bg-gray-800 p-4 placeholder-gray-400 text-white text-sm outline-none"
                          type="text"
                          placeholder="Votre adresse email"
                        />
                        <button
                          className="bg-yellow-500 flex items-center justify-center px-4 h-12 hover:bg-yellow-400 focus:ring focus:ring-yellow-200 transition duration-200"
                          type="submit"
                        >
                          
                          <svg
                            style={{ width: 16, height: 16 }}
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            
                            <path
                              d="M4 12H20"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 18L20 12L14 6"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-8">
              
              <ul className="flex items-center gap-8">
                
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                    href="#"
                  >
                    Conditions d'Utilisation
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                    href="#"
                  >
                    Politique de Confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 hover:text-gray-300 text-sm transition duration-200"
                    href="#"
                  >
                    Licences
                  </Link>
                </li>
              </ul>
              <p className="text-gray-400 text-sm">
                © 2025 Authentic Dev. Tous droits réservés.
              </p>
              <div className="flex flex-wrap gap-4">
                
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full"
                >
                  
                  <img
                    src="/authdev-assets/logos/brands/facebook-circle.png"
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full"
                >
                  
                  <img
                    src="/authdev-assets/logos/brands/google-circle.png"
                    alt="LinkedIn"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full"
                >
                  
                  <img
                    src="/authdev-assets/logos/brands/twitter-circle.png"
                    alt="Twitter"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full"
                >
                  
                  <img
                    src="/authdev-assets/logos/brands/dribbble-circle.png"
                    alt="GitHub"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
