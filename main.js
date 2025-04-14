let display = document.getElementById("display");
let memory = 0;

function appendValue(val) {
  if (display.value === "0" || display.value === "Error") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "0";
}

function backspace() {
  display.value = display.value.slice(0, -1) || "0";
}

function square() {
  display.value = Math.pow(eval(display.value), 2);
}

function squareRoot() {
  display.value = Math.sqrt(eval(display.value));
}

function plusMinus() {
  display.value = eval(display.value) * -1;
}

function percentage() {
  display.value = eval(display.value) / 100;
}

// Memory
function memoryAdd() {
  memory += parseFloat(display.value) || 0;
}
function memorySubtract() {
  memory -= parseFloat(display.value) || 0;
}
function memoryStore() {
  memory = parseFloat(display.value) || 0;
}
function memoryRecall() {
  display.value = memory;
}
function memoryClear() {
  memory = 0;
}

// Keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
