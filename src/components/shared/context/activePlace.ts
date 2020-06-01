import { createContext } from 'react';

import { Weather } from '../ts/Types';

const AuthContext = createContext({
  disProvince: {} as Weather | undefined,
  setDisProvince: () => {},
});

export default AuthContext;
