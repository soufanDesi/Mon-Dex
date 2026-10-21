// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.

const creatures = [
    {
        id: "#001",
        name: "Bulbasaur",
        type: "Grass",
        level: "Base",
        stats: { hp: 45, attack: 49, defence: 49 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        description: "Une graine est présente sur son dos dès sa naissance et grandit avec lui."
    },
    {
        id: "#002",
        name: "Ivysaur",
        type: "Grass",
        level: "Stage 1",
        stats: { hp: 60, attack: 62, defence: 63 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",
        description: "Le bulbe sur son dos devient si grand qu'il a du mal à se tenir sur ses pattes arrière."
    },
    {
        id: "#003",
        name: "Venusaur",
        type: "Grass",
        level: "Stage 2",
        stats: { hp: 80, attack: 82, defence: 83 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
        description: "La plante sur son dos fleurit en absorbant l'énergie du soleil."
    },
    {
        id: "#004",
        name: "Charmander",
        type: "Fire",
        level: "Base",
        stats: { hp: 39, attack: 52, defence: 43 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
        description: "Il préfère les endroits chauds et sa queue peut dégager de la vapeur sous la pluie."
    },
    {
        id: "#005",
        name: "Charmeleon",
        type: "Fire",
        level: "Stage 1",
        stats: { hp: 58, attack: 64, defence: 58 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",
        description: "Il utilise ses griffes acérées et devient particulièrement agressif au combat."
    },
    {
        id: "#006",
        name: "Charizard",
        type: "Fire",
        level: "Stage 2",
        stats: { hp: 78, attack: 84, defence: 78 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",
        description: "Il vole dans le ciel et crache des flammes capables de faire fondre la roche."
    },
    {
        id: "#007",
        name: "Squirtle",
        type: "Water",
        level: "Base",
        stats: { hp: 44, attack: 48, defence: 65 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        description: "Il se protège dans sa carapace avant de projeter de l'eau vers ses adversaires."
    },
    {
        id: "#008",
        name: "Wartortle",
        type: "Water",
        level: "Stage 1",
        stats: { hp: 59, attack: 63, defence: 80 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png",
        description: "Sa longue queue touffue est considérée comme un symbole de longévité."
    },
    {
        id: "#009",
        name: "Blastoise",
        type: "Water",
        level: "Stage 2",
        stats: { hp: 79, attack: 83, defence: 100 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png",
        description: "Ses canons installés sur sa carapace projettent de puissants jets d'eau."
    },
    {
        id: "#010",
        name: "Caterpie",
        type: "Bug",
        level: "Base",
        stats: { hp: 45, attack: 30, defence: 35 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png",
        description: "Ses petites pattes munies de ventouses lui permettent de grimper sur les murs et les pentes."
    },
    {
        id: "#011",
        name: "Metapod",
        type: "Bug",
        level: "Stage 1",
        stats: { hp: 50, attack: 20, defence: 55 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png",
        description: "Sa carapace protège son corps fragile pendant sa transformation."
    },
    {
        id: "#012",
        name: "Butterfree",
        type: "Bug",
        level: "Stage 2",
        stats: { hp: 60, attack: 45, defence: 50 },
        image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png",
        description: "Ses ailes sont recouvertes d'une poudre qui lui permet de voler même sous la pluie."
    }];