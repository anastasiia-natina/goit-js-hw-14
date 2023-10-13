const counterValue = 0; 
const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");
const incrementButton = counter.querySelector("[data-action='increment']");
const decrementButton = counter.querySelector("[data-action='decrement']");

function updateCounterUI() {
  valueSpan.textContent = counterValue;
}

function incrementCounter() {
  counterValue += 1;
  updateCounterUI();
}

function decrementCounter() {
  counterValue -= 1;
  updateCounterUI();
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);

updateCounterUI();