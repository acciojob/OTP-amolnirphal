//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("input", () => {
    if (code.value.length > 1) {
      code.value = code.value.slice(0, 1);
    }

    if (code.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      code.value = "";

      if (index > 0) {
        setTimeout(() => {
          codes[index - 1].focus();
        }, 0);
      }
    }
  });
});