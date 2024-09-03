import { Router } from "express";
import { registrarUsuario ,obterUsuarioPorEmail } from "../models/users.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

const routeUsuario = Router();
const SECRET_KEY = "S&nh@123"

//cadastrar usuario
routeUsuario.post("/api/cadastro",async (req ,res) => {
    const {nome, sobrenome,telefone,endereco,senha,email} = req.body;
    const existingUser = await obterUsuarioPorEmail(email);
    try {
        if(existingUser){
            return res.status(400).json({message:"Usuario já cadastrado!"});
        }else{
            const salt = await bcrypt.genSalt(10);
            const senhaHasheada = await bcrypt.hash(senha,salt);
            await registrarUsuario(nome,sobrenome,telefone,endereco,senhaHasheada,email);
            return res.status(201).json({message:"Cadastro realizado com sucesso!"});
        }
    } catch (error) {
        console.error("Erro durante o registro do usuario!",error.message);
        return res.status(500).json({message: "Erro no servidor, Tente novamente mais Tarde."});
    }
});

//validaçao token 
routeUsuario.post("/api/token",(req,res)=> {
    const {token} = req.body;
    try {
        const isValid = JWT.verify(token,SECRET_KEY);
        if(isValid){
            return res.status(200).json({message:"Token Valido"})
        }else{
            return res.status(401).json({message:"Token Invalido"})
        }
    } catch (error) {
        console.error("Erro durante a validação do token",error.message);
        return res.status(500).json({message: "Erro no servidor, Tente novamente mais tarde."})
        
    }
})

// login usuario
routeUsuario.post("/api/login",async (req,res)=> {
    const {email,senha} = req.body;

    try {
        const existingUser = await obterUsuarioPorEmail(email);
        if(existingUser != null){
            const andEqual = await bcrypt.compare(senha,existingUser.senha);
            if(andEqual){
                const token = JWT.sign({email,acessRules:"Acesso de admin"},SECRET_KEY,{expiresIn:"15m"});
                return res.status(200).json({token});
            }else{
                return res.status(401).json({message:"Usuario ou senha incorreta"});
            }
        }else{
            return res.status(404).json({message:"Usuario não encontrado"});
        }
    } catch (error) {
        console.error("Erro durante o login",error.message);
        return res.status(500).json({message: "Erro no servidor, Tente novamente mais tarde."})
    }
});


export {routeUsuario};