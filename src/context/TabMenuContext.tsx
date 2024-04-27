import { createContext, useState } from 'react';
import { Row } from '../components/TabMenu/TabMenu.types';
import type { TabMenuContextType, TabMenuContextProviderProps } from './TabMenuContext.type';

export const TabMenuContext = createContext<TabMenuContextType | null>(null);

export const TabMenuContextProvider = ({
  children,
}: TabMenuContextProviderProps) => {
  const [paramRows, setParamRows] = useState<Row[]>([
    { key: '', value: '', description: '' },
  ]);
  const [headersRows, setHeadersRows] = useState<Row[]>([
    { key: '', value: '', description: '' },
  ]);

  return (
    <TabMenuContext.Provider
      value={{
        paramRows,
        setParamRows,
        headersRows,
        setHeadersRows,
      }}
    >
      {children}
    </TabMenuContext.Provider>
  );
};
