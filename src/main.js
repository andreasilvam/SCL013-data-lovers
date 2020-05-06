
import basePokemon from './data/pokemon/pokemon.js'; //solo para llamar la data mi pagina de main

const dataPokemon = basePokemon.pokemon; //convirtiendo el objeto pokemon a un array

//Declaro un constante para llamar a mi boton ingresar
document.getElementById("enterbutton").addEventListener("click", enterbtn);
//creando la función del boton enviar
function enterbtn() {
  document.getElementById("firstPage").style.display = "none"; //esconder
  document.getElementById("menuprincipal").style.display = "block";
  document.getElementById("root").style.display = "block";
}

//imprimiendo los personajes en la segunda página luego del evento click
const container = document.getElementById("root")
//for que recorrerá la data para luego imprimirla.
for (let i = 0; i < dataPokemon.length; i++) {
  let pokemones = dataPokemon[i] // variable que me almacena la data recorrida
  //imprimo llamando a mi nueva variale según el atributo del objeto
  let imprimir = `<section id="tarjetas"><section id="letras"><p>${pokemones.num}.<p>${pokemones.name}<p><p></section><img src=${pokemones.img} class=foto></section>`
  container.innerHTML += `<p>${imprimir}<p>`
}

//creando la función filtar por debilidad
const imprimir = document.getElementById("root");
const filterType = document.getElementById("tipo"); //llamo id
//Función filtrado
filterType.addEventListener('change', () => { //escucho un cambio
  imprimir.innerHTML = ""; //limpia contenido

  let chosenType = filterType.options[filterType.selectedIndex].value; //despues del cambio traeme el valor seleccionado por el usuario

  for (let i = 0; i < dataPokemon.length; i++) {
    let dataWeak = dataPokemon[i].weaknesses; //variable que me almacena el atriburo debilidad y todo lo que contiene adentro  de (weaknesses)
    for (let a = 0; a < dataWeak.length; a++) {
      if ((dataWeak[a]) === chosenType) {
        let imprimirDebilidad = `<section id="tarjetas"><p>Nombre${dataPokemon[i].name}.<p>${dataPokemon[i].num}<p><img src=${dataPokemon[i].img} class=foto></section>`
        imprimir.innerHTML += `<p>${imprimirDebilidad}<p>`
      }
    }
  }
})



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
