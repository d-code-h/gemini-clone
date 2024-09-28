import { ReactNode } from 'react';
import { createContext } from 'vm';
import run from '../config/gemini';

export const Context = createContext();

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const onSent = async (prompt: string) => {
    await run(prompt);
  };

  onSent('What is react js');

  const contextValue = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
