import { dbPromise } from "../database/bancosql.js";

async function registrarUsuario(nome,sobrenome,telefone,endereco,senha,email) {
    const db = await dbPromise;
    try {  
        db.run(
            `INSERT INTO users 
            (nome,sobrenome,telefone,endereco,senha,email)
            VALUES(?,?,?,?,?,?)`,
            [nome,sobrenome,telefone,endereco,senha,email]
        );
    } catch (error) {
        console.error("Erro ao Registrar o Usuario: ",error.message);
        throw error;
    }
}

async function obterUsuarioPorEmail(email) {
    const db = await dbPromise;
    try {
        const users = await db.get("SELECT * FROM users WHERE email = ?",[email])
        return users;
    } catch (error) {
        console.error("Erro ao recuperar o usuario pelo email",error.message);
        throw error;
    }
}

export{registrarUsuario,obterUsuarioPorEmail}