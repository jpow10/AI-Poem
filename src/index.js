function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b0aa3bbe4a50o046t63f82874a31fac6";
  let context = `Please generate a short poem about ${instructionsInput.value}`;
  let prompt = `You are a poet and love to write short poems.  Your mission is to generate a 4 line poem and seperate each line with a <br />.  Do not include a title to the poem.  Make sure to follow the user instructions.  Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  poemElement.innerHTML = `SheCodes AI is crafting your ${instructionsInput.value} poem`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
