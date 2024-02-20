let apiURL = ""; // Declare apiURL outside the function to have access to it in multiple functions.

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "b0aa3bbe4a50o046t63f82874a31fac6";
  let prompt = "";
  let context = "";
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context={$context}&key={$apiKey}`;
}

axios.get(apiURL).then(displayPoem);

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
