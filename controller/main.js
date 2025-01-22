const bRange = document.getElementById("bRange");
const bValue = document.getElementById("bValue");

bRange.addEventListener("input", () => {
   const brigtness = bRange.value;
   document.body.style.background = `rgb(${brigtness * 2.55}, ${brigtness * 2.55})`;
   bValue.textContent = `${brigtness}%`;
});

function resetBrightness() {
   bRange.value = 50;
   document.body.style.background = `#808080`;
   bValue.textContent = "50%";
}