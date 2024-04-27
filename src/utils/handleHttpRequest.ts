import axios from 'axios';

type RequestData = {
  url: string;
  method: string;
  headers: {};
  params: {};
  body: {};
};

export const sendHttpRequest = async (
  url: string,
  selectedOption: string,
  headers: {},
  params: {},
  body: {}
) => {
  try {
    const requestData: RequestData = {
      url,
      method: selectedOption,
      headers,
      params,
      body,
    };
    const response = await axios.post('/api/v1/request', requestData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
