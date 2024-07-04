const suggestionsData = [
  "Мелитополь",
  "Бердянск",
  "Мариуполь",
  "Донецк",
  "Луганск",
  "Киев",
  "Днепр",
  "Полтава",
  "Харьков",
  "Львов",
  "Житомир",
  "Польша",
  "Варшава",
  "Германия",
  "Берлин",
  "Чехия",
  "Литва",
  "Латвия",
  "Эстония",
];

function showSuggestions(input, suggestionsContainer) {
  const inputValue = input.value.toLowerCase();
  suggestionsContainer.innerHTML = "";
  if (inputValue) {
    const filteredSuggestions = suggestionsData.filter((item) =>
      item.toLowerCase().includes(inputValue)
    );
    filteredSuggestions.forEach((item) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = item;
      suggestionItem.addEventListener("click", () => {
        input.value = item;
        suggestionsContainer.innerHTML = "";
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
  }
}

const inputA = document.getElementById("inputA");
const suggestionsA = document.getElementById("suggestionsA");
inputA.addEventListener("input", () => showSuggestions(inputA, suggestionsA));
inputA.addEventListener("focus", () => showSuggestions(inputA, suggestionsA));
inputA.addEventListener("blur", () => {
  setTimeout(() => (suggestionsA.innerHTML = ""), 100);
});

const inputB = document.getElementById("inputB");
const suggestionsB = document.getElementById("suggestionsB");
inputB.addEventListener("input", () => showSuggestions(inputB, suggestionsB));
inputB.addEventListener("focus", () => showSuggestions(inputB, suggestionsB));
inputB.addEventListener("blur", () => {
  setTimeout(() => (suggestionsB.innerHTML = ""), 100);
});
