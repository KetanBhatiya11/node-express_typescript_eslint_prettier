import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from TypeScript + Express!');
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
