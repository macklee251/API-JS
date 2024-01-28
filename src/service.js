const port = 8080
const express = require('express')
const app = express()
const banco_de_dados = require('./banco_de_dados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended:  true }))

app.get('/produtos', (req, res, next) => {
    console.log('middleware 1')
    next() // O next chama a proxima função get 
})

app.get('/produtos', (req, res, next) => {
     res.send(banco_de_dados.get_produtos()) // O metodo send convert altomaticamente para JSON
})

app.get('/produtos/:id' , (req, res, next) => {
    res.send(banco_de_dados.get_produto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco_de_dados.salvar_produto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
}) 

app.put('/produtos/:id', (req, res, next) => {
    const produto = banco_de_dados.salvar_produto({
        id:  req.params.id, 
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
}) 

app.delete('/produtos/:id', (req, res, next) => {
    const produto = banco_de_dados.delete_produto(req.params.id)
    res.send(produto)
})

app.use((req, res, next) => { // app.use responde a qualquer requisição, qualquer URL
    res.send({nome: 'Iphone', preco: 123.4 }) 
    next()
})


app.listen(port, () => {
     console.log(`Servidor executando na porta ${port}`)
})