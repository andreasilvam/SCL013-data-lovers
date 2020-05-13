//solo para llamar la data al pagina de main
import basePokemon from './data/pokemon/pokemon.js';
// importando las funciones desde data.js
import { filterPosition, filterType, filterWeak, nameSearch} from './data.js'
////convirtiendo el objeto pokemon a un array
const dataPokemon = basePokemon.pokemon;
//console.log (dataPokemon)
document.getElementById("enterButton").addEventListener("click", enterbtn);
//llamando el id del botón y cuando escuche el evento ejecute la función
//creando la función del boton enviar
function enterbtn() {
  document.getElementById("pageOne").style.display = "none"; //esconder
  document.getElementById("pageTwo").style.display = "block"; //motrar
  document.getElementById("root").style.display = "block";//mostrar
}

document.getElementById("avatar").addEventListener("click", toPage);

function toPage() {
  document.getElementById("root").style.display = "none"; //esconder
  document.getElementById("pageTwo").style.display = "none"; //motrar
  document.getElementById("pageOne").style.display = "block";//mostrar
}

///////imprimiendo los personajes en la segunda página luego del evento click ////

// constante que contiene información del atributo ID donde se va a imprimir en el html
const container = document.getElementById("root")
//for que recorrerá el largo de la data
for (let i = 0; i < dataPokemon.length; i++) {
  // variable que almacena la data recorrida
  let pokemones = dataPokemon[i]
  //creando una variable que contiene los valores a imprimir
  let imprimir = `<section id="tarjetas">
  <img id="${pokemones.name}" src=${pokemones.img} class=foto>
  <p>${pokemones.num}.${pokemones.name}<p>
  </section>`
  //se imprime llamando a la nueva variable según lo especificado en la variable anterior
  container.innerHTML += `<p>${imprimir}<p>`
}

/////Modal/////

const modal = document.getElementById("modal");
const foto = document.getElementsByClassName("foto");
//console.log("Foto", foto)
//foto.addEventListener ('click',modalImpri)
for (let i = 0; i < foto.length; i++) {
  let img = foto[i];
  img.addEventListener('click', modalImpri)
  //console.log("imprimir", img)
}

function modalImpri(event) {
  modal.innerHTML ="";
  //console.log("identificarlo", event.target)
  const pokemonEncotrado = dataPokemon.find(function (personaje) {
    return personaje.name === event.target.id
    })
    //console.log("Hola", pokemonEncotrado)

  modal.innerHTML +=
    `<section id="tarjetas">
        <section id="letras">
          <p>Número: ${pokemonEncotrado.num}<p>
          <p>Nombre de Pokemón: ${pokemonEncotrado.name}<p>
          <p>Peso: ${pokemonEncotrado.weight}<p>
          <p>Altura: ${pokemonEncotrado.height}<p>
          <p>Tipo: ${pokemonEncotrado.type}<p>
          <p>Debilidades: ${pokemonEncotrado.weaknesses}<p>
          <p>Caramelos: ${pokemonEncotrado.candy}<p>
          <p>Cantidad de caramelos: ${pokemonEncotrado.candy_count}<p>
          <p>Huevo: ${pokemonEncotrado.egg}<p>
          <img src=${pokemonEncotrado.img} class="foto">
         </section>
     </section>`
    modal.classList.add('modal--show')

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) modal.classList.remove('modal--show')

  });
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
 //for que recorrerá el largo de la data
  for (let i = 0; i < positionWeak.length; i++) {
    //variable que me almacena el atriburo debilidad y todo lo que contiene adentro  de (weaknesses)
    let dataWeak = positionWeak[i];
    //variable que contiene los valores a imprimir
    let printWeak = 
    `<section id="tarjetas">
    <img id="${dataWeak.name}" src=${dataWeak.img} class=foto>
    <p>${dataWeak.num}.${dataWeak.name}<p>
    <p>${dataWeak.type}<p>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${printWeak}<p>`
  }
  //for que recorre la class foto de mi línea de impresión
  for (let i = 0; i < foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
    //console.log("imprimir", img)
  }
  //se llama a la función modal
  modalImpri
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
  //variable que almacena la función filtar por tipo exportada desde data.js con sus parámetros
  let positionType = filterType(dataPokemon, 'type', selectType);
