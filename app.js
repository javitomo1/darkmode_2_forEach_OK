const boton_DarkMode = document.getElementById("darkmode")
const elementos = document.querySelectorAll(".test_darkmode")

boton_DarkMode.addEventListener("click", function() {
    elementos.forEach(x => x.classList.toggle("dark"))
})
