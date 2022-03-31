import { Schema, model } from "mongoose";

export interface ILivro {
    id: string;
    titulo: string;
    autor: Schema.Types.ObjectId;
    editora: string;
    numeroPaginas: number;
}

const livroSchema = new Schema<ILivro>(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: Schema.Types.ObjectId, ref: 'autores', required: true },
        editora: { type: String, required: true },
        numeroPaginas: { type: Number }
    }
)

const livros = model<ILivro>('livros', livroSchema);

export default livros;