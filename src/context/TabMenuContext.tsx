import { createContext, useState } from 'react';
import type { Row } from '../components/TabMenu/TabMenu.types';
import type {
  TabMenuContextType,
  TabMenuContextProviderProps,
  ResponseHeaders,
} from './TabMenuContext.types';

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
  const [bodyInput, setBodyInput] = useState<string>('');
  const [responseData, setResponseData] = useState<object>({});
  const [responseHeaders, setResponseHeaders] = useState<ResponseHeaders>({});

  return (
    <TabMenuContext.Provider
      value={{
        paramRows,
        setParamRows,
        headerRows,
        setheaderRows,
        bodyInput,
        setBodyInput,
        responseData,
        setResponseData,
        responseHeaders,
        setResponseHeaders,
      }}
    >
      {children}
    </TabMenuContext.Provider>
  );
};
