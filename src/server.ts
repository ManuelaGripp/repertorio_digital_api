import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5001;

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
