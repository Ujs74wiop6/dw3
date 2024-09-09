const express = require('express')
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello DW3!')
})

app.get('/dw3', (req, res) => {
    res.send('Segunda Rota')
})

app.listen(port, () => {
    console.log("Executando a aplicação ", process.env.APP_NAME);
    console.log("Example app listening on port ", process.env.PORT);
})