
export const example = () => {
  return 'example';
};

// estas funciones son de ejemplo

// función de filtrado
export const filtered = (basePokemon,filterType) => {
  const result = basePokemon.filter((element) => {
    return element.type.includes(filterType);
  });
  return result;
};


// Función buscar por nombre de pokémon
export const nameSearch = (basePokemon,finalName) => {
  const searched = basePokemon.filter((element) => {
    return element.name.includes(finalName);
  });
  return searched;
};


export const anotherExample = () => {
  return 'OMG';
};
