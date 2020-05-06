//solo para llamar la data al pagina de main
import basePokemon from './data/pokemon/pokemon.js';
// importando las funciones desde data.js
import { filterPosition, filterType, filterWeak } from './data.js'
////convirtiendo el objeto pokemon a un array 
const dataPokemon = basePokemon.pokemon;
//console.log (dataPokemon)
document.getElementById("enterbutton").addEventListener("click", enterbtn);
//llamando el id del botón y cuando escuche el evento ejecute la función
//creando la función del boton enviar
function enterbtn() {
  document.getElementById("firstPage").style.display = "none"; //esconder 
  document.getElementById("menuprincipal").style.display = "block"; //motrar
  document.getElementById("root").style.display = "block";//mostrar
}


///////imprimiendo los personajes en la segunda página luego del evento click ////

// constante que contiene información del atributo ID donde se va a imprimir en el html
const container = document.getElementById("root")
//for que recorrerá el largo de la data
for (let i = 0; i < dataPokemon.length; i++) {
  // variable que almacena la data recorrida
  let pokemones = dataPokemon[i]
  //creando una variable que contiene los valores a imprimir
  let imprimir = `<section id="tarjetas"><section id="letras"><p>Nombre ${pokemones.name}<p><p>Numero${pokemones.num}<p></section><img src=${pokemones.img} class=foto></section>`
  //se imprime llamando a la nueva variable según lo especificado en la variable anterior
  container.innerHTML += `<p>${imprimir}<p>`
}


/////////////////////creando la función filtar por debilidad////////////////////

// constante que contiene información del atributo ID
const weakUser = document.getElementById("weak");
//llamando la constante para que cuando escuche el evento ejecute la función
weakUser.addEventListener("change", () => {
  //variable que alamacena el valor de la opción seleccionada por el usuario
  let selecetWeak = weakUser.options[weakUser.selectedIndex].value;
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  container.innerHTML = "";
  //variable que almcena la función exportada desde data.js con sus parámetros
  let positionWeak = filterWeak(dataPokemon, 'weaknesses', selecetWeak);
  //console.log("ver", positionWeak);

  for (let i = 0; i < positionWeak.length; i++) {
    //variable que me almacena el atriburo debilidad y todo lo que contiene adentro  de (weaknesses)
    let dataWeak = positionWeak[i];
    //variable que contiene los valores a imprimir
    let printWeak = `<section id="tarjetas"><p>Nombre ${dataWeak.name}<p><p>Numero ${dataWeak.num}<p><img src=${dataWeak.img} class=foto></section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${printWeak}<p>`
  }

});


/////////////////////creando la función filtar por tipo///////////////////////////

// constante que contiene información del atributo ID
const typeUser = document.getElementById("type");
//llamando la constante para que cuando escuche el evento ejecute la función
typeUser.addEventListener("change", () => {
  //variable que alamacena el valor de la opción seleccionada por el usuario
  let selectType = typeUser.options[typeUser.selectedIndex].value
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  container.innerHTML = "";
  //variable que almcena la función filtar por tipo exportada desde data.js con sus parámetros
  let positionType = filterType(dataPokemon, 'type', selectType);

  for (let i = 0; i < positionType.length; i++) {
    //variable que me almacena el recorrido el valor del recorrido de la debilidades y todo lo que contiene adentro  de (type)
    let newPosition = positionType[i];
    //variable que contiene los valores a imprimir
    let prinType = `<section id="tarjetas"><p>Nombre ${newPosition.name}<p><p>Numero ${newPosition.num}<p><img src=${newPosition.img} class=foto></section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${prinType}<p>`
  }
});


////////////// creando para filtrar de manera ascendente y descendente//////////////

// constante que contiene información del atributo ID
const orderPosition = document.getElementById("orderPosition");
//llamando la constante para que cuando escuche el evento ejecute la función
orderPosition.addEventListener("change", () => {
  //variable que alamacena el valor de la opción seleccionada por el usuario
  let selectPosition = orderPosition.options[orderPosition.selectedIndex].value
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  container.innerHTML = "";
  //console.log (selectPosition)
  //variable que almcena la función filtrar de manera ascendete y descendente exportada desde data.js con sus parámetros
  let posicionFilter = filterPosition(dataPokemon, selectPosition)
  //console.log (posicionFilter)
  for (let i = 0; i < posicionFilter.length; i++) {
    //variable que me almacena el recorrido el valor del recorrido hecho por el for
    let dataFilter = posicionFilter[i]
    //variable que contiene los valores a imprimir
    let printPosition = `<section id="tarjetas"><p>Nombre ${dataFilter.name}<p><p>Numero ${dataFilter.num}<p><img src=${dataFilter.img} class=foto></section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${printPosition}<p>`
  }
});




/*creando la función filtar por debilidad
const debilidadUser = document.getElementById("weak");
//let debilidad = "";
let imprimirDebilidad="";
debilidadUser.addEventListener("change", () => {
  let selecetUser = debilidadUser.options[debilidadUser.selectedIndex].value; // variable que me almacename el valor de la opción  que escogio el usuario
  //console.log("ver", selecetUser);
  for (let i = 0; i < dataPokemon.length; i++) {
    let dataWeak = dataPokemon[i].weaknesses; //variable que me almacena el atriburo debilidad y todo lo que contiene adentro  de (weaknesses)
    //console.log ("prue", nombrePokemon)
    for (let a = 0; a < dataWeak.length; a++) {
      //console.log("debilidad",dataWeak[a]); //probando si entra en las debilidades
      if ((dataWeak[a]) === selecetUser) {
        clean
        //console.log("resultado", dataPokemon[i].num);
        imprimirDebilidad = `<section id="tarjetas"><p>Nombre${dataPokemon[i].name}.<p>${dataPokemon[i].num}<p><img src=${dataPokemon[i].img} class=foto></section>`
        container.innerHTML += `<p>${imprimirDebilidad}<p>`
      }
    }
  }
})*/
