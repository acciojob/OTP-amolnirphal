//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        code.value = code.value.slice(0, 1);

        if (code.value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (code.value === "" && index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            } else {
                code.value = "";
            }
        }
    });
});

codes[0].focus();