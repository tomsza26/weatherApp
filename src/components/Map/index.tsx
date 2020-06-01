import React, { useState, useEffect, useContext } from 'react';

import Province from '../API/index';
import ProvinceSvg from './mapSvg';
import TableLoc from '../shared/tableLoc/index';
import { Prov, Weather } from '../shared/ts/Types';
import AuthContext from '../shared/context/activePlace';
import './main.scss';

function SvgComponent() {
  const [provinces, setProvinces] = useState<Weather[]>();
  const [disProvince, setDisProvince] = useState<Weather>();
  const [error, setError] = useState<string>();

  const value = { disProvince, setDisProvince };

  useEffect(() => {
    const returnedVal = Province();
    if (typeof returnedVal === 'string') {
      setError(returnedVal);
    } else {
      const repeat = () => {
        if (returnedVal[0] === undefined) {
          setTimeout(repeat, 500);
          return;
        }
        setProvinces(returnedVal);
        setDisProvince(returnedVal[0]);
      };
      repeat();
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      <div id="provinceCont">
        <h1>Weather in provinces</h1>
        {provinces ? (
          <ProvinceSvg weatherData={provinces} />
        ) : (
          <ProvinceSvg withoutData />
        )}
        {error ? <h1>{error}</h1> : <TableLoc weather={disProvince} />}
      </div>
    </AuthContext.Provider>
  );
}

export default SvgComponent;
