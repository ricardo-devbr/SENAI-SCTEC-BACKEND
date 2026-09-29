import { Request, Response } from "express";
import { ICients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

// Valida o ID da URL e retorna seu valor como numero positivo.
// Se o ID for invalido, envia uma resposta 400 e retorna null.
function getClientId(req: Request, res: Response): number | null {
    const rawId = req.params.id;
    // Confere se o parametro e uma string formada apenas por digitos.
    if (typeof rawId !== "string" || !/^\d+$/.test(rawId)) {
        res.status(400).send("ID de cliente invalido.");
        return null;
    }

    const id = Number(rawId);
    // Evita IDs muito grandes, fracionarios ou menores que 1.
    if (!Number.isSafeInteger(id) || id < 1) {
        res.status(400).send("ID de cliente invalido.");
        return null;
    }

    return id;
}

// Lista todos os clientes e retorna os dados em formato JSON.
async function index(req: Request, res: Response, next: any){
    // res.render("index");
    const clients = await clientsModel.findAll();
    res.json(clients);
}

// Busca e retorna um cliente pelo ID.
async function show(req: Request, res: Response, next: any){
    // Interrompe a funcao se a validacao ja enviou uma resposta de erro.
    const id = getClientId(req, res);
    if (id === null) return;

    const client = await clientsModel.findByPk(id);
    res.json(client);
}

// Exibe o formulario para cadastrar um cliente.
function create (req: Request, res: Response, next: any){
    res.render("create");
}

// Salva um novo cliente com os dados enviados pelo formulario.
async function store(req: Request, res: Response, next: any){
    let client = req.body as ICients;

    await clientsModel.create({...client});
    res.redirect('/clientes');
}

// Busca o cliente e exibe o formulario de edicao.
async function edit(req: Request, res: Response, next: any){
    // Interrompe a funcao se a validacao ja enviou uma resposta de erro.
    const id = getClientId(req, res);
    if (id === null) return;

    const client = await clientsModel.findByPk(id);
    res.render("edit", {client: client});
}

// Atualiza os dados do cliente e volta para a lista.
async function update(req: Request, res: Response, next: any){
    // Interrompe a funcao se a validacao ja enviou uma resposta de erro.
    const id = getClientId(req, res);
    if (id === null) return;

    await clientsModel.update(req.body as ICients,{
        where: {
            id
        }
    });
    res.redirect('/clientes');
}

// Exclui o cliente indicado pelo ID.
async function del(req: Request, res: Response, next: any){
    // Interrompe a funcao se a validacao ja enviou uma resposta de erro.
    const id = getClientId(req, res);
    if (id === null) return;

    await clientsModel.destroy(
        {
         where: {
            id
        }
        });
    res.redirect('/clientes');
}
export default {index, create, store, show, edit, update, del};