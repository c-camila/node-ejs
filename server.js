const express = require('express');
const app = express();
app.set('view engine', 'ejs');
//criando uma rota p/ site
app.get('/', function (rec, res) {
  const items = [
    {
      title: 'U',
      message:
        'auuu estou aprendendo a desenvolver aplicações/serviços de forma fácil!',
    },
    {
      title: 'A',
      message: 'mando a novidade',
    },
    {
      title: 'U',
      message: 'ma experiência bem divertida.',
    },
  ];
  const subtitle =
    'EJS é uma linguagem de modelagem para criação de página HTML';
  res.render('pages/index', { qualitys: items, subtitle: subtitle });
});
//criando uma rota p/ aba sobre
app.get('/sobre', function (rec, res) {
  res.render('pages/about');
});
//fazer o app rodar
app.listen(8080);
console.log('Rodando');
