import livros from "../models/Livros.js";



class LivroController {

static listarLivros = (req,res) =>{
    // 1. encontra os livros 2. popula com os dados do outro doc 3. executa os comandos
    livros.find()
          .populate("autor")
          .exec((err,livros)=> {
           res.status(200).send(livros);
            })
}

static listarLivroPorId = (req,res) =>{
const id =req.params.id
    
livros.findById(id)
       .populate("autor",'nome')
       .exec((err, livros) => {
           if(err){
               res.status(400).send({message: `${err.message}+ ID não encontrado`})
            } else {
                 res.status(200).send(livros)
              }})
}

static cadastrarLivro = (req,res) =>{
    //instancia o livro e passa pra ele o que vem no body
let livro = new livros(req.body)

   livro.save((err)=>{
    if(err){
        res.status(500).send({message: `${err.message}+ falha ao cadastrar`})
    } else {
        res.status(201).send(livro.toJSON())
    }
   })
}

static atualizarLivro = (req,res) =>{
    const id =req.params.id

    livros.findByIdAndUpdate(id,{$set: req.body},(err)=>{
        if(!err){
            res.status(200).send({message: "atualização com sucesso"})
        } else {
            res.status(500).send({message: `${err.message}+ falha em atulizar `})
           
        }


    })
}

static excluirLivro = (req,res) =>{
    const id =req.params.id

    livros.findByIdAndDelete(id, (err)=>{
        if(!err)
         res.status(200).send({message: "Exclusão com sucesso"})
         else { res.send(500).send({message: `${err.message}+ ID invalido para exclusão`})}
    })

    
}

static listarLivrosPorTitulo = (req,res) =>{
     const titulo = req.query.titulo
     livros.find({'titulo': titulo},{},(err,livros)=>{
        res.status(200).send(livros)
     })
}


}

export default LivroController