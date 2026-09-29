import { Router } from "express";
const router = Router();
import clientsController from "../Controller/clientsController";
 
// Direciona os enderecos de clientes para as funcoes do controlador.
router.get("/clientes/", clientsController.index);

// Exibe o formulario e recebe os dados de um novo cliente.
router.get("/clientes/create", clientsController.create); // exibe a View de formulario
router.post('/clientes/create', clientsController.store); // Executa o formulario

// Busca e retorna os dados do cliente indicado pelo ID.
router.get("/clientes/:id", clientsController.show);

// Exibe o formulario de edicao e salva as alteracoes.
router.get("/clientes/edit/:id", clientsController.edit);
router.post("/clientes/edit/:id", clientsController.update);

// Exclui o cliente indicado pelo ID.
router.get("/clientes/del/:id", clientsController.del);


export default router;  