import express from "express";
import clientsRouter from "./Router/client";
import db from './db'
import usersRout from "./Router/user";

// Cria o servidor e prepara o tratamento dos formularios.
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(clientsRouter);
app.use(usersRout);
// Configura o Pug e a pasta onde ficam as telas.
app.set("view engine", "pug");
app.set("views", "./Views");

// Sincroniza os modelos com o banco antes de iniciar o servidor.
db.sync().then(() =>{
	console.log("conectado com o banco: " + process.env.DB_NAME)
}).then(() => {
	// se a conexaoa for bem sucedida o servidor é criado.
	app.listen(process.env.PORT, () => {
		console.log("Servidor rodando em http://localhost:3000");
	})
})