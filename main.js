// estamos en el main. Esto es un caso de ExpedienteX.
// Vamos a intentar mezclarlo con la main desde TERMINAL


// relacionar JS con elementos HTML con document.getElementById("nombre del id del elemento")
const divNumeros = document.getElementById("divNumeros"); //la variable divNumeros en JS se refiere al elemento HTML #divNumeros
const divTexto = document.getElementById("divTexto");


// añadimos aqui el cambio para que muestre al principio la palabra en minúsculas
let palabraOK = "ironhack";
divTexto.innerHTML = palabraOK;

// se le llama y no recibe parametros y no tiene un return
function sumar() {
  let numero1 = parseInt(prompt("dime el primer numero"));
  let numero2 = parseInt(prompt("dime el segundo numero"));
  divNumeros.innerHTML = " la suma es <br> " + (numero1 + numero2);
}
// aqui ya no existen numero1 y numero2 (ambito o scoope de las variables)

// aqui recibe un parametro (sin return)
/*
function gritar(grito) {
  //lo nombro el parametro como quiero
  divTexto.innerHTML = grito.toUpperCase() + "!!!";
  //lo imprimo dentro del divTexto
}

gritar("probando 123 probando"); //le paso un parametro
*/

// aqui recibe un parametro, lo trata y exporta el resultado (tiene un return)
function aMayusculas(palabra) {
  //lo nombro el parametro como quiero
  //retorna la transformación:
  let palabraMayuscula = palabra.toUpperCase(); //pasa a mayuscula
  console.log(palabraMayuscula);
  return palabraMayuscula; //retorna la transformacion
  //lo que pongais despues del return NO EXISTE (return sale de la funcion y no llega aqui)
}

//esta es extra para llamar la funcion aMayusculas desde botón HTML. Recibe e imprime el resultado
function arrancarMay() {
  let resultado = aMayusculas(palabraOK); //le paso un parametro y lo guarda en 'resultado'
  console.log(resultado); //imprime en consola

  divTexto.innerHTML = resultado; //imprime en el div
}

// nueva funcionalidad
function popup(){
  alert("ESTO FUNCIONA!!!");
}
