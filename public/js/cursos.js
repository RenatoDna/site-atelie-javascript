window.addEventListener("load", main);

let cursos = [];
let carrinho = [];

async function main() {
    try {
        const response = await fetch("http://localhost:3000/api/cursos");
        const dadosPuros = await response.json();
        cursos = dadosPuros;

        // Verificar e configurar o carrinho
        const miCarrinho = localStorage.getItem("meuatelie-carrinho");
        try {
            carrinho = miCarrinho ? JSON.parse(miCarrinho) : [];
        } catch (e) {
            console.error("Erro ao carregar o carrinho do localStorage:", e);
            carrinho = [];
            localStorage.setItem("meuatelie-carrinho", "[]");
        }

        const carrinhoItens = document.getElementById("carrinho-itens");
        if (carrinhoItens) {
            carrinhoItens.innerHTML = ""; // Limpar itens do carrinho

            for (let x = 0; x < carrinho.length; x++) {
                const elementoCarrinho = criarElementoDoLocalStorage(carrinho[x]);
                carrinhoItens.innerHTML += elementoCarrinho;
            }
            adicionarEventoDeExclusao();
            atualizarValorTotal();
        } else {
            console.error("Elemento com id 'carrinho-itens' não encontrado.");
        }

        // Renderizar cursos
        const divCursos = document.getElementById("cursos");
        if (divCursos) {
            cursos.forEach((curso, index) => {
                const divCurso = document.createElement("div");
                const imgCurso = document.createElement("img");
                const h2Curso = document.createElement("h2");
                const pCurso = document.createElement("p");
                const p2Curso = document.createElement("p");
                const ulCurso = document.createElement("ul");
                const li1Curso = document.createElement("li");
                const li4Curso = document.createElement("li");
                const buttonCurso = document.createElement("button");

                divCurso.className = "cursos";
                divCurso.id = `curso-${index}`;

                imgCurso.src = curso.img;
                imgCurso.alt = curso.titulo;

                h2Curso.textContent = curso.titulo;
                pCurso.textContent = curso.descricao;
                p2Curso.textContent = `Conteúdo: ${curso.conteudo}`;

                li1Curso.textContent = `Tempo: ${curso.duracao}`;
                li4Curso.textContent = `Valor: R$ ${curso.valor},00`;

                buttonCurso.textContent = "Inscrever-se";
                buttonCurso.dataset.id = index;
                buttonCurso.addEventListener("click", adicionarNoCarrinho);

                ulCurso.appendChild(li1Curso);
                ulCurso.appendChild(li4Curso);

                divCurso.appendChild(imgCurso);
                divCurso.appendChild(h2Curso);
                divCurso.appendChild(pCurso);
                divCurso.appendChild(p2Curso);
                divCurso.appendChild(ulCurso);
                divCurso.appendChild(buttonCurso);

                divCursos.appendChild(divCurso);
            });
        } else {
            console.error("Elemento com id 'cursos' não encontrado.");
        }

        const bFinalizar = document.getElementById("finalizar-compra");
        if (bFinalizar) {
            bFinalizar.addEventListener("click", finalizarCompra);
        } else {
            console.error("Elemento com id 'finalizar-compra' não encontrado.");
        }
    } catch (error) {
        console.error("Erro ao carregar os cursos:", error);
    }
    atualizarContadorCarrinho();
}

function adicionarNoCarrinho(event) {
    const cursoId = event.target.dataset.id;
    const curso = cursos[cursoId];

    const cursoNoCarrinho = carrinho.find(item => item.nome === curso.titulo);

    if (cursoNoCarrinho) {
        alert("Esse curso já está no carrinho.");
    } else {
        carrinho.push({
            nome: curso.titulo,
            preco: `R$ ${curso.valor},00`,
            qtd: 1
        });

        const carrinhoItens = document.getElementById("carrinho-itens");
        if (carrinhoItens) {
            carrinhoItens.innerHTML += criarElementoDoCarrinho(cursoId);
        }
        alert("Curso adicionado ao carrinho.");
        adicionarEventoDeExclusao();
        atualizarValorTotal();
        atualizarLocalStorage();
        atualizarContadorCarrinho();
    }
}

export function atualizarContadorCarrinho() {
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = carrinho.length; // Atualiza o contador com o número de itens no carrinho
        return carrinho.length;
    }
    return 0;
}

function adicionarEventoDeExclusao() {
    const excluirBotao = document.getElementsByClassName("excluir");
    for (let x = 0; x < excluirBotao.length; x++) {
        excluirBotao[x].addEventListener("click", excluirDoCarrinho);
    }
}

function atualizarLocalStorage() {
    localStorage.setItem("meuatelie-carrinho", JSON.stringify(carrinho));
}

function excluirDoCarrinho(evento) {
    const cursoNome = evento.target.parentElement.children[0].textContent;
    carrinho = carrinho.filter(item => item.nome !== cursoNome);

    evento.target.parentElement.remove();
    atualizarLocalStorage();
    atualizarValorTotal();
    atualizarContadorCarrinho();
}

function criarElementoDoCarrinho(id) {
    const curso = cursos[id];
    const carrinhoItem = `
        <div class="carrinho-item">
            <p>${curso.titulo}</p>
            <input value="1" readonly>
            <p class="preco">R$ ${curso.valor},00</p>
            <button class="excluir">X</button>
        </div>
    `;
    return carrinhoItem;
}

function criarElementoDoLocalStorage(obj) {
    const carrinhoItem = `
        <div class="carrinho-item">
            <p>${obj.nome}</p>
            <p class="qtd">${obj.qtd}</p>
            <p class="preco">${obj.preco}</p>
            <button class="excluir">X</button>
        </div>
    `;
    return carrinhoItem;
}

function atualizarValorTotal() {
    const precos = document.getElementsByClassName("preco");
    let total = 0;
    for (let x = 0; x < precos.length; x++) {
        const preco = +precos[x].textContent.replace("R$ ", "").replace(",", ".");
        total += preco;
    }

    const pTotal = document.getElementById("total");
    if (pTotal) {
        pTotal.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
    }

    const bFinalizar = document.getElementById("finalizar-compra");
    if (bFinalizar) {
        if (precos.length > 0) {
            bFinalizar.classList.add("botao");
            bFinalizar.disabled = false;
        } else {
            bFinalizar.classList.remove("botao");
            bFinalizar.disabled = true;
        }
    }
    atualizarHeader(precos.length);
}

function atualizarHeader(qtd) {
    const itemCount = document.getElementsByClassName("item-count");
    if (itemCount.length > 0) {
        itemCount[0].textContent = qtd;
    }
}

function finalizarCompra() {
    window.location.href = "pagamento.html";
}
