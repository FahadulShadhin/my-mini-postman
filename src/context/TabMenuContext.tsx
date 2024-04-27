import { createContext, useState } from 'react';
import { Row } from '../components/TabMenu/TabMenu.types';
import type {
  TabMenuContextType,
  TabMenuContextProviderProps,
} from './TabMenuContext.type';

export const TabMenuContext = createContext<TabMenuContextType | null>(null);

export const TabMenuContextProvider = ({
  children,
}: TabMenuContextProviderProps) => {
  const [paramRows, setParamRows] = useState<Row[]>([
    { key: '', value: '', description: '' },
  ]);

  const [headerRows, setheaderRows] = useState<Row[]>([
    { key: '', value: '', description: '' },
  ]);

  const [jsonInput, setJsonInput] = useState<string>('');

  return (
    <TabMenuContext.Provider
      value={{
        paramRows,
        setParamRows,
        headerRows,
        setheaderRows,
        jsonInput,
        setJsonInput,
      }}
    >
      {children}
    </TabMenuContext.Provider>
  );
};
