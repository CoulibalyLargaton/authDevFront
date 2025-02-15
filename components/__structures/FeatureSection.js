import React from "react";

export default function FeatureSection() {
  return (
    <React.Fragment>
      <>
        <section className="py-20 bg-yellow-50">
          
          <div className="container mx-auto px-4">
            
            <div className="flex flex-wrap items-center -m-4">
              
              <div className="w-full lg:w-1/2 p-4">
                
                <h1 className="font-heading font-bold text-4xl mb-16 max-w-md">
                  Nous Rassemblons les talents tech africains
                </h1>
                <div className="flex gap-4 mb-6">
                  
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
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11.5L11 14.5L17 8.5"
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    
                    <h2 className="text-xl font-bold mb-3">
                      Accès aux missions
                    </h2>
                    <p className="text-gray-500 max-w-sm">
                      Collaborez sur vos projets avec des experts africains.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  
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
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11.5L11 14.5L17 8.5"
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    
                    <h2 className="text-xl font-bold mb-3">
                      Fiabilité et confiance
                    </h2>
                    <p className="text-gray-500 max-w-sm">
                      Garantissez la réussite grâce à des standards élevés.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  
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
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11.5L11 14.5L17 8.5"
                        stroke="#006251"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    
                    <h2 className="text-xl font-bold mb-3">
                      Écosystème dynamique
                    </h2>
                    <p className="text-gray-500 max-w-sm">
                      Rejoignez un réseau africain de développeurs engagés.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4">
                
                <img
                  className="w-full"
                  src="authdev-assets/images/scene-computer.png"
                  alt="Authentic Dev"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
