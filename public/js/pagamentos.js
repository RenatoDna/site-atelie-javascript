document.addEventListener("DOMContentLoaded", function() {
    const formaDePagamento = document.getElementById("formaDePagamento");
    const detalhePagamento = document.getElementById("detalhePagamento");
    const ResumoDoCurso = document.getElementById("ResumoDoCurso");

    // Recuperar dados do carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem("meuatelie-carrinho")) || [];
    let total = 0;

    // Função para atualizar o valor total
    function atualizarValorTotal() {
        total = carrinho.reduce((acc, curso) => acc + parseFloat(curso.preco.replace("R$ ", "")), 0);
        return total;
    }

    // Exibir os cursos do carrinho
    if (carrinho.length > 0) {
        carrinho.forEach(curso => {
            const cursoItem = document.createElement("div");
            cursoItem.innerHTML = `<p>${curso.nome}: ${curso.qtd}x - ${curso.preco}</p>`;
            ResumoDoCurso.appendChild(cursoItem);
        });

        const total = atualizarValorTotal();
        const totalItem = document.createElement("div");
        totalItem.innerHTML = `<p>Total: R$${total.toFixed(2).replace(".", ",")}</p>`;
        ResumoDoCurso.appendChild(totalItem);
    } else {
        ResumoDoCurso.innerHTML = "<p>Nenhum curso no carrinho.</p>";
    }

    // Atualizar os detalhes de pagamento com base no método selecionado
    function updatePaymentDetails() {
        const selecionarMetodo = document.querySelector('input[name="metodoDePagamento"]:checked').value;
        detalhePagamento.innerHTML = "";

        if (selecionarMetodo === "credito" || selecionarMetodo === "debito") {
            detalhePagamento.innerHTML = `
                <div class="GrupoMetodoPagamento">
                    <label for="card-number">Número do Cartão</label>
                    <input type="text" id="card-number" name="card-number" required>
                </div>
                <div class="GrupoMetodoPagamento">
                    <label for="card-name">Nome no Cartão</label>
                    <input type="text" id="card-name" name="card-name" required>
                </div>
                <div class="GrupoMetodoPagamento">
                    <label for="card-expiry">Data de Validade</label>
                    <input type="text" id="card-expiry" name="card-expiry" placeholder="MM/AA" required>
                </div>
                <div class="GrupoMetodoPagamento">
                    <label for="card-cvv">CVV</label>
                    <input type="text" id="card-cvv" name="card-cvv" required>
                </div>
            `;
        } else if (selecionarMetodo === "boleto") {
            detalhePagamento.innerHTML = `
                <p>O boleto será gerado e enviado para o seu e-mail.</p>
            `;
        } else if (selecionarMetodo === "pix") {
            detalhePagamento.innerHTML = `
                <p>Use o QR code abaixo para pagar com PIX.</p>
                <img src="../img/qrcode.jpg" alt="QR Code PIX">
            `;
        }
    }

    // Adicionar eventos de mudança de método de pagamento
    document.querySelectorAll('input[name="metodoDePagamento"]').forEach(radio => {
        radio.addEventListener("change", updatePaymentDetails);
    });

    updatePaymentDetails(); // Inicializa com o método de pagamento selecionado por padrão

    // Processar o pagamento
    formaDePagamento.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Pagamento realizado com sucesso!");
        // Adicione aqui a lógica para processar o pagamento

        // Após o pagamento, esvazie o carrinho e atualize o localStorage
        localStorage.setItem("meuatelie-carrinho", JSON.stringify([]));
        ResumoDoCurso.innerHTML = "<p>Nenhum curso no carrinho.</p>";
        detalhePagamento.innerHTML = "";
    });
});
