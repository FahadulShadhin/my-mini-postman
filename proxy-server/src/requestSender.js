import axios from 'axios';

export const sendHttpRequest = async (method, url) => {
  try {
    const response = await axios({
      method,
      url,
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};
