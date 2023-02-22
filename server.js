import app from "./src/app.js"

// usando porta no ambiente de produçã ou local
const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`Logando em http://localhost:${port}`)
 })








// EXEMPLO USANDO HTTP PROTOCOL

// // instanciado os modulos
// const http = require("http")

// const port = 3000

// const rotas = {
//     '/': 'Curso de Node',
//     '/livros': 'Entrei na pag de livros',
//     '/autores': 'Listagem de autores',
//     '/editora': 'Pag de editora',
//     '/sobre': 'Info sobre o projeto'
//   }

// // criando servidor
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end(rotas[req.url])
// })

// // ligando o servidor a porta de conexão
// server.listen(port,()=>{
//     console.log(`Logando em http://localhost:${port}`)
// })


