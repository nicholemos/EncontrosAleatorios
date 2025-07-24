document.addEventListener("DOMContentLoaded", function () {
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
        // Limpa a tabela, exceto o cabeçalho
        while (tabelaEncontro.rows.length > 1) {
            tabelaEncontro.deleteRow(1);
        }

        if (!resultado) return;

        const newRow = tabelaEncontro.insertRow();
        newRow.insertCell(0).innerHTML = rolagem;
        newRow.insertCell(1).innerHTML = resultado.descricao;
        newRow.insertCell(2).innerHTML = resultado.pag;

        const imagemCell = newRow.insertCell(3);
        const imagemElement = document.createElement("img");
        imagemElement.src = resultado.imagem || "https://blog.peexbrasil.com.br/wp-content/uploads/2019/01/Fuja-dos-4-erros-mais-comuns-ao-aplicar-avalia%C3%A7%C3%A3o-de-desempenho.jpg";
        imagemElement.alt = resultado.descricao;
        imagemElement.style.width = "100px";
        imagemCell.appendChild(imagemElement);
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
