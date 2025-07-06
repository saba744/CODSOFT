const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");

// Loop through all buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    let value = buttons[i].value;

    // handling if-else
    if (value === "AC") {
      display.value = ""; // clear display
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1); // Delete last character
    } else if (value === "=") {
      try {
        display.value = eval(display.value); // Perform calculation
      } catch {
        display.value = "Error"; // Handle invalid input
      }
    } else {
      display.value += value; // Append button value
    }
  };
}
