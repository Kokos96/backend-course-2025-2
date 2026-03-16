const { URL } = require('url');

// 1. Створення констант (Варіант 3) [cite: 56, 67, 68]
const currency = 'JPY';
const exact_date = '20240127';

// 2. Створення об'єкта URL [cite: 80, 81]
const nbuUrl = new URL('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange');

// 3. Додавання параметрів через SearchParams [cite: 82, 84, 85]
nbuUrl.searchParams.append('valcode', currency);
nbuUrl.searchParams.append('date', exact_date);
nbuUrl.searchParams.append('json', ''); // Щоб отримати JSON формат [cite: 36]

// 4. Вивід у консоль [cite: 86]
console.log(nbuUrl.toString());