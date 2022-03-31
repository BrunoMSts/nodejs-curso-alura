import { Schema, model } from "mongoose";

export interface IAutor {
    id: string;
    nome: string;
    nacionalidade: string;
}

const autorSchema = new Schema<IAutor>(
    {
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String }
    }
)

const autores = model<IAutor>("autores", autorSchema);

export default autores;