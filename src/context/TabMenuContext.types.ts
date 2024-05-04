import React from 'react';
import type { Row } from '../components/TabMenu/TabMenu.types';

export type TabMenuContextProviderProps = {
  children: React.ReactNode;
};

export type TabMenuContextType = {
  paramRows: Row[];
  setParamRows: (paramRows: Row[]) => void;
  headerRows: Row[];
  setheaderRows: (headerRows: Row[]) => void;
  bodyInput: string;
  setBodyInput: (bodyInput: string) => void;
  responseData: object;
  setResponseData: (responseData: object) => void;
};
