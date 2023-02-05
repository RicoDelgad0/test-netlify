"use strict";

// Elements
const todoEl = document.querySelector("#input-todo");

const containertasks = document.querySelector("#list");

const allBtnIsDone = document.querySelectorAll("li");
const btnIsDone = document.querySelector("li");

const allBtnDelete = document.querySelectorAll(".button-done");
const btnDelete = document.querySelector(".button-done");

const allBtnCategory = document.querySelectorAll(".category");
const btnCategory = document.querySelector(".category");

// Fonction qui ajoute un élément à la liste
const addElementToList = (todoEl) => {
  // Vérification que le champ n'est pas vide
  if (todoEl.value) {
    // On crée la nouvelle tâche
    const html = `
      <li data-category="home" data-done="false">
          ${todoEl.value}
          <div class="button-done">❌</div>
        </li>
      `;
    return html;
  } else {
    // Ne retourne rien si le champ texte est vide
    const html = ``;
    return html;
  }
};

// Vérifier que la touche enter est pressée et, si c'est le cas, ajouter l'élément à la liste
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const todoEl = document.querySelector("#input-todo");
    const newtask = addElementToList(todoEl);
    // On insère la portion de HTML générée
    containertasks.insertAdjacentHTML("afterbegin", newtask);
    // On remplace le contenu du champ texte par du vide
    document.querySelector("#input-todo").value = "";
    // On ne cible plus le champ texte
    document.querySelector("#input-todo").blur();
  }
});

// Quand on clique sur un élément li, sa couleur change
allBtnIsDone.forEach((btnIsDone) => {
  btnIsDone.addEventListener("click", function (event) {
    event.preventDefault(event);
    // Si la tâche est faite, on la rend non-faite
    if (btnIsDone.dataset.done === "true") {
      btnIsDone.dataset.done = "false";
    } else {
      // Si la date est nonfaite, on la rend faite
      btnIsDone.dataset.done = "true";
    }
  });
});

// Quand on clique sur un bouton X, l'élément est supprimé
allBtnDelete.forEach((btnDelete) => {
  btnDelete.addEventListener("click", function (event) {
    event.preventDefault(event);
    // Supprime le code de son parent
    btnDelete.parentElement.outerHTML = "";
  });
});

// Clic sur une des catégories
allBtnCategory.forEach((btnCategory) => {
  btnCategory.addEventListener("click", function (event) {
    event.preventDefault(event);
    // Si la catégorie est sélectionnée, on la déséléctionne
    if (btnCategory.dataset.selected === "true") {
      btnCategory.dataset.selected = "false";
    } else {
      // Si elle n'est pas sélectionnée, on la sélectionne et désélectionne toutes les autres
      allBtnCategory.forEach((btnCategory) => {
        btnCategory.dataset.selected = "false";
      });
      btnCategory.dataset.selected = "true";
    }
  });
});
