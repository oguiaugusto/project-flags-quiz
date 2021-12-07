const continentsObj = [
  {name: 'Africa' ,selected: true},
  {name: 'Americas' ,selected: true},
  {name: 'Asia' ,selected: true},
  {name: 'Europe' ,selected: true},
  {name: 'Oceania' ,selected: true},
];

const getRandomNumber = (max) => Math.round(Math.random() * max);

export async function fetchCountries() {
  const API_URL = 'https://restcountries.com/v3.1/all';
  const response = await fetch(API_URL);
  const data = await response.json();
  
  return data;
}

export function getRandomCountries(countries, continents = continentsObj, amount) {
  const selectedRegions = continents.filter(({ selected }) => selected);
  const MAX_NUM = countries.length;
  let countriesIndex = [];
  let randomCountries = [];

  const getRandomIndexes = () => {
    countriesIndex = [];
    for (let i = 0; i < amount; i += 1) {
      let randomNumber = getRandomNumber(MAX_NUM);
      while (countriesIndex.includes(randomNumber)) randomNumber = getRandomNumber(MAX_NUM);
      countriesIndex.push(randomNumber);
    }
  };
  
  const getCountries = () => {
    randomCountries = [];
    randomCountries = countries.filter((_country, i) => countriesIndex.includes(i));
  };
  
  const checkCountries = () => (selectedRegions.every(({ name }) => (
    randomCountries.some(({ region }) => region === name)
  )));
  
  getRandomIndexes();
  getCountries();
  
  while (!checkCountries()) {
    getRandomIndexes();
    getCountries();
  }

  return randomCountries;
}
