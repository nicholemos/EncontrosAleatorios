document.addEventListener("DOMContentLoaded", function () {
    // ===== UI: botão segmentado (patamar) sem Bootstrap =====
    const segButtons = Array.from(document.querySelectorAll('.seg-btn'));
    segButtons.forEach(lbl => {
        const input = lbl.querySelector('input[type="radio"]');
        if (!input) return;
        input.addEventListener('change', () => {
            if (!input.checked) return;
            segButtons.forEach(b => b.classList.remove('active'));
            lbl.classList.add('active');
        });
    });
    // Função para abrir/fechar a caixinha de explicação
    const toggleGuide = document.getElementById("toggleGuide");
    const guideContent = document.getElementById("guideContent");
    const guideIcon = document.getElementById("guideIcon");

    if (toggleGuide && guideContent) {
        toggleGuide.addEventListener("click", function () {
            const isHidden = guideContent.style.display === "none";

            if (isHidden) {
                guideContent.style.display = "block";
                guideIcon.textContent = "[Ocultar]";
                toggleGuide.style.marginBottom = "10px"; // Dá espaço para o texto
            } else {
                guideContent.style.display = "none";
                guideIcon.textContent = "[Mostrar]";
                toggleGuide.style.marginBottom = "0"; // Fica compacto
            }
        });
    }
    // Elementos do DOM
    const rolagensAnterioresInput = document.getElementById("rolagensAnterioresInput");
    const rollEncounterBtn = document.getElementById("rollEncounter");
    const rollTableBtn = document.getElementById("rollTable");
    const ocultaveis = document.getElementById("ocultaveis");
    const tabelaEncontro = document.getElementById("tabelaEncontro");
    const tipoTerrenoSelect = document.getElementById("tipoTerreno");
    const rollAutomaticallyBtn = document.getElementById("rollAutomatically");

    let rolagensAnteriores = 0;

    // Função para mostrar/esconder a tabela de encontros
    function toggleTabela(mostrar) {
        ocultaveis.style.display = mostrar ? "block" : "none";
    }

    // Evento para o botão "Rolar Encontro" (chance de abrir a tabela)
    rollEncounterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        rolagensAnteriores++;
        rolagensAnterioresInput.value = rolagensAnteriores;

        const chanceDeAparecer = 5 + (rolagensAnteriores * 5);
        const randomPercentage = Math.floor(Math.random() * 100) + 1;

        if (randomPercentage <= chanceDeAparecer) {
            toggleTabela(true);
            rolagensAnteriores = 0;
            rolagensAnterioresInput.value = rolagensAnteriores;
        }
    });

    // Evento para o botão "Fechar Tabela"
    rollTableBtn.addEventListener("click", function (event) {
        event.preventDefault();
        toggleTabela(false);
    });

    // Função para obter o ajuste do patamar
    function getAjustePatamar() {
        if (document.getElementById("veterano").checked) return 30;
        if (document.getElementById("campeao").checked) return 70;
        if (document.getElementById("lenda").checked) return 110;
        return 0; // Iniciante
    }

    // Função para encontrar o resultado do encontro
    function encontrarResultado(terreno, rolagem) {
        for (const encontro of terrenos[terreno]) {
            if (rolagem <= encontro.porcentagem) {
                return encontro;
            }
        }
        return null; // Caso não encontre (improvável)
    }

    // Função para exibir o resultado na tabela
    function exibirResultado(rolagem, resultado) {
        // 1. Limpa a tabela principal (como você já fazia)
        while (tabelaEncontro.rows.length > 1) {
            tabelaEncontro.deleteRow(1);
        }

        if (!resultado) return;

        // 2. Preenche a tabela com o encontro atual
        const newRow = tabelaEncontro.insertRow();
        newRow.insertCell(0).innerHTML = rolagem;
        newRow.insertCell(1).innerHTML = resultado.descricao;
        newRow.insertCell(2).innerHTML = resultado.pag;

        const imagemCell = newRow.insertCell(3);
        const imagemElement = document.createElement("img");
        imagemElement.src = resultado.imagem || "img/default.jpg";
        imagemElement.alt = resultado.descricao;
        imagemElement.style.width = "100px";
        imagemCell.appendChild(imagemElement);

        // 3. ATUALIZAÇÃO DO HISTÓRICO (Novo!)
        const listaHistorico = document.getElementById("historicoEncontros");

        // Remove a mensagem de "Nenhum encontro" se ela existir
        if (listaHistorico.children[0] && listaHistorico.children[0].style.fontStyle === "italic") {
            listaHistorico.innerHTML = "";
        }

        // Cria o novo item da lista
        const novoLog = document.createElement("li");
        novoLog.style.padding = "5px 0";
        novoLog.style.borderBottom = "1px solid #eee";
        novoLog.innerHTML = `<strong>[${rolagem}]</strong> ${resultado.descricao} <small>(${new Date().toLocaleTimeString()})</small>`;

        // Adiciona no topo da lista
        listaHistorico.prepend(novoLog);

        // Mantém apenas os últimos 5 para não poluir a tela
        if (listaHistorico.children.length > 5) {
            listaHistorico.removeChild(listaHistorico.lastChild);
        }
    }

    // Função principal para rolar os encontros
    function rolarEncontros() {
        let randomPercentage = Math.floor(Math.random() * 100) + 1;

        // Verifica a rolagem especial de "O Rhandomm"
        if (randomPercentage === 100) {
            const segundaRolagem = Math.floor(Math.random() * 100) + 1;
            if (segundaRolagem <= 25) {
                const resultadoEspecial = {
                    descricao: "O Rhandomm",
                    pag: "Ameaças, pag. 113"
                };
                exibirResultado(100, resultadoEspecial);
                return;
            }
        }

        const ajuste = getAjustePatamar();
        const rolagemFinal = randomPercentage + ajuste;
        const tipoTerreno = tipoTerrenoSelect.value;
        const resultado = encontrarResultado(tipoTerreno, rolagemFinal);

        exibirResultado(rolagemFinal, resultado);
    }

    // Evento para o botão "Rolar Automaticamente"
    rollAutomaticallyBtn.addEventListener("click", function (event) {
        event.preventDefault();
        rolarEncontros();
    });
});
// Função para rolar dados rápidos
function rolarDado(lados) {
    const resultado = Math.floor(Math.random() * lados) + 1;
    const display = document.getElementById("resultadoDado");
    const listaHistorico = document.getElementById("historicoEncontros");

    // Efeito visual rápido de "piscar"
    display.style.opacity = "0";

    setTimeout(() => {
        display.innerText = `Lançou d${lados}: ${resultado}`;
        display.style.opacity = "1";

        // Adiciona a rolagem de dado ao histórico também!
        if (listaHistorico) {
            if (listaHistorico.children[0] && listaHistorico.children[0].style.fontStyle === "italic") {
                listaHistorico.innerHTML = "";
            }
            const novoLog = document.createElement("li");
            novoLog.style.padding = "5px 0";
            novoLog.style.borderBottom = "1px solid #eee";
            novoLog.style.color = "#475569";
            novoLog.innerHTML = `<span>🎲 <strong>d${lados}:</strong> tirou <strong>${resultado}</strong></span> <small>(${new Date().toLocaleTimeString()})</small>`;

            listaHistorico.prepend(novoLog);
            if (listaHistorico.children.length > 5) listaHistorico.removeChild(listaHistorico.lastChild);
        }
    }, 100);
}

