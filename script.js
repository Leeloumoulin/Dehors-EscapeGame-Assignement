fetch('escape-game.json')
.then((rep) =>
    rep.json())
.then(informations => {
    // Affiche les données
    affiche(informations);
});

// Rôle : Afficher une donnée dans la page HTML 
// Paramètre : "infos", 
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)


//on range chaque élément dans une variable
//on boucle sur chaque étape à injecter + sur les sous catégories 

function affiche(infos){
    let titre = infos.nomCommercial
    let accroche = infos.phraseAccroche
    let appelAction = infos.texteAppelAction
    let avantages = infos.avantagesClients
    let activite = infos.activites
    let temoignages = infos.temoignages
    let avisclient = ""
    let activity = ""
    let avantage = ""


    // On boucle sur chaque avantage et on l'injecte dans le Dom
    avantages.forEach(avantageClient => {
        avantage += `<div class="w30 avantage">
                        <p>${avantageClient}</p>
                    </div>`
    });
//// On boucle sur chaque activité et on l'injecte dans le Dom
    activite.forEach(info => {
        let nomActivite = info.nom
        let description = info.description
        let images = info.imageurl
        activity += `<div class="card container flex">
                 <div class="image-container">
                    <img src="${images}" alt="Image de l'activité ${nomActivite}">
                    <h4 class="glow">${nomActivite}</h4>
                 </div>
                 <div class="description">
                    <h4>L'activité: </h4>
                    <p>${description}</p>
                    <a href="" title="Bouton vers l'activité" class="btnInfos" target="_blank">En savoir plus</a>
                 </div>
            </div>`;

    });

    //// On boucle sur chaque temoignage et on l'injecte dans le Dom
    temoignages.forEach(avis => {
        let prenom = avis.prenom
        let experience = avis.typeExperience
        let commentaire = avis.commentaire
        let note = avis.note
        avisclient +=`<div class="cardClient card-body"><!-- client-->
                    <div class="card-title">
                        <p>${prenom}</p>
                        <p><i class="fa-solid fa-star" style="color: white; width: 20px;"></i>${note}/5</p>
                    </div>
                    <div class="card-text">
                    <p class="exp">${experience}</p>
                    <p>${commentaire}</p>
                    </div>
                </div>`
    });


    // On injecte les autres données dans le dom par section
    document.querySelector("#activites").innerHTML += 
    `
    <h3>Activités</h3>
                <div class="actCard">
                    ${activity}
                </div>
    `
    document.querySelector(".hero").innerHTML += 
    `
                <section class="container">
                <div class="contenuHero alignCenter">
                    <div>
                        <h2 class="heroTxt">${titre}</h2>
                        <h1 class="heroTxt2">${accroche}</h1>
                    </div>
                    <a href="" title="Bouton de réservation" class="btnInfos" target="_blank">${appelAction}</a>
                </div>
            </section>
    `

        document.querySelector("#engagements").innerHTML +=
         `

                <div class="engageFlex space">
                    ${avantage}
                </div>

        `

        document.querySelector("#avis").innerHTML +=
        `
            <div class="flex gap space">
                ${avisclient}
            </div>

        `
}