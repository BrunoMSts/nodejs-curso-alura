import { IAutor } from './../models/Autor';
import autores from "../models/Autor";
import { Request, Response } from "express";

class AutorController {
    
    static listarAutores = (req: Request, res: Response) => {
        autores.find((err, autores) => {
            res.status(200).send(autores);
        })
    }

    static listarAutorPorId = (req: Request, res: Response) => {
        const { id } = req.params;

        autores.findById(id, (err: Error, autores: IAutor) => {
            if(!err) { res.status(200).send(autores) }
            else { res.status(400).send({ message: `${err.message} - Id não encontrado 😥` })}
        })
    }

    static cadastrarAutor = (req: Request, res: Response) => {
        let autor = new autores(req.body);

        autor.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor 😞`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })                                                                              
    }

    static atualizarAutor = (req: Request, res: Response) => {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err: Error) => {
            if(!err) { res.status(200).send({ message: 'autor alterado com sucesso 👍' })}
            else { res.status(500).send({ message: err.message }) }
        })
    }

    static deletarAutor = (req: Request, res: Response) => {
        const { id } = req.params

        autores.findByIdAndDelete(id, (err: Error) => {
            if(!err) { res.status(200).send({ message: 'autor deletado com sucesso' })}
            else { res.status(500).send({ message: err.message })}
        })
    }
}

export default AutorController;