// Executa a rolagem com base nos inputs atuais
function executarRolagemCustomizada() {
    const qty = parseInt(document.getElementById("diceQty").value) || 1;
    const faces = parseInt(document.getElementById("diceFaces").value) || 20;
    const bonus = parseInt(document.getElementById("diceBonus").value) || 0;

    let totalDados = 0;
    let detalhes = [];

    for (let i = 0; i < qty; i++) {
        let valor = Math.floor(Math.random() * faces) + 1;
        totalDados += valor;
        detalhes.push(valor);
    }

    const resultadoFinal = totalDados + bonus;
    const formulaStr = `${qty}d${faces}${bonus >= 0 ? '+' : ''}${bonus}`;

    exibirResultadoDado(resultadoFinal, formulaStr, detalhes);
}

// Exibe o resultado e salva no histórico
function exibirResultadoDado(total, formula, detalhes) {
    const display = document.getElementById("resultadoDado");
    display.innerHTML = `<small style="color: var(--muted); font-weight: normal;">${formula}:</small> ${total}`;

    // Adiciona ao histórico (reutilizando a lógica do Passo 1)
    const listaHistorico = document.getElementById("historicoEncontros");
    if (listaHistorico) {
        if (listaHistorico.children[0]?.style.fontStyle === "italic") listaHistorico.innerHTML = "";

        const novoLog = document.createElement("li");
        novoLog.style.padding = "5px 0";
        novoLog.style.borderBottom = "1px solid #eee";
        novoLog.innerHTML = `<span>🎲 <strong>${formula}:</strong> ${total} <small>(${detalhes.join('+')})</small></span>`;

        listaHistorico.prepend(novoLog);
        if (listaHistorico.children.length > 5) listaHistorico.removeChild(listaHistorico.lastChild);
    }
}

// Salva a configuração atual como um botão de atalho
function salvarRolagem() {
    const qty = document.getElementById("diceQty").value;
    const faces = document.getElementById("diceFaces").value;
    const bonus = document.getElementById("diceBonus").value;
    const container = document.getElementById("rolagensSalvas");

    const label = `${qty}d${faces}${bonus >= 0 ? '+' : ''}${bonus}`;

    const btnNovo = document.createElement("button");
    btnNovo.className = "btn btn-ghost";
    btnNovo.style.fontSize = "0.75rem";
    btnNovo.style.padding = "5px 10px";
    btnNovo.innerHTML = label;

    // Ao clicar no botão salvo, ele preenche os campos e rola
    btnNovo.onclick = function () {
        document.getElementById("diceQty").value = qty;
        document.getElementById("diceFaces").value = faces;
        document.getElementById("diceBonus").value = bonus;
        executarRolagemCustomizada();
    };

    // Clique direito para remover o botão salvo
    btnNovo.oncontextmenu = function (e) {
        e.preventDefault();
        btnNovo.remove();
    };

    container.appendChild(btnNovo);
}

