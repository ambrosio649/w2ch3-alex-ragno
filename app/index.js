const elementValue = document.getElementById("valor");
let value = 0;

const refreshValue = () => {
  elementValue.textContent = value;
  document.getElementById("decrementar").disabled = value === 0;
  document.getElementById("incrementar").disabled = value === 10;
}

document.getElementById("incrementar").addEventListener("click", () => {
  if (value < 10) {
    value++;
    refreshValue();
  }
});

document.getElementById("decrementar").addEventListener("click", () => {
  if (value > 0) {
    value--;
    refreshValue();
  }
});

document.getElementById("reiniciar").addEventListener("click", () => {
  value = 0;
  refreshValue();
});
