
export function fetchCountries(name) {
  const url = 'https://restcountries.com/v3.1/name/';
  const filter = '?fields=name,capital,population,flags,languages';
  name = name.trim();
  if(name.langth === 0) {
     return [];
  }
  return fetch(`${url}${name}${filter}`).then(response => {
    if (!response.ok) {
        if(response.status === 404) {
     return [];
     }
      throw new Error(response.status);
    }
    
    return response.json();
  });
}
