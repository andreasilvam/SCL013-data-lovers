/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/

    import pokemon from './data/pokemon/pokemon.js';
        
     //console.log(pokemonData)

     const data = pokemon.data;

     const dataArreglo = Object.values(data);
     console.log(pokemonData);

     for(let i=0; i < dataArreglo.lenght; i++){
         if (data[i].type.includes("poison") === true)
     console.log(dataArreglo[i].name)
}

/*const root = document.getElementById("root");
for (let i=0; i < dataArreglo.lenght; i++){
root.innerHTML += "<p>Nombre: " + dataArreglo[i].name + "<p>"
}*/
