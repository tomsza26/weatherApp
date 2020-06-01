import { Provinces, Weather } from '../shared/ts/Types';

const provinces = () => {
  const provincesCities: Provinces = [
    'Szczecin',
    'Gdansk',
    'Olsztyn',
    'Bialystok',
    'Warszawa',
    'Poznan',
    'Gorzow%20Wielkopolski',
    'Wroclaw',
    'Bydgoszcz',
    'Opole',
    'Lodz',
    'Katowice',
    'Kielce',
    'iata:KRK',
    'Lublin',
    'Rzeszow',
  ];

  const readyCities: Weather[] = [];

  provincesCities.forEach(async (city) => {
    try {
      const resp = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=044797d37dbd4c9193b132152202805&q=${city}&lang=eng&condition:icon`,
      );
      const respBody: Weather = await resp.json();
      readyCities.push(respBody);
    } catch (err) {
      return 'Limit of queries in this month reached, try next month :)';
    }
  });
  return readyCities;
};

export default provinces;
