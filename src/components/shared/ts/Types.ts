/* eslint-disable camelcase */
export type Errored = {
  PERMISSION_DENIED: number;
  POSITION_UNAVAILABLE: number;
  code: number;
  TIMEOUT: number;
  UNKNOWN_ERROR: number;
};

export interface Weather {
  current: {
    cloud: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
}

export type Provinces = [
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
  'iata:KRK' | 'Krakow', //krakow airport code
  'Lublin',
  'Rzeszow',
];

export type Prov =
  | 'DS'
  | 'KP'
  | 'LD'
  | 'LU'
  | 'LB'
  | 'MA'
  | 'MZ'
  | 'OP'
  | 'PK'
  | 'PD'
  | 'PM'
  | 'SL'
  | 'SK'
  | 'WN'
  | 'WP'
  | 'ZP';

export type ProvCities =
  | 'Szczecin'
  | 'Gdansk'
  | 'Olsztyn'
  | 'Bialystok'
  | 'Warszawa'
  | 'Poznan'
  | 'Gorzow%20Wielkopolski'
  | 'Wroclaw'
  | 'Bydgoszcz'
  | 'Opole'
  | 'Lodz'
  | 'Katowice'
  | 'Kielce'
  | 'Krakow'
  | 'Lublin'
  | 'Rzeszow';
