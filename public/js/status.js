import { atualizarContadorCarrinho } from './cursos.js';

window.addEventListener("load", () => {
    const dados = atualizarContadorCarrinho(); // Chama a função e obtém o número de itens no carrinho
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = dados; // Atualiza o contador no DOM
    } else {
        console.error("Elemento com id 'contador' não encontrado.");
    }

    // Verificar se o usuário está logado
    const token = localStorage.getItem('token');
    const aLogin = document.querySelector('.botao-login');
    const aCadastro = document.querySelector('.botao-cadastro');
    const opcoesUsuario = document.createElement('div');
    opcoesUsuario.id = 'opcoes-usuario';
    

    if (token) {
        aLogin.style.display = 'none';
        aCadastro.style.display = 'none';

        const aLogout = document.createElement('a');
        aLogout.href = '#';
        aLogout.id = 'botao-logout';
        aLogout.className = 'botao-login';
        aLogout.textContent = 'Logout';

        const aDadosUsuario = document.createElement('a');
        aDadosUsuario.href = '#';
        aDadosUsuario.id = 'botao-dados-usuarios';
        aDadosUsuario.className = 'botao-cadastro';
        aDadosUsuario.textContent = 'Dados do Usuário';


        opcoesUsuario.appendChild(aLogout);
        opcoesUsuario.appendChild(aDadosUsuario);
        aCadastro.parentElement.appendChild(opcoesUsuario);

        // Configurar eventos mudar botoes de login e cadastro para logout e dados do usuario
        aLogout.addEventListener('click', () => {
            localStorage.removeItem('token');
            location.reload(); 
        });

        aDadosUsuario.addEventListener('click', async () => {
            const response = await fetch('/users/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                alert(`Usuario: ${data.email}`);
            } else {
                alert('Não foi possível obter dados do usuário');
            }
        });
    } else {
        aLogin.style.display = 'block';
        aCadastro.style.display = 'block';
        if (opcoesUsuario) opcoesUsuario.remove();
    }
});
