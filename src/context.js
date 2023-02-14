import { createContext } from 'react';

export const AppContext = createContext({ app: {}, setApp: (app) => {} });
export const AppProvider = AppContext.Provider;
