import { Request, Response } from "express";
import { IUsers } from "../Model/user";
import userModel from "../Model/userModel";

// Exibe a tela de login.
function login(req: Request, res: Response, next:any){
    res.render("login");
}

// Confere no banco se o usuario e a senha correspondem.
async function checkLogin(req: Request, res: Response, next:any){

    const login = req.body as IUsers;

    try{
        let logado = await userModel.findOne({
            where:{
                user: login.user,
                password: login.password
            }
        });

        if(logado != null){
            res.redirect("/clientes");
        }
        else{
            throw new Error("Usuario ou senha invalida")
        }
    }catch(erro){
        console.log(erro);
        res.status(500).end();
    }


    
}
export default {login, checkLogin};