import { createServer } from 'node:http';
import express from 'express';

const App = express();


App.get('/', (req, res) => {
  res.send('<h1>Bonjour hebergement ok</h1>');
});

App.get( )

const Server = createServer(App).listen(8080, () => {
  console.log('serveur lancé au port' + 80);
});
