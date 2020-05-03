
document.getElementById("paginaUno").style.display = "block";
      //Llamamos al boton de ingresar por el id
     let botonIngreso = document.getElementById("btn");

     botonIngreso.addEventListener('click', () => {
       document.getElementById("paginaUno").style.display = "none"; //escondemos
       //mostramos la segunda pagina que está en un div con id paginaDos
       document.getElementById("paginaDos").style.display = "block"; //mostramos
     });

     //Llamamos al objeto para que arroje la data
    import pokemonData from './data/pokemon/pokemon.js';
