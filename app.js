// app.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("¡Página cargada!");

  // Ejemplo: Cambiar texto dinámicamente
  const saludo = document.getElementById("saludo");
  if (saludo) {
    saludo.textContent = "Bienvenido a nuestro restaurante 🍽️";
  }

  // Manejar formulario de reservas
  const form = document.querySelector("#reservas form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Gracias por tu reserva!");
    });
  }
});