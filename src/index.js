function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Putting pen to paper, poetry in motion",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
