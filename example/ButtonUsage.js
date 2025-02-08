import Button from '@/components/design-system/Button'
import React from 'react'

export default function ButtonUsage() {
  return (
    <div>
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Documentation - Bouton</h1>
      
      <p className="mb-4">Voici comment utiliser le composant <code>Button</code> dans le projet.</p>
      
      {/* Exemple 1 : Bouton simple */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1️⃣ Bouton simple</h2>
        <Button variant="primary">Cliquez ici</Button>
        <pre className="bg-gray-100 p-4 mt-2 rounded">
{`<Button variant="primary">Cliquez ici</Button>`}
        </pre>
      </div>
      
      {/* Exemple 2 : Bouton avec une action */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2️⃣ Bouton avec une action</h2>
        <Button variant="secondary" onClick={() => alert("Action exécutée !")}>Action</Button>
        <pre className="bg-gray-100 p-4 mt-2 rounded">
{`<Button variant="secondary" onClick={() => alert("Action exécutée !")}>Action</Button>`}
        </pre>
      </div>

      {/* Exemple 3 : Bouton en lien */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3️⃣ Bouton en lien</h2>
        <Button baseUrl="https://google.com">Aller sur Google</Button>
        <pre className="bg-gray-100 p-4 mt-2 rounded">
{`<Button baseUrl="https://google.com">Aller sur Google</Button>`}
        </pre>
      </div>

      {/* Exemple 4 : Bouton désactivé */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4️⃣ Bouton désactivé</h2>
        <Button variant="danger" disabled>Indisponible</Button>
        <pre className="bg-gray-100 p-4 mt-2 rounded">
{`<Button variant="danger" disabled>Indisponible</Button>`}
        </pre>
      </div>
    </div>
    </div>
  )
}
