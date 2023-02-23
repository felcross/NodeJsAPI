import  express  from "express";
import db from "./config/dbconnect.js"
import livros from "./models/Livros.js";
 
// bind entre o terminal e o log do mongo
db.on("error",console.log.bind(console,"erro de conexão"))
db.once("open", ()=>{
  console.log("conexão com banco feita com sucesso")
})
//recebendo uma instancia
const app = express();

//setando tipo de msg transferida
app.use(express.json())



  app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
  }) 

  app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
  })

  app.get('/livros', (req, res) => {
    livros.find((err,livros)=> {
      res.status(200).send(livros);
    })
  }) 

  app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
  })


  app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
  })

  app.delete('/livros/:id', (req, res) => {
    //desestruturação
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    //res.json(livros);
    res.send(`Livro ${id} removido com sucesso`);
  })


  function buscaLivro(id) {
    return livros.findIndex(livros => livros.id == id)
  }

  export default app