.
├── app/                   # Dossier principal sans `src/`
│   ├── doc/               # Documentation intégrée au projet
│   ├── components/        # Composants réutilisables
│   │   ├── design-system/ # Système de design (ex. boutons, cartes)
│   ├── example/           # Exemples d'utilisation des composants
├── public/                # Fichiers statiques
├── .env                   # Variables d'environnement
├── next.config.mjs        # Configuration de Next.js
├── tailwind.config.mjs    # Configuration de Tailwind CSS
└── README.md              # Documentation du projet


Apres clonnage
`npm install`

Demarrer le projet
`npm run dev`

Le projet utilise Tailwind CSS. Tu peux modifier les styles via :

globals.css (dans app/doc/)
tailwind.config.mjs pour personnaliser Tailwind.

Dans Next.js, chaque fichier page.js dans un dossier devient une route.
Exemple : app/doc/page.js → http://localhost:3000/doc


N'oublie pas de duplique le .env.exemple et renommer en .env


# Récupérer les branches distantes
git fetch origin

# Lister les branches distantes
git branch -r

# Créer une nouvelle branche à partir d'une branche distante
git checkout -b ma_nouvelle_branche origin/feature-branch

# Pousser votre nouvelle branche vers le dépôt distant
git push origin ma_nouvelle_branche

# Annuler un commit sans push
git rm -r --cached .

# Annuler le suivi d'un seul fichier sans push
git rm -r --cached [nom_fichier] ou [dossier]
----------------------------------------------------------------------------------
