import axios from 'axios';

const isValidHeaderOrParamkey = (val) =>
  typeof val.key === 'string' &&
  val.key.trim() !== '' &&
  typeof val.value === 'string';

export const sendHttpRequest = async (
  method,
  url,
  headerRows,
  paramRows,
  body
) => {
  try {
    const headers = {};
    for (let header of headerRows) {
      if (isValidHeaderOrParamkey(header)) {
        headers[header.key] = header.value;
      }
    }

    const params = {};
    for (let param of paramRows) {
      if (isValidHeaderOrParamkey(param)) {
        params[param.key] = param.value;
      }
    }

    const requestBody = body.trim() !== '' ? JSON.parse(body) : body;

    const response = await axios({
      url: url,
      method: method,
      params: params,
      headers: headers,
      data: requestBody,
    });

    const resToReturn = {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      data: response.data,
    };
    return resToReturn;
  } catch (error) {
    // when getting error status we don't want the server to through error
    // instead the error response is sent to frontend
    let resToReturn;

    if (error instanceof SyntaxError) {
      resToReturn = {
        data: error.toString(),
      };
    } else {
      resToReturn = {
        status: error?.response?.status,
        statusText: error?.response?.statusText,
        headers: error?.response?.headers,
        data: error?.response?.data,
      };
    }
    return resToReturn;
  }
};
