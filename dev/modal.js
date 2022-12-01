function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      // Erreur, il faut donc ajouter un espace, sinon le nom de la class est topnavresponsive, et il n'existe pas
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // --------------------------------------------------------------------
  // DOM Elements -arbre des objets - Modèle de document chargé dans le navigateur
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const modalCloseBtn = document.querySelector(".close");
  const form = document.getElementById("form");
  const validForm = document.querySelector(".validationForm");
const btnSubmit =  document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalForm = document.querySelector("form[name=reserve]");
const successmodalbg = document.getElementById("success-modal");

 // --------------------------------------------------------------------
// Ouvrir modale evenement - Au clic:ouverture
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Fermer modale evenement - Au clic: fermeture
modalCloseBtn.addEventListener ("click", closeModal);


// Fonction pour afficher le formulaire
  function launchModal() {
    modalbg.style.display = "block"  
  };
// fonction pour fermer le formulaire
  function closeModal() {
    modalbg.style.display = "none";
};


// fonction pour fermer le message de succès
function closeModalBg() {
successmodalbg.style.display = "none";
};

// --------------------------------------------------------------------
// Vérification input PRÉNOM 
  function checkFirstname() {
    //selectionne l'id #first pour verification du prénom
    const checkFirstname = document.querySelector('#first');
    //selectionne l'id #error-firstName pour indiquer l'erreur
    const errorFirstName = document.querySelector('#error-firstName');
    
    //( si +=2 lettres alors message erreur ajouté
      if (checkFirstname.value.length >= 2){
     errorFirstName.classList.add("formConfirmation");
      return(true);
    } else {
     //, si -2 lettres alors message erreur affiché)
      errorFirstName.classList.remove("formConfirmation");
        return(false);
      }
  };

  //--------------------------------------------------------------------
  // Vérification input NOM 
  function checkLastName() {
    //selectionne l'id #last pour verification du nom
    const checkLastName = document.querySelector('#last');
    //selectionne l'id #error-lastName pour indiquer l'erreur
    const errorLastName = document.querySelector('#error-lastName');
    
    //( si +=2 lettres alors message erreur ajouté
      if (checkLastName.value.length >= 2){
     errorLastName.classList.add("formConfirmation");
      return(true);
      } else {
     //, si -2 lettres alors message erreur affiché)
      errorLastName.classList.remove("formConfirmation");
        return(false);
      }
  };

  //--------------------------------------------------------------------
// Vérification input EMAIL 
function checkEmail(inputText) {
  //selectionne l'id #email pour verification du mail
  const checkEmail = document.querySelector('#email');
  //selectionne l'id #error-email pour indiquer l'erreur
  const errorEmail = document.querySelector('#error-email');
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    // si le format de mail correspond avec la variable checkEmail
     if (checkEmail.value.match(mailformat)){
   errorEmail.classList.add("formConfirmation");
    return(true);
  } else {
   // si conditions pas remplies alors message erreur affiché)
    errorEmail.classList.remove("formConfirmation");
      return(false);
    }
};

//----------------------------------------------------------------------
// Vérification input DATE DE NAISSANCE
function checkBirthdate() {
  
    // On crée la date d'aujourd'hui (en ms depuis janvier 1970)
  const today = Date.now();

  //selectionne l'id #birthdate pour verification du mail
  const checkBirthdate = document.querySelector('#birthdate');
  
  //selectionne l'id #error-birthdate pour indiquer l'erreur
  const errorBirthdate = document.querySelector('#error-birthdate');
  const birthdateformat = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
   
  // On crée une nouvelle date naissance
  const newDate = new Date(checkBirthdate.value);
  
  // si conditions remplies et si date naissance < date d'aujourd'hui, alors message succès affiché)
    if (checkBirthdate.value.match(birthdateformat) && newDate < today){
   errorBirthdate.classList.add("formConfirmation");
    return(true);
  } else {
   // si conditions pas remplies alors message erreur affiché)
    errorBirthdate.classList.remove("formConfirmation");
    errorBirthdate.style.margin = "5px";
      return(false);
    }
};


//----------------------------------------------------------------------
// Vérification input TOURNOI - QUANTITÉ 
function checkQuantity() {
  //selectionne l'id #last pour verification du nom
  const checkQuantity = document.querySelector('#quantity');
  //selectionne l'id #error-lastName pour indiquer l'erreur
  const errorTournament = document.querySelector('#error-tournament');
  const quantityformat = /^[0-9]+$/;

  // si au moins un nombre alors pas de message erreur
    if (checkQuantity.value.match(quantityformat)){
   errorTournament.classList.add("formConfirmation");
    return(true);
    } else {
   // Si aucun chiffre alors message erreur affiché)
    errorTournament.classList.remove("formConfirmation");
      return(false);
    }
};

//--------------------------------------------------------------------
// Vérification input VILLES - LOCATION 
  const checkLocation = () => {
  const errorLocation = document.querySelector('#error-location');

  //( si au moins une ville cochée alors pas de message erreur
    if (document.querySelectorAll("input[name=location]:checked").length > 0) {
         errorLocation.classList.add("formConfirmation");
    return(true);
    } else {
   // si aucune case cochée alors message erreur affiché)
    errorLocation.classList.remove("formConfirmation");
      return(false);
    }
};

//--------------------------------------------------------------------
// Vérification CONDITIONS GÉNÉRALES
const checkCgu = () => {
const errorCondition = document.querySelector('#error-condition');

// si case cochée alors message erreur disparait
  if (document.getElementById("checkbox1").checked) {
          errorCondition.classList.add("formConfirmation");
     return(true);
     } else {
    // si aucune case cochée alors message erreur affiché)
     errorCondition.classList.remove("formConfirmation");
       return(false);
     }
 };
 
//----------------------------------------------------------------------
// Verification des conditions prévues
function checkCondition(condition){
  if(!condition) return false;
  else return true;
};

//--------------------------------------------------------------------
// Au clic sur le bouton "C'est parti", l'événement conserve les données
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  checkFirstname();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocation();
  checkCgu();
 
//--------------------------------------------------------------------
// si tous les champs sont remplis correctement 
 if (
  checkFirstname() &&
  checkLastName() &&
  checkEmail() &&
  checkBirthdate() &&
  checkQuantity() &&
  checkLocation() &&
  checkCgu()
) {
  // ----------------------------------------------------------------------
  
 // le message de confirmation apparait
  const successMsg = document.getElementById("success-modal");
  successMsg.style.display = "block";

  // le module background du formulaire se ferme
  modalbg.style.display = "none";

//---------------------------------------------------------------------------
// Fermer le module de confirmation
const closeConfirmationModal = document.getElementById("closeConfirmationModal");
closeConfirmationModal.addEventListener("click", closeModalBg);
}
} );

//--------------------------------------------------------------------
