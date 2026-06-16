//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// Focus on the first input
codes[0].focus();

codes.forEach((code, index) => {

  // Move to next box after typing
  code.addEventListener("input", (e) => {
    code.value = code.value.slice(0, 1);

    if (code.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  // Handle backspace
  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        code.value = "";
      }
    }
  });
});