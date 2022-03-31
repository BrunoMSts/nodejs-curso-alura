import express, { Request, Response, Express }  from "express";

import autores from "./autoresRoutes";
import livros from "./livrosRoutes"

const routes = (app: Express) => {
    app.route('/').get((req: Request, res: Response) => {
        res.status(200).send({ titulo: "Curso de Node" })
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;