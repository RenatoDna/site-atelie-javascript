async function main() {
    // Seleciona o header pelo ID
    const header = document.getElementById("container");
    
    // Cria a logo do site
    const logo = document.createElement("a");
    logo.href = "../index.html";
    const imgLogo = document.createElement('img');
    imgLogo.src = "../img/Arte_Mais_Brasil-logo-F6217D7B86-seeklogo.com.png";
    imgLogo.alt = "logo principal do site";
    imgLogo.className = "logo-site";
    logo.appendChild(imgLogo);
    header.appendChild(logo);
    
    // Cria o menu de navegação
    const navMenu = document.createElement("nav");
    const ulMenu = document.createElement("ul");

    const liMenuIndex = document.createElement("li");
    const aIndex = document.createElement("a");
    aIndex.href = "../index.html";
    aIndex.textContent = "INICIO";
    liMenuIndex.appendChild(aIndex);

    const liMenuGaleria = document.createElement("li");
    const aGaleria = document.createElement("a");
    aGaleria.href = "../html/galeria.html";
    aGaleria.textContent = "GALERIA";
    liMenuGaleria.appendChild(aGaleria);

    const liMenuCursos = document.createElement("li");
    const aCursos = document.createElement("a");
    aCursos.href = "../html/cursos.html";
    aCursos.textContent = "CURSOS";
    liMenuCursos.appendChild(aCursos);

    const liMenuSobrenos = document.createElement("li");
    const aSobrenos = document.createElement("a");
    aSobrenos.href = "../html/sobrenos.html";
    aSobrenos.textContent = "SOBRE NOS";
    liMenuSobrenos.appendChild(aSobrenos);

    ulMenu.appendChild(liMenuIndex);
    ulMenu.appendChild(liMenuGaleria);
    ulMenu.appendChild(liMenuCursos);
    ulMenu.appendChild(liMenuSobrenos);

    // Cria os botões de login e cadastro
    const divBotoes = document.createElement("div");
    divBotoes.className = "botoes-login-cadastro";

    const aCarrinho = document.createElement("a");
    aCarrinho.id="icon-carrinho";
    aCarrinho.innerHTML='🛒 Carrinho: <span id="contador">0</span> itens';
    aCarrinho.href="../html/pagamento.html";

    const aLogin = document.createElement("a");
    aLogin.href = "../html/login.html";
    aLogin.className = "botao-login";
    aLogin.textContent = "Login";

    const aCadastro = document.createElement("a");
    aCadastro.href = "../html/cadastro.html";
    aCadastro.className = "botao-cadastro";
    aCadastro.textContent = "Cadastro";

    // Adiciona o menu e os botões ao navMenu
    navMenu.appendChild(ulMenu);
   
    // Adiciona o navMenu ao header
    header.appendChild(navMenu);
    header.appendChild(aCarrinho);
    header.appendChild(divBotoes);
    header.appendChild(aLogin);
    header.appendChild(aCadastro);
    
    //----------------------------------------------------------
    // Seleciona o footer pelo ID
    const footer = document.getElementById("footer");

    // Cria a div para redes sociais
    const divRedesSociais = document.createElement("div");
    divRedesSociais.className = "rede-sociais";

    // Cria o link e a imagem para o Instagram
    const aInsta = document.createElement("a");
    aInsta.href = "https://www.instagram.com/renatodna/";
    const imgInsta = document.createElement('img');
    imgInsta.src = "../img/insta.png";
    imgInsta.alt = "logo-insta";
    imgInsta.className = "logo-redes-sociais";
    aInsta.appendChild(imgInsta);

    // Cria o link e a imagem para o Facebook
    const aFace = document.createElement("a");
    aFace.href = "https://www.facebook.com/people/Dna-Desenhos/100069229626236/";
    const imgFace = document.createElement('img');
    imgFace.src = "../img/face.png";
    imgFace.alt = "logo-facebook";
    imgFace.className = "logo-redes-sociais";
    aFace.appendChild(imgFace);

    // Cria o link e a imagem para o WhatsApp
    const aWhats = document.createElement("a");
    aWhats.href = "https://web.whatsapp.com/+5587999999999";
    const imgWhats = document.createElement('img');
    imgWhats.src = "../img/whats.png";
    imgWhats.alt = "logo-whats";
    imgWhats.className = "logo-redes-sociais";
    aWhats.appendChild(imgWhats);
    
    // Adiciona os links de redes sociais à divRedesSociais
    divRedesSociais.appendChild(aInsta);
    divRedesSociais.appendChild(aFace);
    divRedesSociais.appendChild(aWhats);

    // Cria a div de contatos
    const divContatos = document.createElement("div");

    // Cria os parágrafos com informações de contato
    const pTelefone = document.createElement("p");
    pTelefone.textContent = "+55 87 99999-9999";

    const pTelefone2 = document.createElement("p");
    pTelefone2.textContent = "87 99999-9999";

    const pEmail = document.createElement("p");
    pEmail.className = "email";
    pEmail.textContent = "dna.renato@gmail.com";

    const pEndereco = document.createElement("p");
    pEndereco.textContent = "Rua domingos Sabados, 1740 - Loja 16 - centro - Garanhuns, PE - CEP 55299-000";

    // Adiciona os parágrafos à divContatos
    divContatos.appendChild(pTelefone);
    divContatos.appendChild(pTelefone2);
    divContatos.appendChild(pEmail);
    divContatos.appendChild(pEndereco);

    // Cria o menu de navegação para o footer
    const navMenuFooter = document.createElement("nav");
    const ulMenuFooter = document.createElement("ul");

    const liFooterInicio = document.createElement("li");
    const aFooterInicio = document.createElement("a");
    aFooterInicio.href = "../index.html";
    aFooterInicio.textContent = "INICIO";
    liFooterInicio.appendChild(aFooterInicio);

    const liFooterGaleria = document.createElement("li");
    const aFooterGaleria = document.createElement("a");
    aFooterGaleria.href = "../html/galeria.html";
    aFooterGaleria.textContent = "GALERIA";
    liFooterGaleria.appendChild(aFooterGaleria);

    const liFooterCursos = document.createElement("li");
    const aFooterCursos = document.createElement("a");
    aFooterCursos.href = "../html/cursos.html";
    aFooterCursos.textContent = "CURSOS";
    liFooterCursos.appendChild(aFooterCursos);

    const liFooterSobrenos = document.createElement("li");
    const aFooterSobrenos = document.createElement("a");
    aFooterSobrenos.href = "../html/sobrenos.html";
    aFooterSobrenos.textContent = "SOBRE NOS";
    liFooterSobrenos.appendChild(aFooterSobrenos);

    ulMenuFooter.appendChild(liFooterInicio);
    ulMenuFooter.appendChild(liFooterGaleria);
    ulMenuFooter.appendChild(liFooterCursos);
    ulMenuFooter.appendChild(liFooterSobrenos);

    navMenuFooter.appendChild(ulMenuFooter);

    // Adiciona todos os elementos ao footer
    footer.appendChild(divRedesSociais);
    footer.appendChild(navMenuFooter);
    footer.appendChild(divContatos);
    
}
// Chama a função principal para executar a construção do header e footer
main();
