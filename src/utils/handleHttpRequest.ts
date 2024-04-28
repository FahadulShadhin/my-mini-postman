import axios from 'axios';
import type { Row } from '../components/TabMenu/TabMenu.types';

type RequestData = {
  url: string;
  method: string;
  headerRows: Row[];
  paramRows: Row[];
  body: string;
};

export const sendHttpRequest = async (
  url: string,
  selectedOption: string,
  headerRows: Row[],
  paramRows: Row[],
  body: string
) => {
  try {
    const requestData: RequestData = {
      url,
      method: selectedOption,
      headerRows,
      paramRows,
      body,
    };
    const response = await axios.post('/api/v1/request', requestData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
