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
        avantage += `<div>
                        <img src="" alt="">
                        <p>${avantageClient}</p>
                    </div>`
    });
//// On boucle sur chaque activité et on l'injecte dans le Dom
    activite.forEach(info => {
        let nomActivite = info.nom
        let description = info.description
        let images = info.imageurl
        activity += `<div class="card container flex">
                 <div>
                    <img src="${images}" alt="">
                    <h3>${nomActivite}</h3>
                </div>
                <div>
                    <h4>Description : </h4>
                    <p>${description}</p>
                </div>
                </div>` 
    });

    //// On boucle sur chaque temoignage et on l'injecte dans le Dom
    temoignages.forEach(avis => {
        let prenom = avis.prenom
        let experience = avis.typeExperience
        let commentaire = avis.commentaire
        let note = avis.note
        avisclient +=`<div><!-- client 1-->
                    <div>
                        <p>${prenom}</p>
                        <p><i class="fa-solid fa-star" style="color: #000000;"></i>${note}/5</p>
                    </div>
                    <p>${experience}</p>
                    <p>${commentaire}</p>
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
                <div class="contenuHero">
                    <div>
                        <h2>${titre}</h2>
                        <h1>${accroche}</h1>
                    </div>
                    <a href="" title="Bouton de réservation">${appelAction}</a>
                </div>
            </section>
    `

        document.querySelector("#engagements").innerHTML +=
         `
            <h3>Nos engagements</h3>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate suscipit eveniet quam totam vitae
                    modi voluptatibus animi.</p>
                <div>
                    ${avantage}
                </div>
            </div>

        `

        document.querySelector("#avis").innerHTML +=
        `
            <h3>Avis clients</h3>
            <div>
                ${avisclient}
            </div>

        `
}