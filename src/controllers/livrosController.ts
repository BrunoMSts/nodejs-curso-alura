import { Request, Response } from "express";
import livros, { ILivro } from "../models/Livro";

class LivroController {
    
    static listarLivros = (req: Request, res: Response) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).send(livros);
        })
    }

    static listarLivroPorId = (req: Request, res: Response) => {
        const { id } = req.params;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
            if(!err) { res.status(200).send(livros) }
            else { 
                res.status(400).send({ message: `${err.message} - Id não encontrado 😥` });
            }
        })
    }

    static cadastrarLivro = (req: Request, res: Response) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro 😞`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })                                                                              
    }

    static atualizarLivro = (req: Request, res: Response) => {
        const { id } = req.params;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err: Error) => {
            if(!err) { res.status(200).send({ message: 'Livro alterado com sucesso 👍' })}
            else { res.status(500).send({ message: err.message }) }
        })
    }

    static deletarLivro = (req: Request, res: Response) => {
        const { id } = req.params

        livros.findByIdAndDelete(id, (err: Error) => {
            if(!err) { res.status(200).send({ message: 'Livro deletado com sucesso' })}
            else { res.status(500).send({ message: err.message })}
        })
    }

    static listarLivroPorEditora = (req: Request, res: Response) => {
        const { editora } = req.query;

        livros.find({ 'editora': editora }, {}, (err: Error, livros: ILivro) => {
            res.status(200).send(livros);
        })
    }
}

export default LivroController;