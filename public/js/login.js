document.addEventListener('DOMContentLoaded', () => {
    const formaLogin = document.getElementById("formaLogin");

    formaLogin.innerHTML=`
        <div class="formaGrupoLogin">
            <label for="username">E-mail do usuário:</label>
            <input type="text" id="email" name="email" placeholder="Digite seu E-mail" required>
        </div>
        <div class="formaGrupoLogin">
            <label for="password">Senha:</label>
            <input type="password" id="senha" name="password" placeholder="Digite sua senha" required>
        </div>
        <div class="ancoras-senha">
            <a href="#" class="ancora-esq-senha">Esqueceu a Senha</a>
            <a href="./cadastro.html" class="ancora-cadastro">Ainda não Cadastrado!</a>
        </div>
        <button type="submit">Entrar</button>
    `

    formaLogin.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Login realizado com sucesso!');
                setTimeout(() => {
                    window.location.href = '/html/cursos.html';
                }, 1000);
            } else {
                alert('Credenciais inválidas');
            }
        } catch (error) {
            console.error('Erro ao usuário logar', error);
        }
    });
});
