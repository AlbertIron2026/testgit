// una funcion es un bloque de codigo con nombre al que puedes llamar cuando lo necesites
// lo llamas por sunombre() y parentesis
// variedades: pasar o no parametros (datos) y que tenga o no RETURN (retorne datos o no)
// para decirle que ese codigo es una funcion, pones function delante
// se aconseja que cada funcion haga una sola cosa y que no sea muy larga

// relacionar JS con elementos HTML con document.getElementById("nombre del id del elemento")
const div1 = document.getElementById("div1"); //la variable div1 en JS se refiere al elemento HTML #div1
const div2 = document.getElementById("div2");


// añadimos aqui el cambio para que muestre al principio la palabra en minúsculas
let palabraOK = "ironhack";
div2.innerHTML = palabraOK;

// se le llama y no recibe parametros y no tiene un return
function sumar() {
  let numero1 = parseInt(prompt("dime el primer numero"));
  let numero2 = parseInt(prompt("dime el segundo numero"));
  div1.innerHTML = " la suma es <br> " + (numero1 + numero2);
}
// aqui ya no existen numero1 y numero2 (ambito o scoope de las variables)

// aqui recibe un parametro (sin return)
/*
function gritar(grito) {
  //lo nombro el parametro como quiero
  div2.innerHTML = grito.toUpperCase() + "!!!";
  //lo imprimo dentro del div2
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

  div2.innerHTML = resultado; //imprime en el div
}

// nueva funcionalidad
function popup(){
  alert("ESTO FUNCIONA!!!");
}