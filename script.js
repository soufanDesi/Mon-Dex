// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte Gitwb Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------

const grid = document.querySelector("#grid");

function afficherPokemon(liste = creatures) {
    grid.innerHTML = "";
    const creatureCount = document.querySelector("#creature-count");
    creatureCount.textContent = creatures.length;
    liste.forEach(function (pokemon) {
        const card = document.createElement("article");
        card.dataset.id = pokemon.id;
        card.className = "flex flex-col gap-3 rounded-xl bg-white p-3 pb-4 hover:-translate-y-1 transition-transform duration-500";
        const total = pokemon.stats.hp + pokemon.stats.attack + pokemon.stats.defence;

        card.innerHTML = `
            <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
                <img src="${pokemon.image}" alt="${pokemon.name}" class="h-32 w-32">
                <span class="absolute left-3 top-2 font-mono text-sm text-muted">${pokemon.id}</span>
            </div>

            <div class="flex items-center justify-between gap-2">
                <h2 class="font-display text-xl font-semibold">${pokemon.name}</h2>
                <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${pokemon.type}</span>
            </div>

            <p class="text-sm text-muted">${pokemon.level} · Total ${total}</p>

            <button type="button" class="btn-outline">Ajouter à l'équipe</button> `;

        grid.appendChild(card);
    }
    );
}

afficherPokemon();




// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------

// x hidden panu
const detail = document.querySelector("#detail");
const closeDetail = document.querySelector("#close-detail");

closeDetail.addEventListener("click", function () {
    detail.classList.add("hidden");
});



grid.addEventListener("click", function (event) {
    const card = event.target.closest("article");

    if (!card) return;
    detail.classList.remove("hidden");
    const pokemon = creatures.find(function (item) {
        return item.id === card.dataset.id;
    });
    // name
    const detailName = document.querySelector("#detail-name");
    detailName.textContent = pokemon.name;

    // image
    const detailImage = document.querySelector("#detail-image");
    detailImage.src = pokemon.image;
    detailImage.alt = pokemon.name;

    // description
    const detaildesc = document.querySelector("#detail-description");
    detaildesc.textContent = pokemon.description

    // type
    const detailType = document.querySelector("#detail-type");
    detailType.textContent = pokemon.type;

    const detailHp = document.querySelector("#detail-hp");
    detailHp.textContent = pokemon.stats.hp;
    const hpBar = document.querySelector("#detail-hp-bar");
    hpBar.style.width = pokemon.stats.hp + "%";

    const detailAttq = document.querySelector("#detail-attack");
    detailAttq.textContent = pokemon.stats.attack;
    const attackBar = document.querySelector("#detail-attack-bar");
    attackBar.style.width = pokemon.stats.attack + "%";

    const detaildefence = document.querySelector("#detail-defence");
    detaildefence.textContent = pokemon.stats.defence;
    const defenceBar = document.querySelector("#detail-defence-bar");
    defenceBar.style.width = pokemon.stats.defence + "%";



    // push card Ajouter
    if (event.target.tagName === "BUTTON") {
        if (equipe.length >= 6) {
            alert("Votre équipe est complète !");
            return;
        } else {
            const existe = equipe.some(function (item) {
                return item.id === pokemon.id;
            });

            if (existe) {
                alert("Ce Pokémon est déjà dans votre équipe !");
                return;
            } else {
                equipe.push(pokemon);
                afficherEquipe();
            }
        }
    }

});


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------
const searchInput = document.querySelector("#search");
let typeActif = "All";

function rechercher() {
    const texte = searchInput.value.toLowerCase();
    const resultat = creatures.filter(function (pokemon) {
        return pokemon.name.toLowerCase().includes(texte) && (typeActif === "All" || pokemon.type === typeActif);
    });
    afficherPokemon(resultat);
}

searchInput.addEventListener("input", rechercher);





// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------
const filters = document.querySelector("#filters");

filters.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;
    typeActif = event.target.textContent.trim();

    const buttons = filters.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.classList.remove("bg-ink", "text-white", "border-ink");
    });
    event.target.classList.add("bg-ink", "text-white", "border-ink");
    rechercher();
});
// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------
const equipe = [];
const teamGrid = document.querySelector("#team-grid");

function afficherEquipe() {
    teamGrid.innerHTML = "";

    const teamCount = document.querySelector("#team-count");
    teamCount.textContent = equipe.length;

    const sectionCount = document.querySelector("#team-section-count");
    sectionCount.textContent = equipe.length;

    equipe.forEach(function (pokemon) {

        const card = document.createElement("article");
        card.dataset.id = pokemon.id;
        card.className = "flex flex-col gap-3 rounded-xl bg-white p-3 pb-4 transition-transform duration-300 hover:-translate-y-1";

        card.innerHTML = `
            <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
                <img src="${pokemon.image}" alt="${pokemon.name}" class="h-32 w-32">
                <span class="absolute left-3 top-2 font-mono text-sm text-muted">${pokemon.id}</span>
            </div>

            <div class="flex items-center justify-between gap-2">
                <h2 class="min-w-0 font-display text-lg font-semibold">${pokemon.name}</h2>
                <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${pokemon.type}</span>
            </div>

            <button type="button" class="btn-outline">Retirer</button> `;

        teamGrid.appendChild(card);
    })
}