//for que recorrerá el largo de la data
  for (let i = 0; i < positionType.length; i++) {
    //variable que me almacena el recorrido el valor del recorrido de la debilidades y todo lo que contiene adentro  de (type)
    let newPosition = positionType[i];
    //variable que contiene los valores a imprimir
    let prinType = 
    `<section id="tarjetas">
    <img id="${newPosition.name}"src=${newPosition.img} class=foto>
    <p>${newPosition.num}.${newPosition.name}<p>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${prinType}<p>`
  }
  //For que recorre la clase  foto de mi linea de impresión
  for (let i = 0; i < foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
   // console.log("imprimir", img)
  }
  //se trae la función modal
  modalImpri
});


////////////// creando para filtrar de manera ascendente y descendente//////////////

// constante que contiene información del atributo ID
const orderPosition = document.getElementById("orderPosition");
//llamando la constante para que cuando escuche el evento ejecute la función
orderPosition.addEventListener("change", () => {
  //variable que almacena el valor de la opción seleccionada por el usuario
  let selectPosition = orderPosition.options[orderPosition.selectedIndex].value
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  container.innerHTML = "";
  //console.log (selectPosition)
  //variable que almacena la función filtrar de manera ascendete y descendente exportada desde data.js con sus parámetros
  let posicionFilter = filterPosition(dataPokemon, selectPosition)
  //for que recorrerá el largo de la data
  for (let i = 0; i < posicionFilter.length; i++) {
    //variable que me almacena el recorrido el valor del recorrido hecho por el for
    let dataFilter = posicionFilter[i]
    //variable que contiene los valores a imprimir
    let printPosition = `<section id="tarjetas">
    <img id="${dataFilter.name}"src=${dataFilter.img} class=foto>
    <p>${dataFilter.num}.${dataFilter.name}<p>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${printPosition}<p>`
  }
  //For que recorre la clase  foto de mi linea de impresión
  for (let i = 0; i < foto.length; i++) {
    let img = foto[i];
    img.addEventListener('click', modalImpri)
   // console.log("imprimir", img)
  }
  //se trae la función modal
  modalImpri
});


// Función buscar por nombre de pokémon
//llamo al boton con el id para que cuando escuche el evento ejecute la función
document.getElementById('okBtn').addEventListener('click', () => {
  // se llama a la constante que donde se imprime en el html y se declara vacia para que limpie la página
  document.getElementById('root').innerHTML = '';
  //variable que almacena el valor el nombre del pokemon escrito por el usuario
  const name = document.getElementById('search').value;
  //constante que primero (charAt) obtiene, con el nombre, al personaje en la cadena + tomo el nombre en array
  const finalName = name.charAt().toUpperCase() + name.slice(1).toLowerCase();
  //variable que almacena la función buscar por nombre de pokemón exportada desde data.js con sus parámetros
  let chosenName = (nameSearch(dataPokemon,finalName));
  //for que recorrerá el largo de la data
  for (let i = 0; i < chosenName.length; i++) {
    //variable que me almacena el valor del recorrido hecho por el for
    let dataName = chosenName[i]
    //variable que contiene los valores a imprimir
    let printName =
    `<section id="tarjetas">
    <img id="${dataName.name}" src=${dataName.img} class=foto>
    <p>${dataName.num}.${dataName.name}<p>
    </section>`
    //se imprime llamando a la nueva variable según lo especificado en la variable anterior
    container.innerHTML += `<p>${printName}<p>`
  }
    //For que recorre la clase  foto de mi linea de impresión
    for (let i = 0; i < foto.length; i++) {
      let img = foto[i];
      img.addEventListener('click', modalImpri)
     // console.log("imprimir", img)
    }
    //se trae la función modal
    modalImpri
});
