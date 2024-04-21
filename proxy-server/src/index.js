import express from 'express';
import cors from 'cors';
import { sendHttpRequest } from './requestSender.js';

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/v1/request', async (req, res) => {
  const { url, method } = req.body;
  console.log(url, method);

  const data = await sendHttpRequest(method, url);

  res.status(200).json(data);
});

app.on('error', (error) => {
  console.log('ERROR:', error);
  throw error;
});

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));