teamGrid.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const card = event.target.closest("article");
        const id = card.dataset.id;

        const index = equipe.findIndex(function (pokemon) {
            return pokemon.id === id;
        });

        if (index !== -1) {
            equipe.splice(index, 1);
            afficherEquipe();
        }
    }
});
// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------

const Numéro = document.querySelector('input[name="id"]');
const regexNumero = /^#\d{3}$/;
const message = document.querySelector(".error-message");

Numéro.addEventListener("blur", function () {
    if (regexNumero.test(Numéro.value)) {
        console.log("Numéro valide");
        Numéro.classList.remove("border-red-500");
        Numéro.classList.add("border-green-500");
        message.textContent = "";
    } else {
        console.log("Numéro invalide");
        Numéro.classList.remove("border-green-500");
        Numéro.classList.add("border-red-500");
        message.textContent = "Le numéro doit être au format #001";
    }
}
);

const Name = document.querySelector('input[name="name"]');
const regexName = /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/;
const messageName = Name.nextElementSibling;

Name.addEventListener("blur", function () {
    if (regexName.test(Name.value)) {
        console.log("Name valide");
        Name.classList.remove("border-red-500");
        Name.classList.add("border-green-500");
        messageName.textContent = "";
    } else {
        console.log("Name invalide");
        Name.classList.remove("border-green-500");
        Name.classList.add("border-red-500");
        messageName.textContent = "Nom invalide";
    }
}
);


const type = document.querySelector('select[name="type"]');
const messageType = type.nextElementSibling;

type.addEventListener("blur", function () {
    if ((type.value) !== "") {
        type.classList.remove("border-red-500");
        type.classList.add("border-green-500");
        messageType.textContent = "";
    } else {
        type.classList.remove("border-green-500")
        type.classList.add("border-red-500");
        messageType.textContent = "Veuillez choisir un type";
    }
});


const niveau = document.querySelector('input[name="level"]');
const messageLevel = niveau.nextElementSibling;

const regexLevel = /^(Base|Stage 1|Stage 2)$/i;

niveau.addEventListener("blur", function () {
    if (regexLevel.test(niveau.value)) {
        niveau.classList.remove("border-red-500");
        niveau.classList.add("border-green-500");
        messageLevel.textContent = "";
    } else {
        niveau.classList.remove("border-green-500");
        niveau.classList.add("border-red-500");
        messageLevel.textContent = "Veuillez saisir Base, Stage 1 ou Stage 2";
    }
})


const statis1 = document.querySelector('input[name="stat1"]');
const messageStatis1 = statis1.nextElementSibling;
const regexStatis = /^\d{1,3}$/;
statis1.addEventListener("blur", function () {
    if (regexStatis.test(statis1.value)) {
        statis1.classList.remove("border-red-500");
        statis1.classList.add("border-green-500");
        messageStatis1.textContent = "";
    } else {
        statis1.classList.remove("border-green-500");
        statis1.classList.add("border-red-500");
        messageStatis1.textContent = "Veuillez saisir un entier entre 0 et 999";
    }
})


const statis2 = document.querySelector('input[name="stat2"]');
const messageStatis2 = statis2.nextElementSibling;

statis2.addEventListener("blur", function () {
    if (regexStatis.test(statis2.value)) {
        statis2.classList.remove("border-red-500");
        statis2.classList.add("border-green-500");
        messageStatis2.textContent = "";
    } else {
        statis2.classList.remove("border-green-500");
        statis2.classList.add("border-red-500");
        messageStatis2.textContent = "Veuillez saisir un entier entre 0 et 999";
    }
})

const statis3 = document.querySelector('input[name="stat3"]');
const messageStatis3 = statis3.nextElementSibling;

statis3.addEventListener("blur", function () {
    if (regexStatis.test(statis3.value)) {
        statis3.classList.remove("border-red-500");
        statis3.classList.add("border-green-500");
        messageStatis3.textContent = "";
    } else {
        statis3.classList.remove("border-green-500");
        statis3.classList.add("border-red-500");
        messageStatis3.textContent = "Veuillez saisir un entier entre 0 et 999";
    }
})

const lienImage = document.querySelector('input[name="image"]');
const messageImage = lienImage.nextElementSibling;
const regexImage = /^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;
lienImage.addEventListener("blur", function () {
    if (regexImage.test(lienImage.value)) {
        lienImage.classList.remove("border-red-500");
        lienImage.classList.add("border-green-500");
        messageImage.textContent = "";
    } else {
        lienImage.classList.remove("border-green-500");
        lienImage.classList.add("border-red-500");
        messageImage.textContent = "URL invalide";
    }
})

const description = document.querySelector('textarea[name="description"]');
const messageDesc = description.nextElementSibling;
const regexDesc = /^[\s\S]{10,200}$/;

description.addEventListener("blur", function () {
    if (regexDesc.test(description.value)) {
        description.classList.remove("border-red-500");
        description.classList.add("border-green-500");
        messageDesc.textContent = "";
    } else {
        description.classList.remove("border-green-500");
        description.classList.add("border-red-500");
        messageDesc.textContent = "10 à 200 caractères";

    }
})


