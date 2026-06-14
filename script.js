//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      }
    }
  });
});

codes[0].focus();