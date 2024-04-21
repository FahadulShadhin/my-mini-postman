import axios, { Method } from 'axios';

export const sendHttpRequest = async (method: Method, url: string) => {
  try {
    const response = await axios({ method, url });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