const form = document.querySelector('#creature-form');
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let formValide = true;

    if (regexName.test(Name.value)) {
        console.log("Name valide");
        Name.classList.remove("border-red-500");
        Name.classList.add("border-green-500");
        messageName.textContent = "";
    } else {
        console.log("Name invalide");
        formValide = false;
        Name.classList.remove("border-green-500");
        Name.classList.add("border-red-500");
        messageName.textContent = "Nom invalide";
    }

    const idExiste = creatures.some(function (pokemon) {
        return pokemon.id === Numéro.value;
    });

    if (!regexNumero.test(Numéro.value)) {
        formValide = false;
        Numéro.classList.remove("border-green-500");
        Numéro.classList.add("border-red-500");
        message.textContent = "Le numéro doit être au format #001";

    } else if (idExiste) {
        formValide = false;
        Numéro.classList.remove("border-green-500");
        Numéro.classList.add("border-red-500");
        message.textContent = "Cet ID existe déjà !";

    } else {
        Numéro.classList.remove("border-red-500");
        Numéro.classList.add("border-green-500");
        message.textContent = "";
    }

    if (type.value !== "") {
        console.log("Type valide");
        type.classList.remove("border-red-500");
        type.classList.add("border-green-500");
        messageType.textContent = "";
    } else {
        console.log("Type invalide");
        formValide = false;
        type.classList.remove("border-green-500")
        type.classList.add("border-red-500");
        messageType.textContent = "Veuillez choisir un type";
    }

    if (regexLevel.test(niveau.value)) {
        console.log("Niveau valide");
        niveau.classList.remove("border-red-500");
        niveau.classList.add("border-green-500");
        messageLevel.textContent = "";
    } else {
        console.log("Niveau invalide");
        formValide = false;
        niveau.classList.remove("border-green-500");
        niveau.classList.add("border-red-500");
        messageLevel.textContent = "Veuillez saisir Base, Stage 1 ou Stage 2";
    }

    if (regexStatis.test(statis1.value)) {
        console.log("Statistique 1 valide");
        statis1.classList.remove("border-red-500");
        statis1.classList.add("border-green-500");
        messageStatis1.textContent = "";
    } else {
        console.log("Statistique 1 invalide");
        formValide = false;
        statis1.classList.remove("border-green-500");
        statis1.classList.add("border-red-500");
        messageStatis1.textContent = "Veuillez saisir un entier entre 0 et 999";
    }

    if (regexStatis.test(statis2.value)) {
        console.log("Statistique 2 valide");
        statis2.classList.remove("border-red-500");
        statis2.classList.add("border-green-500");
        messageStatis2.textContent = "";
    } else {
        console.log("Statistique 2 invalide");
        formValide = false;
        statis2.classList.remove("border-green-500");
        statis2.classList.add("border-red-500");
        messageStatis2.textContent = "Veuillez saisir un entier entre 0 et 999";
    }

    if (regexStatis.test(statis3.value)) {
        console.log("Statistique 3 valide");
        statis3.classList.remove("border-red-500");
        statis3.classList.add("border-green-500");
        messageStatis3.textContent = "";
    } else {
        console.log("Statistique 3 invalide");
        formValide = false;
        statis3.classList.remove("border-green-500");
        statis3.classList.add("border-red-500");
        messageStatis3.textContent = "Veuillez saisir un entier entre 0 et 999";
    }

    if (regexImage.test(lienImage.value)) {
        console.log("Image valide");
        lienImage.classList.remove("border-red-500");
        lienImage.classList.add("border-green-500");
        messageImage.textContent = "";
    } else {
        console.log("Image invalide");
        formValide = false;
        lienImage.classList.remove("border-green-500");
        lienImage.classList.add("border-red-500");
        messageImage.textContent = "URL invalide";
    }

    if (regexDesc.test(description.value)) {
        console.log("description valide");
        description.classList.remove("border-red-500");
        description.classList.add("border-green-500");
        messageDesc.textContent = "";
    } else {
        console.log("description invalide");
        formValide = false;
        description.classList.remove("border-green-500");
        description.classList.add("border-red-500");
        messageDesc.textContent = "10 à 200 caractères";

    }

    if (formValide) {
        console.log("Formulaire valide");
    } else {
        console.log("Formulaire invalide");
        return
    }

    const nouveauPokemon = {
        id: Numéro.value,
        name: Name.value,
        type: type.value,
        level: niveau.value,
        stats: { hp: Number(statis1.value), attack: Number(statis2.value), defence: Number(statis3.value) },
        image: lienImage.value,
        description: description.value,
    };

    creatures.push(nouveauPokemon);
    afficherPokemon();
})







// stork remove
form.addEventListener("reset", function () {
    const inputs = form.querySelectorAll("input, select, textarea");

    inputs.forEach(function (input) {
        input.classList.remove("border-red-500", "border-green-500");
    });

    const messages = form.querySelectorAll(".error-message");

    messages.forEach(function (message) {
        message.textContent = "";
    });
});