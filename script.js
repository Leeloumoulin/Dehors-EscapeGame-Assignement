// Étape 1: Charger les données à partir du fichier JSON
// Utiliser la méthode fetch pour récupérer le fichier "escape-game.json"
fetch('escape-game.json')
    .then((rep) => // Lorsque la réponse est reçue
        rep.json()) // Convertir la réponse en JSON
    .then(informations => { // Lorsque les données JSON sont prêtes
        // Appeler la fonction affiche() avec les données récupérées
        affiche(informations);
    });

// Étape 2: Définir la fonction pour afficher les données dans la page HTML
function affiche(infos) {
    // Récupérer les données de l'objet JSON
    titre = infos.nomCommercial
    accroche = infos.phraseAccroche
    appelAction = infos.texteAppelAction
    avantages = infos.avantagesClients
    activite = infos.activites
    temoignages = infos.temoignages

    // Initialiser les variables pour stocker les sections HTML à injecter
    avisclient = ""
    activity = ""
    avantage = ""

    // Étape 3: Générer les avantages clients
    // Boucler sur chaque avantage et ajouter un élément HTML pour chaque avantage
    avantages.forEach(avantageClient => {
        // Ajouter chaque avantage dans la variable 'avantage'
        avantage += `<div class="w30 avantage">
                        <p>${avantageClient}</p>
                    </div>`
    });

    // Étape 4: Générer les activités
    // Boucler sur chaque activité et ajouter un élément HTML pour chaque activité
    activite.forEach(info => {
        nomActivite = info.nom
        description = info.description
        images = info.imageurl
        activity += `<div class="card container flex" data-aos="fade-up-right">
                        <div class="image-container">
                            <img src="${images}" alt="Image de l'activité ${nomActivite}">
                            <h4 class="glow">${nomActivite}</h4>
                        </div>
                        <div class="description">
                            <h4>L'activité:</h4>
                            <p>${description}</p>
                            <a href="" title="Bouton vers l'activité" class="btnInfos" target="_blank">En savoir plus</a>
                        </div>
                    </div>`;
    });

    // Étape 5: Générer les témoignages
    // Boucler sur chaque témoignage et ajouter un élément HTML pour chaque témoignage
    temoignages.forEach(avis => {
        prenom = avis.prenom
        experience = avis.typeExperience
        commentaire = avis.commentaire
        note = avis.note
        avisclient += `<div class="cardClient card-body">
                        <div class="card-title">
                            <p>${prenom}</p>
                            <p><i class="fa-solid fa-star" style="color: white;"></i>${note}/5</p>
                        </div>
                        <div class="card-text">
                            <p class="exp">${experience}</p>
                            <p>${commentaire}</p>
                        </div>
                    </div>`;
    });

    // Étape 6: Injecter les données dans le DOM
    // Injecter les activités, la section hero, les avantages et les avis dans leurs sections respectives du DOM

    document.querySelector("#activites").innerHTML +=
        `<h3>Activités</h3>
         <div class="actCard">
            ${activity}
         </div>`;

    document.querySelector(".hero").innerHTML +=
        `<section class="container">
            <div class="contenuHero alignCenter">
                <div>
                    <h2 class="heroTxt">${titre}</h2>
                    <h1 class="heroTxt2">${accroche}</h1>
                </div>
                <a href="" title="Bouton de réservation" class="btnInfos" target="_blank">${appelAction}</a>
            </div>
        </section>`;

    document.querySelector("#engagements").innerHTML +=
        `<div class="engageFlex space">
            ${avantage}
        </div>`;

    document.querySelector("#avis").innerHTML +=
        `<div class="flex gap space">
            ${avisclient}
        </div>`;

    // Initialiser les animations avec AOS
    AOS.init();
}
