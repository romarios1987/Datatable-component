import DataTableService from './services/DataTableService.js';

const items = DataTableService.getDataAll('https://mate-academy.github.io/phone-catalogue-static/phones/phones');

items.then((phones) => { console.log(phones); });
