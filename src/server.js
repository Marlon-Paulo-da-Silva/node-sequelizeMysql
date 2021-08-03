require('dotenv').config({path: 'variaveis.env'});
const express = require('express')
const routes = require('./routes')


const cokieParser = require('cookie-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('./database')

const app = express();

app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use('/api',routes)

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})