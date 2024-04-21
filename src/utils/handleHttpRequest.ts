import axios from 'axios';

type RequestData = {
  url: string;
  method: string;
};

export const sendHttpRequest = async (url: string, selectedOption: string) => {
  try {
    const requestData: RequestData = { url, method: selectedOption };
    const response = await axios.post('/api/v1/request', requestData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
