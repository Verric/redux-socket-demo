import express from 'express';
import axios from 'axios';

const app = express();
const companies = ['aapl', 'fb', 'msft', 'tsla'];
const baseUrl = 'https://api.iextrading.com/1.0';
let data = {}

const quoteEndpoint = (symbol) => `/stock/${symbol}/quote`;



const id = setInterval(function() {
  companies.forEach((company) =>axios.get(`${baseUrl}${quoteEndpoint(company)}`).then(response=> {
    console.log(response.data);
    Object.assign({}, data, response.data.companyName, response.data.latestPrice);
  }));
}, 20000)

app.get('/', function (req, res) {
  res.send(data)
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

