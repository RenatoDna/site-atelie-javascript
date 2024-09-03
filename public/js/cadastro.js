const form = document.getElementById('form-cadastro');
form.innerHTML=`
<div class="form-group">
                        <label for="username">Nome de usuário:</label>
                        <input type="text" id="nome" name="username" placeholder="Digite seu nome de usuário" required>
                    </div>
                    <div class="form-group">
                        <label for="sobrenome">Sobrenome:</label>
                        <input type="text" id="sobrenome" name="sobrenome" placeholder="Digite seu sobrenome de usuário" required>
                    </div>
                    <div class="form-group">
                        <label for="telefone">Telefone:</label>
                        <input type="text" id="telefone" name="telefone" placeholder="Digite sue telefone" required>
                    </div>
                    <div class="form-group">
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" placeholder="Digite seu Endereço" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Senha:</label>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Didite seu E-mail" required>
                    </div>
                    <button type="submit">Cadastrar</button>
`

form.addEventListener('submit', async(event) => {
    // inpede envio padrao do formulario
    event.preventDefault(); 
    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        //enviar dados ao backend
        const response = await fetch('/api/cadastro',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({nome,sobrenome,telefone,endereco,email,senha})
        });

        // tratamento da requisição
        const data = await response.json();
        if(response.ok){
            // mensagem de sucesso
            alert('Cadastro realizado com sucesso'); 
        }
            // mensagem de falha
            alert(data.message);
    } catch (error) {
        console.error('Erro ao cadastrar Usuario: ', error);
        alert('Erro ao cadastrar Usuario.')
    }
});