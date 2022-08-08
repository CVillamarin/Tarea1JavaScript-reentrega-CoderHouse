"use strict";

/*
Preguntar sus notas y darle un promedio,tambien le dice si aprobo el cuatrimestre o no.
*/
function calcularPromedio() {
  var pruebaUno = parseInt(prompt("Caunto te sacaste en el primer parcial? "));
  var pruebaDos = parseInt(prompt("Cuanto te sacaste en el segundo parcial? "));

  var _final = parseInt(prompt("Cuanto te sacaste en el final? "));

  var promedio = ("Tu promedio en base a esto seria ", (pruebaUno + pruebaDos + _final) / 3);
  alert("Tu promedio seria " + promedio);

  if (promedio < 6) {
    alert("Desafortunadamente desaprobaste el cautrimestre");
  } else {
    alert("Felicidades aprobaste el cautrimestre");
  }
}

calcularPromedio();