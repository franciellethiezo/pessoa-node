const express = require('express')
const bodyParser = require('body-parser')

// const userRoutes = require('./routes/userRoutes')

const MongoCliente = require('mongodb').MongoCliente;

const uri = "mongodb+srv://fran:jensen..@cluster0-vdzll.mongodb.net/test?retryWrites=true&w=majority"

MongoCliente.connect(uri, (err, client) =>{
	if(err) return console.log(err)
db = client.db('Pessoa-node')

app.listen(port, () => console.log('API rodando na porta 3000!'))
})


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000

app.set('view engine', 'ejs')
app.get('/', (req, res) => { 
	res.render('userIndex.ejs')
})

app.post('/show', (req, res) => {
	db.collection('data').save(req.body, (err, result) => {
		if(err) return console.log(err)
		console.log('Salvo no DB')
		res.redirect('/')
	})
})

