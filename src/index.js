import './css/styles.css';

const DEBOUNCE_DELAY = 300;



https://restcountries.com/v2/{service}?fields={field},{field},{field}
https://restcountries.com/v2/all?fields=name,capital,currencies
// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString());
fetchCountries(name) { 
    const url = 'https://restcountries.com/v3.1/name/';
    const filter = '?fields=name.official,capital,currencies'
}


console.log(url);

// Робить запит на бекенд


// Винести її в окремий файл та зробити іменований експорт 
fetchCountries.js 