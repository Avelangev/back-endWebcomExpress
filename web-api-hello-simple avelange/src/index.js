import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('olá, mundo!'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
