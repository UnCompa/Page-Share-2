const modal = document.getElementById("modal");
const close = document.getElementById("close");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");

// Show modal function
const showModal = (title, message) => {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.style.display = "block";
};

// Button event listeners
document.getElementById("btn1").addEventListener("click", () => {
  showModal("Saludo", "¡Hola Elizabeth!");
});

// Close button event listener
close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Keydown event listener for combinations
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey) {
    // Check if Control key is pressed
    switch (event.code) {
      case "KeyC": // 'Control + C'
        showModal("Copia", "=Que hace copiando algo?.");
        break;
      case "KeyP": // 'Control + S'
        showModal("Pegar", "Has pegado al author...");
        break;
      case "KeyM": // 'Control + P'
        showModal("Muteado", "No hay nada que decir");
        break;
      default:
        break;
    }
  } else {
    switch (event.code) {
      case "KeyH": // 'H' key
        showModal("Ayuda", "Presiona 'S' para saludo.");
        break;
      case "KeyS": // 'S' key
        showModal("Saludo", "¡Hola Elizabeth!");
        break;
      case "KeyI": // 'I' key
        showModal("Información", "Pagina simple para un chica increible");
        break;
      case "KeyE": // 'E' key
        showModal("ELizabeth", "Si, la pagina es de ella");
        break;
      case "KeyX": // 'X' key
        showModal("Cerrar", "Has intentado cerrar la pagina");
        break;
      case "KeyC": // 'C' key
        showModal("Consejo", "Tratar bien al author, si se puede");
        break;
      case "KeyG": // 'C' key
        showModal("Gusto", "Confirmas que te a gustado la pagina");
        break;
      case "Key5": // 'C' key
        showModal("Puntuacion", "Has dado 5 estrellas a la pagina");
        break;
      case "KeyR": // 'C' key
        showModal(
          "Regalo",
          "Has recibido un regalo - Un abrazo, y eso, nada mas"
        );
        break;
      case "KeyF": // 'C' key
        showModal("Foto", "No sabia que poner, queda a tu eleccion");
        break;
      case "KeyA": // 'C' key
        showModal("Ayuda 2.0", "Solicitud de ayuda durante 1 dia, no mas");
        break;
      case "KeyZ": // 'C' key
        showModal("Dormir", "Como que ya es hora de dormir");
        break;
      case "KeyP": // 'C' key
        showModal("Pedir", "Has pedido algo, aunque el autor no sabe que");
        break;
      case "KeyV": // 'C' key
        showModal("Ver", "Te ves al espejo, y ves a alguien .......");
        break;
      case "KeyY": // 'C' key
        showModal(
          "Ya",
          "No sabe el autor que poner aqui, quizas un si a algo?"
        );
        break;
      case "KeyN": // 'C' key
        showModal("No", "Un NO para algo, no se");
        break;
      case "KeyL": // 'C' key
        showModal("Lind@", "AL parecer alguien es lind@ de aqui");
        break;
      case "KeySpace": // 'C' key
        showModal("Saltar", "Esto no es un juego");
        break;
      case "KeyU": // 'C' key
        showModal("Unity", "Ayuda en esto, o no quien sabe");
        break;
      case "KeyG": // 'C' key
        showModal("Gato", "Reclamas un gato");
        break;
      default:
        break;
    }
  }
});
