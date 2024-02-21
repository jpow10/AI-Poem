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

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b0aa3bbe4a50o046t63f82874a31fac6";
  let context = "Please generate a short poem about $(instructionsInput.value)";
  let prompt = `User instructions. You are a romantic poem expert and love to write short poems. Your goal is to generate only a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
