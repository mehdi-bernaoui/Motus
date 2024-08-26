var mots = [{"mot":"risque"},{"mot":"actuel"},{"mot":"cheval"},{"mot":"paquet"},{"mot":"examen"},{"mot":"buveur"},{"mot":"cabine"}];

var mot_motus = mots[Math.floor(Math.random() * mots.length)].mot;
var longueur_mot = mot_motus.length;

document.getElementById('indice').textContent = "Devinez le mot Motus. Les deux premieres lettres du mot sont : " + mot_motus[0] + " et " + mot_motus[1];

var grille = document.getElementById('grille');
for (var i = 0; i < longueur_mot; i++) {
    var caseGrille = document.createElement('div');
    caseGrille.classList.add('case');
    grille.appendChild(caseGrille);
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var proposition = document.getElementById('proposition').value;

    if (proposition.length != longueur_mot) {
        document.getElementById('message').textContent = "La proposition doit avoir " + longueur_mot + " lettres.";
        return;
    }

    if (proposition == mot_motus) {
        document.getElementById('message').textContent = "Félicitations, vous avez trouvé le mot secret !";
        return;
    }

    var reponse = "";
    for (var i = 0; i < longueur_mot; i++) {
        if (proposition[i] == mot_motus[i]) {
            grille.children[i].textContent = proposition[i];
            grille.children[i].style.backgroundColor = 'green';
            reponse += proposition[i];
        } else if (mot_motus.includes(proposition[i])) {
            grille.children[i].textContent = proposition[i];
            grille.children[i].style.backgroundColor = 'yellow';
            reponse += '_';
        } else {
            grille.children[i].textContent = proposition[i];
            grille.children[i].style.backgroundColor = 'red';
            reponse += '_';
        }
    }

    document.getElementById('proposition').value = reponse;
});
