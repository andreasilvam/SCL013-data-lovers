/////////////exportando las función de filtar por debilidad//////////////////
///se fijan los parámetros de la función 
export const filterWeak = (data, property, selecetWeak) => {
  //console.log("datajs", data);
  //console.log ("datass", selecetWeak)
  ///se declara una constante tipo array
  const tarjeta = [];
  //for me recorrerá la data de proyecto 
  for (let i = 0; i < data.length; i++) {
   //for que recorrerá el atributo tipo array de debilidad
    for (let a = 0; a < data[i][property].length; a++) {
      //console.log ("hola",dataType[d]);
      //condicional que igual lo encotrado en el atributo el array y lo iguala a la opcién elegida por el usuario
      if (data[i][property][a] === selecetWeak) {
        
        //se llama a la constante tipo array declarada al incio y una vez recorrida la longitud de la data
       // se hace un push para alamcene todos los elementos los devuelve la nueva longitud del array.
        tarjeta.push(data[i])
      }
    }
  }
  console.log(tarjeta)
  return tarjeta
};



/////exportando las función de filtar por tipo
export const filterType = (data, property, selectType) => {
  //console.log("datajs", data);
  //console.log ("datass", selectType)
  const resultado = [];
  for (let i = 0; i < data.length; i++) {
    // let dataType = data[i].type;
    //console.log (dataType);
    for (let a = 0; a < data[i][property].length; a++) {
      //console.log ("hola",dataType[d]);
      if (data[i][property][a] === selectType) {
        resultado.push(data[i])
      }
    }
  }
 // console.log(resultado)
  return resultado
};



//exportando la función de filtrado ascendente y descedente 
export const filterPosition = (data, selectPosition) => {
  let newFilter = data.sort((ascen, desce) => {
    if (selectPosition === "Ascendente") {
      return (ascen.num < desce.num) ? -1 : 1;
    }

    else {
      return (ascen.num > desce.num) ? -1 : 1;
    }
  })
  console.log(newFilter)
  return newFilter
}
