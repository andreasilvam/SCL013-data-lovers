import { filterType, filterWeak } from '../src/data.js'
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





/*import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

