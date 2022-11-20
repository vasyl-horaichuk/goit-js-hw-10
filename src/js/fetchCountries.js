

export fetchCountries(name) {
    const endpoint = 'https://restcountries.com/v3.1/name/';
    const qweryParams = '?fields=name,capital,population,flags,languages';
    const requestUrl = `${endpoint}${name}${qweryParams}`;
    
    fetch(requestUrl).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}