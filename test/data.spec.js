import { filterPosition, filterType, filterWeak, nameSearch } from '../src/data.js'

//test de filtrado por tipo///
const typePoke = [{
  "name": "Bulbasaur",
  "type": [
    "Grass",
  ]
}];

describe('filterType', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  test('should return "Grass" for filter "type"', () => {
    expect(filterType(typePoke, "type", "Grass")).toEqual([{
      "name": "Bulbasaur",
      "type": [
        "Grass",
      ]
    }]);
  });
});

///Test de debilidad ///
const weakPoke = [{
  "name": "Venusaur",

  "weaknesses": [
    "Fire",
  ]
}];

describe('filterWeak', () => {
  test('is a function', () => {
    expect(typeof filterWeak).toBe('function');
  });

  test('should return "Fire" for filter "weaknesses"', () => {
    expect(filterType(weakPoke, "weaknesses", "Fire")).toEqual([{
      "name": "Venusaur",
      "weaknesses": [
        "Fire",
      ]
    }]);
  });
});

///Test de posicion ///
const positionPoke = [{
  "num": "001",
  "name": "Bulbasaur"},
  {"num": "002",
  "name": "Ivysaur"},
  {  "num": "003",
  "name": "Venusaur"},
  {"num": "004",
  "name": "Charmander"}
];

describe('filterPosition', () => {
  test('is a function', () => {
    expect(typeof filterPosition).toBe('function');
  });

  test('should return "001" for filter "num"', () => {
    expect(filterPosition(positionPoke, "num", "001")).toEqual(positionPoke);
});
});

///Test de buscar nombre ///
const namePoke = [{
  "name": "Bulbasaur"}];

describe('nameSearch', () => {
  test('is a function', () => {
    expect(typeof nameSearch).toBe('function');
  });

  test('should return "Bulbasaur" for filter "name"', () => {
    expect(nameSearch(namePoke, "Bulbasaur")).toEqual(namePoke);
});
});

///Test de posicion ///

describe('filterPosition', () => {
  it('is a function', () => {
    expect(typeof filterPosition).toBe('function');
  });

  it('should return "004" for filter "num"', () => {
    const positionAsce = [{
      "num": "001",
      "name": "Bulbasaur"},
      {"num": "002",
      "name": "Ivysaur"},
      {  "num": "003",
      "name": "Venusaur"},
      {"num": "004",
      "name": "Charmander"}
    ];
    const positionDesce = [{
      "num": "004",
      "name": "Charmander"},
      {"num": "003",
      "name": "Venusaur"},
      {  "num": "002",
      "name": "Ivysaur"},
      {"num": "001",
      "name": "Bulbasaur"}
    ];
    expect(filterPosition(positionAsce))===(positionDesce);
});
});
