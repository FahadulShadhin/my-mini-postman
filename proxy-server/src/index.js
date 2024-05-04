import express from 'express';
import cors from 'cors';
import { sendHttpRequest } from './requestSender.js';

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/v1/request', async (req, res) => {
  // headerRows and paramRows are array of headers and params
  // before making the axios request we are converting the array in object of key-value pairs
  const { url, method, headerRows, paramRows, body } = req.body;

  const data = await sendHttpRequest(method, url, headerRows, paramRows, body);
  res.status(200).json(data);
});

app.on('error', (error) => {
  console.log('ERROR:', error);
  throw error;
});

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));
