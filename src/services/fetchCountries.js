export async function fetchCountries() {
  const API_URL = 'https://restcountries.com/v3.1/all';
  const response = await fetch(API_URL);
  const data = await response.json();
  const independentCountries = data.filter(({independent}) => independent);
  
  return independentCountries;
}
