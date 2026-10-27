# Mon Dex

Sprint 2, Brief 1. Application Pokémon interactive développée avec HTML, Tailwind CSS et JavaScript.

## Installation

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
npm install
npm run dev
```

`npm run dev` surveille vos fichiers et régénère `dist/output.css` à chaque modification. Ouvrez ensuite `index.html` dans votre navigateur (ou avec Live Server).

Avant de mettre en ligne sur GitHub Pages :

```bash
npm run build
```

Puis committez `dist/output.css` : GitHub Pages ne lance pas Tailwind pour vous.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Structure HTML de l'application |
| `tailwind.config.js` | Configuration du thème |
| `src/input.css` | Styles Tailwind |
| `dist/output.css` | CSS généré par Tailwind |
| `data.js` | Tableau `creatures` contenant les Pokémon |
| `script.js` | Fonctionnalités JavaScript |
| `design/` | Maquette de la version finale |

## À compléter par vous

- **Univers choisi :** Pokémon
- **Lien GitHub Pages :** à ajouter après le déploiement
- **Sources des images :** https://www.pokemon.com/
- **Tests des expressions régulières :**

| Champ | Valeurs valides | Valeurs invalides |
|---|---|---|
| Numéro | `#001`, `#125` | `001`, `#1234` |
| Nom | `Pikachu`, `Bulbasaur` | `A`, `@Pokemon` |
| Niveau | `Base`, `Stage 1` | `Niveau 1`, `Stage 3` |
| Statistiques | `25`, `999` | `-5`, `1000` |
| URL image | `https://example.com/pokemon.png`, `https://example.com/image.jpg` | `http://example.com/image.png`, `image.png` |
| Description | `Pokemon de type feu`, `Pokemon de type eau` | `Court`, une chaîne de 201 caractères |

- **Bonus réalisés :** Aucun

## Sources des images

Images des Pokémon : https://www.pokemon.com/