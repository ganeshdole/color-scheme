const favColor = document.getElementById("favColor");
const mode = document.getElementById("mode");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${favColor.value.slice(1)}&mode=${
      mode.value
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("scheme").innerHTML = data.colors
        .map((color) => {
          return `<div style="background-color: ${color.hex.value}; width: 300px; height: 40px; mix-blend-mode: difference;
          color:white;">${color.hex.value}</div>`;
        })
        .join(" ");
    });
});
