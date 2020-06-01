import React, { useContext } from 'react';

import { Prov, ProvCities } from '../../../shared/ts/Types';
import ActivePlace from '../../../shared/context/activePlace';

interface PropTypes {
  x: number;
  y: number;
  city: ProvCities;
  province: Prov;
  svg: string;
  obj: { icon: string; temp: number };
  click: (arg0: string, arg1: Prov) => void;
}

const index = (props: PropTypes) => {
  const { x, y, city, province, obj, svg, click } = props;
  const { disProvince } = useContext(ActivePlace);

  return (
    <g onClick={() => click(city, province)}>
      <path
        id={`prefix__PL-${province}`}
        className="prefix__land"
        d={svg}
        fill={
          disProvince?.location.name === decodeURI(city)
            ? '#cbce91ff'
            : '#6495ed'
        }
      />
      <image href={obj.icon} transform={`translate(${x} ${y})`} />
      <text fill="black" transform={`translate(${x + 20} ${y + 74})`}>
        {obj.temp}&#176;C
      </text>
    </g>
  );
};

export default index;
