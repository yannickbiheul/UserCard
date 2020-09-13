// Variables Prénom
let casePrenom = document.getElementById('prenom');
let aidePrenom = document.getElementById('aidePrenom');
let userPrenom = "";
// Variables Nom
let caseNom = document.getElementById('nom');
let aideNom = document.getElementById('aideNom');
let userNom = "";
// Variables Age
let caseAge = document.getElementById('age');
let aideAge = document.getElementById('aideAge');
let userAge = "";
// Variables Email
let caseEmail = document.getElementById('email');
let aideEmail = document.getElementById('aideEmail');
let userEmail = "";
// Variables Adresse
let caseAdresse = document.getElementById('adresse');
let aideAdresse = document.getElementById('aideAdresse');
let userAdresse = "";
// Variables résultats
let resultPrenom = document.getElementById('resultPrenom');
let resultNom = document.getElementById('resultNom');
let resultAge = document.getElementById('resultAge');
let resultEmail = document.getElementById('resultEmail');
let resultAdresse = document.getElementById('resultAdresse');
// Variables regex
let regexEmail = /.+@.+\..+/;
let regexAdresse = /[0-9].+[a-z].+[0-9].+[a-z]/;

function recupId(nom, id) {
    nom = document.getElementById(id);
}
recupId('essai', 'essai');
essai.textContent = "COUCOU !";

// Vérifications Prénom
casePrenom.addEventListener('input', function(e) {
    userPrenom = e.target.value;
    if (userPrenom.length < 3) {
        aidePrenom.style.color = "#F44336";
        aidePrenom.textContent = "Prénom trop court !";
    } else {
        aidePrenom.style.color = "#4CAF50";
        aidePrenom.textContent = "Prénom correct !";
        resultPrenom.textContent = userPrenom;
    }
});

// Vérification Nom
caseNom.addEventListener('input', function(e) {
    userNom = e.target.value;
    if (userNom.length < 3) {
        aideNom.style.color = "#F44336";
        aideNom.textContent = "Nom trop court !";
    } else {
        aideNom.style.color = "#4CAF50";
        aideNom.textContent = "Nom correct !";
        resultNom.textContent = userNom;
    }
})

// Vérification Age
caseAge.addEventListener('input', function(e) {
    userAge = e.target.value;
    if (userAge >= 18) {
        aideAge.style.color = "#4CAF50";
        aideAge.textContent = "Vous êtes majeur, vous pouvez continuer !";
        resultAge.textContent = userAge + " ans";
    } else {
        aideAge.style.color = "#F44336";
        aideAge.textContent = "Vous êtes mineur, barrez-vous d'ici !";
    }
})

// Vérification Email
caseEmail.addEventListener('input', function(e) {
    userEmail = e.target.value;
    if (!regexEmail.test(userEmail)) {
        aideEmail.style.color = "#F44336";
        aideEmail.textContent = "Email invalide !";
    } else {
        aideEmail.style.color = "#4CAF50";
        aideEmail.textContent = "Email valide !";
        resultEmail.textContent = userEmail;
    }
})

// Vérification Adresse
caseAdresse.addEventListener('input', function(e) {
    userAdresse = e.target.value;
    if (!regexAdresse.test(userAdresse)) {
        aideAdresse.style.color = "#F44336";
        aideAdresse.textContent = "Adresse invalide !";
    } else {
        aideAdresse.style.color = "#4CAF50";
        aideAdresse.textContent = "Adresse valide !";
        resultAdresse.textContent = userAdresse;
    }
})