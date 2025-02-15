
import React from "react";
import { TeamUser } from "../TeamUser";

export default function TeamSection() {
  return (
    <React.Fragment>
      <>
        <section className="py-20">
          
          <div className="container mx-auto px-4">
            
            <div className="flex justify-center mb-6">
              
              <div className="bg-yellow-100 px-2 py-1 text-xs font-bold inline-block">
                Team
              </div>
            </div>
            <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold mb-4 max-w-3xl mx-auto">
              une equipe de developpeurs constitue des meilleur talent
              d'afrique.
            </h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              chaque acteur ci-dessous est un meneur de jeu dans son domaine .
              cette equipe ordonner est deja pret à donner vie a vos idees de
              projet.
            </p>
            <div className="flex flex-wrap -m-4">
              <TeamUser
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              author="Francois Ngamo"
              jobName="CEO , Developpeur Fullstack"
              linkFacebook="#"
              linkInsta="#"
              linkTwitter="#"
              linkLinkedIn="#"
              />
              <TeamUser
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              author="Francois Ngamo"
              jobName="CEO , Developpeur Fullstack"
              linkFacebook="#"
              linkInsta="#"
              linkTwitter="#"
              linkLinkedIn="#"
              />
              <TeamUser
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              author="Francois Ngamo"
              jobName="CEO , Developpeur Fullstack"
              linkFacebook="#"
              linkInsta="#"
              linkTwitter="#"
              linkLinkedIn="#"
              />
              <TeamUser
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              author="Francois Ngamo"
              jobName="CEO , Developpeur Fullstack"
              linkFacebook="#"
              linkInsta="#"
              linkTwitter="#"
              linkLinkedIn="#"
              />
              <TeamUser
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              author="Francois Ngamo"
              jobName="CEO , Developpeur Fullstack"
              linkFacebook="#"
              linkInsta="#"
              linkTwitter="#"
              linkLinkedIn="#"
              />
              <TeamUser
              image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              author="Francois Ngamo"
              jobName="CEO , Developpeur Fullstack"
              linkFacebook="#"
              linkInsta="#"
              linkTwitter="#"
              linkLinkedIn="#"
              />
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
