const express = require('express');
const formatter = require('./util/text');
const calculator = require('./util/number');

const app = express();
app.use(express.json());

app.route('/util/:type/:action')
  .get(handleRequest)
  .post(handleRequest);

function handleRequest(req, res) {
  const { type, action } = req.params;
  const input = req.method === 'GET' ? req.query.input.split(',') : req.body.input;

  const handlers = {
    number: calculator,
    text: formatter,
  };

  const result = {
    action,
    input,
    output: handlers[type](input, action),
  };

  res.send(result);
}

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000');
});
