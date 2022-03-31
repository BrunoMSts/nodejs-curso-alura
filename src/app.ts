import express from 'express';
import db from './config/dbConnect';
import routes from './routes/index';

const app = express();

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso! 😃')
})

app.use(express.json());
routes(app);

export default app;