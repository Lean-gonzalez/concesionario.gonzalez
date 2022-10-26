const email = prompt("Ingrese email");
console.log(email);
const vehiculo = prompt("Elija entre auto, camioneta o coupe");
console.log(vehiculo);
const marcas = prompt("Elija sus 3 marcas de auto favoritas");
console.log(marcas)

if (email && vehiculo && marcas) {
  alert(
    "Se está enviando  el mail a " +
      email +
      " con vehiculo " +
      vehiculo +
      " y marcas " +
      marcas
  );
} else if (!email) {
  alert("ingrese un email");
} else if (!vehiculo) {
  alert("ingrese un vehiculo");
} else if (!marcas) {
  alert("ingrese marcas");
}