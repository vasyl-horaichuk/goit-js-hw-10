
export function fetchCountries(name) {

if(name.length === 0) {
     return [];
  }
  const url = 'https://restcountries.com/v3.1/name/';
  const filter = '?fields=name,capital,population,flags,languages';

  return fetch(`${url}${name}${filter}`).then(response => {
    if (!response.ok) {
      if (response.status === 404) {
          return [];
        }
      throw new Error(response.status);
    }
    
    return response.json();
  })
}
