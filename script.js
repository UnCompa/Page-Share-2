window.addEventListener("keydown", (e) => {
  if (e.key == "m") {
    document.getElementById("btn1").addEventListener("click", () => {
      modalTitle.textContent = "Algo especial";
      modalMessage.textContent = "¡Hola! Este es un saludo.";
      modal.style.display = "block";
    });
  }
});
// Get modal elements
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");

// Button event listeners
document.getElementById("btn1").addEventListener("click", () => {
  modalTitle.textContent = "Saludo";
  modalMessage.textContent = "¡Hola Elizabeth";
  modal.style.display = "block";
});

document.getElementById("btn2").addEventListener("click", () => {
  modalTitle.textContent = "Saludo 2.0";
  modalMessage.textContent = "¡Buenas Elizabeth que tengas un lindo dia";
  modal.style.display = "block";
});

document.getElementById("btn3").addEventListener("click", () => {
  modalTitle.textContent = "Mensaje";
  modalMessage.textContent = "Si falta algo, digalo...";
  modal.style.display = "block";
});

document.getElementById("btn4").addEventListener("click", () => {
  modalTitle.textContent = "Vaya...";
  modalMessage.textContent =
    "Bueno te digo un secreto, puedes aplastar otras teclas, y descubrir algunas cosas, tambien conbinaciones con el control";
  modal.style.display = "block";
});
document.getElementById("btn5").addEventListener("click", () => {
  modalTitle.textContent = "Por que de la web?";
  modalMessage.textContent =
    "Al inicio fue para probar el QR, pero como vi que le gusto prefiero agregar algunas cosas mas como recuerdo, para ti";
  modal.style.display = "block";
});

// Close the modal
close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside of the modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
