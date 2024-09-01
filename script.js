document.getElementById("btn1").addEventListener('click', () => {
  alert("Hola")
})
document.getElementById("btn2").addEventListener('click', () => {
  alert("Muy simple el otro saludo, Asi que Hola Elizabeth espero la estes pasando bien, mañana nos vemos")
})

document.getElementById("btn3").addEventListener('click', () => {
  alert("Me caes bien, espero nos llevemos bien durante el tiempo que tengamos")
})
document.getElementById("btn4").addEventListener('click', () => {
  alert("Decia no tocar, y lo toca, na na na no hace caso jaja, Si aplasta el boton M saldra algo")
})
window.addEventListener("keydown", (e) => {
  if(e.key == "m") {
    document.getElementById("txtWelcome").innerHTML = "Bienvenida Elizabeth, espero disfrutes esta pagina :D"
    alert("Gracias por ser una buena compañera, nos vemos mañana y un abrazo bluetooh, mire el titulo")

  }
})