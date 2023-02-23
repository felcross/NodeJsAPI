import livros from "../models/Livros.js";



class LivroController {

static listarLivros = (req,res) =>{
    livros.find((err,livros)=> {
        res.status(200).send(livros);
      })
}

static cadastrarLivro = (req,res) =>{
let livro = new livros(req.body)

   livro.save((err)=>{
    if(err){
        res.status(500).send({message: `${err.message}+ falha ao cadastrar`})
    } else {
        res.status(201).send(livro.toJSON())
    }
   })

}



}

export default LivroController