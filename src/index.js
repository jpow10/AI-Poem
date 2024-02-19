function generatePoem(event) {
  event.preventDefault();
}

alert("crafting your poem");

let poemFormElement = documentQuerySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
