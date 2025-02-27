// Inicializa o valor de rolagensAnterioresInput
var rolagensAnteriores = 0;

// Função para rolar o encontro e mostrar elementos com base nas rolagens anteriores
document.getElementById("rollEncounter").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do botão de enviar

    console.log("Clicou no botão Rolar Encontro"); // Adicione esta linha

    // Aumenta o valor de rolagensAnteriores a cada clique
    rolagensAnteriores++;

    // Aumenta a chance de aparecer os elementos em 5% a cada rolagem adicional
    var chanceDeAparecer = 5 + (rolagensAnteriores * 5);

    // Gere um número aleatório entre 1 e 100
    var randomPercentage = Math.floor(Math.random() * 100) + 1;

    // Se o número gerado for menor ou igual à chance de aparecer, mostre os elementos
    if (randomPercentage <= chanceDeAparecer) {
        // Mostrar os elementos "Patamar" e "Tabela de Encontros"
        document.getElementById("ocultaveis").style.display = "block";

        // Zere o valor de rolagensAnteriores quando os elementos aparecerem
        rolagensAnteriores = 0;
        // Atualiza o valor do campo "Rolagens anteriores" com o novo valor
        document.getElementById("rolagensAnterioresInput").value = rolagensAnteriores;
    } else {
        // Atualiza o valor do campo "Rolagens anteriores" com o novo valor
        document.getElementById("rolagensAnterioresInput").value = rolagensAnteriores;
    }
});

// Função para mostrar o elemento com base nas rolagens anteriores
function mostrarOcultaveis() {
    // Mostrar o elemento "ocultaveis"
    document.getElementById("ocultaveis").style.display = "block";
}

function rolarEncontros() {
    // Rolar um número aleatório entre 1 e 100
    var randomPercentage = Math.floor(Math.random() * 100) + 1;

    // Verificar se a rolagem inicial foi exatamente 100
    if (randomPercentage === 100) {
        // Rolar uma segunda vez para determinar o resultado especial
        var segundaRolagem = Math.floor(Math.random() * 100) + 1;

        // Se a segunda rolagem for 25% ou menos, definir o resultado especial
        if (segundaRolagem <= 25) {
            // Resultado especial
            var resultadoEspecial = {
                descricao: "O Rhandomm",
                pag: "Ameaças, pag. 113"
            };

            // Exibir o resultado especial na tabela
            exibirResultado(randomPercentage, resultadoEspecial);
            return; // Sai da função
        }
    }

    // Obtenha o ajuste com base no patamar selecionado
    var ajuste = 0; // Valor padrão para Iniciante
    if (document.getElementById("veterano").checked) {
        ajuste = 30;
    } else if (document.getElementById("campeao").checked) {
        ajuste = 70;
    } else if (document.getElementById("lenda").checked) {
        ajuste = 110;
    }

    // Adicione o ajuste ao resultado da rolagem
    randomPercentage += ajuste;

    // Defina as porcentagens e os resultados para cada tipo de terreno
    var terrenos = {
        "Aquático": [
            { porcentagem: 2, descricao: "1 hynne dormente se afogando", pag: "não possui", imagem: "https://www.theonering.com/wp-content/uploads/2020/11/frodo-sleeping.jpg" },
            { porcentagem: 6, descricao: "1d3 bandidos comuns", pag: "Ameaças, pag 42" },
            { porcentagem: 10, descricao: "1d3 piratas", pag: "Ameaças, pag 258" },
            { porcentagem: 20, descricao: "1 baú de tesouro (ND 2; Percepção CD 15 para achar)", pag: "Jogo do Ano, pag 328" },
            { porcentagem: 30, descricao: "1 baú de tesouro (ND 3) e 1d4+2 piratas que acharam ele antes", pag: "Jogo do Ano, pag 328, Ameaças, pag 258" },
            { porcentagem: 40, descricao: "1 elfo-do-mar pescador e 1 escudeiro", pag: "Ameaças, pag 316 e 191" },
            { porcentagem: 45, descricao: "1 canceronte", pag: "Ameaças, pag 315" },
            { porcentagem: 55, descricao: "1 dragão filhote dos rios", pag: "Ameaças, pag 64" },
            { porcentagem: 65, descricao: "2 lacedons", pag: "Ameaças, pag 229" },
            { porcentagem: 70, descricao: "1d3 platans", pag: "Ameaças, pag 322" },
            { porcentagem: 75, descricao: "Tempestade em alto mar*", pag: "Jogo do Ano, pag 321" },
            { porcentagem: 80, descricao: "1 enxame de águas-vivas", pag: "Ameaças, pag 319" },
            { porcentagem: 90, descricao: "1 capitão pirata", pag: "Ameaças, pag 259" },
            { porcentagem: 98, descricao: "1 homem-piranha capitão e 1d6+1 homens-piranhas", pag: "Ameaças, pag 256 e 257" },
            { porcentagem: 100, descricao: "1 moreau da raposa bucaneira enfrentando 1d4 afogados", pag: "Ameaças, pag 301 e 253" },
            { porcentagem: 105, descricao: "2 águas-vivas gigantes", pag: "Ameaças, pag 319" },
            { porcentagem: 110, descricao: "1d4+1 corganns", pag: "Ameaças, pag 89" },
            { porcentagem: 115, descricao: "1 nereida", pag: "Ameaças, pag 320" },
            { porcentagem: 120, descricao: "1 peixe recife sendo atacado por 2 pliorex abissais", pag: "Ameaças, pag 321 e 325" },
            { porcentagem: 125, descricao: "1 namasqall", pag: "Ameaças, pag 91" },
            { porcentagem: 135, descricao: "1 dragão venerável dos recifes", pag: "Ameaças, pag 71" },
            { porcentagem: 140, descricao: "1 canceronte de guerra", pag: "Ameaças, pag 315" },
            { porcentagem: 145, descricao: "2 dragões veneráveis* (frio)", pag: "Jogo do Ano, pag 311" },
            { porcentagem: 155, descricao: "1 lobo do mar, 2 capitães piratas e 2d8 piratas", pag: "Ameaças, pag 262 e 258" },
            { porcentagem: 170, descricao: "1 enguia rainha", pag: "Ameaças, pag 317" },
            { porcentagem: 185, descricao: "1 kraken", pag: "Ameaças, pag 325" },
            { porcentagem: 200, descricao: "1 kaiju com deslocamento de natação", pag: "Ameaças, pag 313" },
            { porcentagem: 999, descricao: "1 Dragão-Real* (frio) e 1d4 dragões veneráveis* (frio)", pag: "Jogo do Ano, pag 312 e 311" }
        ],

        "Ártico": [
            { porcentagem: 2, descricao: "Uma sílfide de cabelo rosa morrendo de frio", pag: "não possui" },
            { porcentagem: 6, descricao: "1d4 zumbis*", pag: "Ameaças, pag 228" },
            { porcentagem: 10, descricao: "1 carcaju", pag: "Ameaças, pag 348" },
            { porcentagem: 20, descricao: "1d3+1 lobos*", pag: "Ameaças, pag 217" },
            { porcentagem: 30, descricao: "1 Aquinne", pag: "Ameaças, pag 88" },
            { porcentagem: 35, descricao: "1 soterrado vagante", pag: "Ameaças, pag 353" },
            { porcentagem: 40, descricao: "1 minotauro da Manada com um lobo das cavernas*", pag: "Ameaças, pag 351 e 223" },
            { porcentagem: 50, descricao: "1 chefe de gangue e 1d3+1 bandidos selvagens", pag: "Ameaças, pag 42" },
            { porcentagem: 60, descricao: "1 ogro", pag: "Jogo do Ano, pag 292" },
            { porcentagem: 65, descricao: "Avalanche*", pag: "Jogo do Ano, pag 320" },
            { porcentagem: 70, descricao: "1 glacioll*", pag: "Jogo do Ano, pag 309" },
            { porcentagem: 80, descricao: "1 minotauro chefe da Manada", pag: "Ameaças, pag 352" },
            { porcentagem: 90, descricao: "2 gigantes esqueletos", pag: "Ameaças, pag 229" },
            { porcentagem: 100, descricao: "1 mamute", pag: "Ameaças, pag 350" },
            { porcentagem: 110, descricao: "1 troll das cavernas*", pag: "Ameaças, pag 353" },
            { porcentagem: 120, descricao: "2 golens de Nor enormes", pag: "Ameaças, pag 348" },
            { porcentagem: 125, descricao: "1d4+1 mamutes esqueletos", pag: "Ameaças, pag 229" },
            { porcentagem: 135, descricao: "1 dragão bicefalo (eletricidade e frio)", pag: "Ameaças, pag 72" },
            { porcentagem: 140, descricao: "1d4+2 vermes do gelo larvas", pag: "Ameaças, pag 357" },
            { porcentagem: 145, descricao: "1 fantasma ancestral e 2 fantasmas guardando um templo de Behluga com 1d4 riquezas médias", pag: "Ameaças, pag 231; Jogo do Ano, pag 330" },
            { porcentagem: 155, descricao: "1 hallus'tir", pag: "Ameaças, pag 93" },
            { porcentagem: 160, descricao: "2 dracomantes superiores (frio)", pag: "Ameaças, pag 149" },
            { porcentagem: 165, descricao: "2d4 lyubas com 1d3 riquezas menores presas nas patas de um deles", pag: "Ameaças, pag 27; Jogo do Ano, pag 330" },
            { porcentagem: 170, descricao: "1 verme do gelo adulto", pag: "Ameaças, pag 357" },
            { porcentagem: 180, descricao: "2 ezzayn", pag: "Ameaças, pag 27" },
            { porcentagem: 195, descricao: "1 necrodraco lich", pag: "Ameaças, pag 236" },
            { porcentagem: 200, descricao: "Ninho de vermes do gelo (2 adultos e 2d4 larvas)", pag: "Ameaças, pag 357" },
            { porcentagem: 999, descricao: "Corte rubra invernal (templo de Aharadak com um reishid líder de culto, um avatar de Aharadak e 2d4 aspectos de Aharadak)", pag: "Templos de Aharadak, pag 60" }
        ],

        "Área de Tormenta": [
            { porcentagem: 2, descricao: "Chuva ácida cai por 1d4+1 rodadas", pag: "Ameaças, pag. 360" },
            { porcentagem: 6, descricao: "1 armadilha viva (arame farpado*) ou virote*", pag: "Ameaças, pag. 19" },
            { porcentagem: 10, descricao: "1 armadilha viva (fosso profundo* ou lâmina na parede*)", pag: "Ameaças, pag 19" },
            { porcentagem: 20, descricao: "Insanidade da Tormenta* 1d6 PM (Von CD 14 evita)", pag: "Jogo do Ano, pag 315" },
            { porcentagem: 30, descricao: "Fenômeno rubro (temperaturas implacáveis)", pag: "Ameaças, pag 360" },
            { porcentagem: 35, descricao: "1d2 maníacos lefou*", pag: "Jogo do Ano, pag 314" },
            { porcentagem: 36, descricao: "Árvore rubra (contém 1d3 sementes carmesim)", pag: "Ameaças, pag 59" },
            { porcentagem: 40, descricao: "1 uktril*", pag: "Jogo do Ano, pag 314" },
            { porcentagem: 50, descricao: "1d3 infectos", pag: "Ameaças, pag 23" },
            { porcentagem: 60, descricao: "1d4 iniciados da agonia", pag: "Ameaças, pag 52" },
            { porcentagem: 65, descricao: "Ninho de simbiontes (Conhecimento ou Misticismo CD 25 encontra 1 dádiva de Aharadak)", pag: "Ameaças, pag 60" },
            { porcentagem: 80, descricao: "1 geraktril* e 2 maníacos lefou* escoltando prisioneiros para sacrifícios", pag: "Jogo do Ano, pag 314" },
            { porcentagem: 90, descricao: "1 alma acorrentada", pag: "Ameaças, pag. 18" },
            { porcentagem: 98, descricao: "1 enxame infernal", pag: "Ameaças, pag. 22" },
            { porcentagem: 100, descricao: "1 senhor do gigante rubro forma inicial", pag: "Ameaças, pag. 58" },
            { porcentagem: 110, descricao: "1d4 veridak", pag: "Ameaças, pag. 24" },
            { porcentagem: 115, descricao: "Role novamente, o próximo encontro inclui um fenômeno rubro aleatório", pag: "Ameaças, pag. 360" },
            { porcentagem: 125, descricao: "1 dragão feral corrompido (sopro de ácido, acrescente Habilidades Lefeu*, Insanidade da Tormenta 3d6 PM, Von CD 30 evita)", pag: "Ameaças, pag 72; Jogo do Ano, pag. 315" },
            { porcentagem: 130, descricao: "1 morgadrel", pag: "Ameaças, pag. 26" },
            { porcentagem: 135, descricao: "1 arquibruxo da tormenta e 2 turbas de infectos", pag: "Ameaças, pag. 20 e 23" },
            { porcentagem: 145, descricao: "1 reishid líder de culto, 1 sacerdote de Aharadak*, 2d4 zyrrinaz e 2d4 fanáticos lefou* em um templo de Aharadak", pag: "Ameaças, pag. 56, 59 e 55; Jogo do Ano, pag. 316" },
            { porcentagem: 150, descricao: "1 thuwarokk*", pag: "Jogo do Ano, pag. 315" },
            { porcentagem: 155, descricao: "2 esmagadores coletivos", pag: "Ameaças, pag. 22" },
            { porcentagem: 160, descricao: "1 ezzayn especial", pag: "Ameaças, pag. 27" },
            { porcentagem: 170, descricao: "1d4+1 elementais corrompidos", pag: "Ameaças, pag. 329" },
            { porcentagem: 185, descricao: "Fábrica de esmagadores (2d4 sacerdotes de Aharadak e uma forja rubra, um sacerdote pode gastar uma ação padrão para criar um esmagador coletivo ao fim da rodada. A forja pode ser reativada em 1d4 rodadas)", pag: "Jogo do Ano, pag. 316; Ameaças, pag. 22" },
            { porcentagem: 200, descricao: "Templo de Aharadak com um um avatar de Aharadak e 2d4 ezzayn especiais", pag: "Ameaças, pag 62 e 27" },
            { porcentagem: 999, descricao: "Gatzvalith faz promessas de poderes aos personagens", pag: "Ameaças, pag 29" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Colina": [
            { porcentagem: 2, descricao: "2 boguns brigando para ver quem é o favorito de seu druida", pag: "não possui" },
            { porcentagem: 6, descricao: "1d4+2 cascavéis*", pag: "Ameaças, pag 94" },
            { porcentagem: 10, descricao: "1d4+2 gali-galis", pag: "Ameaças, pag 97" },
            { porcentagem: 20, descricao: "2 gambá", pag: "Ameaças, pag 97" },
            { porcentagem: 30, descricao: "4 gnolls capangas", pag: "Ameaças, pag 76" },
            { porcentagem: 35, descricao: "1 jagunço e 1 capanga", pag: "Ameaças, pag 74" },
            { porcentagem: 36, descricao: "2 perdigueiros troll atacando um viajante", pag: "Ameaças, pag 82" },
            { porcentagem: 40, descricao: "Grama carnívora", pag: "não possui" },
            { porcentagem: 50, descricao: "1 kobold veterano e 4 kobolds pratulheiros", pag: "Ameaças, pag 179" },
            { porcentagem: 60, descricao: "1 gorlogg alfa com uma perna presa em uma armadilha", pag: "Ameaças, pag 179" },
            { porcentagem: 65, descricao: "1 grifo*", pag: "não possui" },
            { porcentagem: 80, descricao: "1 rinoceronte lanoso", pag: "não possui" },
            { porcentagem: 90, descricao: "2 leões caçando 1 rinoceronte", pag: "não possui" },
            { porcentagem: 98, descricao: "2 tendriculos", pag: "Ameaças, pag 246" },
            { porcentagem: 100, descricao: "4 serpes", pag: "Ameaças, pag. 310" },
            { porcentagem: 110, descricao: "1 gnoll xamã de Megalokk, 1 gnoll xamã de Marah, 2 gnolls lideres de alcateia e 1 totem risonho", pag: "Ameaças, pag 78 e 80" },
            { porcentagem: 115, descricao: "1 keylor e 2 minotauros chefes da Manada", pag: "Ameaças, pag 215" },
            { porcentagem: 125, descricao: "2d4+2 entes discutindo uma longa lista de nomes", pag: "não possui" },
            { porcentagem: 130, descricao: "2 ogros capangas", pag: "Ameaças, pag 220" },
            { porcentagem: 135, descricao: "2 matronas gnoll, 2d4+2 gnolls filibusteiros e 1 xamã de Marah celebrando um casamento", pag: "Ameaças, pag 80" },
            { porcentagem: 145, descricao: "O mausoléu de um antigo herói contendo uma espada baronial e 1d4 riquezas maiores. Quem toca nos itens é afetado por uma maldição mortuaria.", pag: "Jogo do Ano, pag 330" },
            { porcentagem: 150, descricao: "2 manticoras primais", pag: "Ameaças, pag 183" },
            { porcentagem: 155, descricao: "2 golens de ferro superior com mal funcionamento (troque os elementos de sua Imunidade a Magia)", pag: "não possui" },
            { porcentagem: 160, descricao: "2 nuvens de estirges", pag: "Ameaças, pag 247" },
            { porcentagem: 170, descricao: "4 golens de pedra protegendo um monólito, que se tocado invoca 1 gnoll vuul’rak que estava preso", pag: "Ameaças, pag 78" },
            { porcentagem: 185, descricao: "1 Dragão-Real* (eletricidade)", pag: "não possui" },
            { porcentagem: 200, descricao: "A Catastrofe Rara (4 nuvens de estirges)", pag: "não possui" },
            { porcentagem: 999, descricao: "A Horda Risonha (2 gnoll vuul’rak, 1 totem de sarana, 1 totem do rei tirano, 1d6 xamãs de marah, 1d6 xamãs de megalokk, 2d6 gnolls lideres de alcateia, e 2 totens risonhos)", pag: "não possui" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Deserto": [
            { porcentagem: 2, descricao: "Uma caravana de negociantes (fornecem descanso confortável)", pag: "não possui" },
            { porcentagem: 6, descricao: "1d4 cascavéis*", pag: "não possui" },
            { porcentagem: 10, descricao: "1 pakk", pag: "não possui" },
            { porcentagem: 20, descricao: "1d3+1 bandido comum sar-allan. Eles não roubam ouro de devotos de Azgher.", pag: "não possui" },
            { porcentagem: 30, descricao: "1 trog e 1 terrier", pag: "não possui" },
            { porcentagem: 35, descricao: "1 trog caçador", pag: "não possui" },
            { porcentagem: 40, descricao: "1 iniciado da agonia", pag: "não possui" },
            { porcentagem: 50, descricao: "4 bandidos ligeiros sar-allan. Eles não roubam ouro de devotos de Azgher.", pag: "não possui" },
            { porcentagem: 60, descricao: "2 chacais zumbis disputando 1 garra zumbi", pag: "não possui" },
            { porcentagem: 65, descricao: "1 iniciado de Sszzaas e 1d4 najas*", pag: "não possui" },
            { porcentagem: 70, descricao: "Ciclone arcano", pag: "não possui" },
            { porcentagem: 80, descricao: "2 feras-vassalo", pag: "não possui" },
            { porcentagem: 90, descricao: "2 gatunos. 1d6+2 aranhas gigantes*", pag: "não possui" },
            { porcentagem: 98, descricao: "1 ber-baram 2 defeituosos", pag: "não possui" },
            { porcentagem: 100, descricao: "2 iniciadas de Sszzaas e 1 cultista de Sszzaas se passando por peregrinos", pag: "não possui" },
            { porcentagem: 110, descricao: "2 pamgras e 1 trog anão eremita", pag: "não possui" },
            { porcentagem: 115, descricao: "1 hidra* (substitua o bônus de furtividade para deserto)", pag: "não possui" },
            { porcentagem: 125, descricao: "1 sacerdote da agonia e 1d6+2 fanáticos lefou", pag: "não possui" },
            { porcentagem: 130, descricao: "1 lagash*", pag: "não possui" },
            { porcentagem: 135, descricao: "1 serpentaar", pag: "não possui" },
            { porcentagem: 145, descricao: "1 fera-mãe e 2d6 feras-líder", pag: "não possui" },
            { porcentagem: 150, descricao: "1 reishid líder de culto e 1d4 sacerdotes de Aharadak", pag: "não possui" },
            { porcentagem: 155, descricao: "2 senhores das múmias", pag: "não possui" },
            { porcentagem: 160, descricao: "1 golem de matéria vermelha", pag: "não possui" },
            { porcentagem: 170, descricao: "1 górgona matriarca e 4 elemental do veneno grande", pag: "não possui" },
            { porcentagem: 185, descricao: "1 Dragão-Real*", pag: "não possui" },
            { porcentagem: 200, descricao: "Grande Enxame (1 avatar de Aharadak, 4 ezzayns e 2d10 líder fanático lefou)", pag: "não possui" },
            { porcentagem: 999, descricao: "Novos Zarkhassitas (1 nastarrath, 1d6+2 sszzaazita celebrante, 1d4 nagah mística, 2d6 nagah defensor)", pag: "não possui" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Floresta": [
            { porcentagem: 2, descricao: "1 gambá correndo atrás de um gato", pag: "Ameaças, pag. 192" },
            { porcentagem: 6, descricao: "1 kobold patrulheiro aparentemente perdido", pag: "Ameaças, pag. 181" },
            { porcentagem: 10, descricao: "1 terrier", pag: "Ameaças, pag. 97" },
            { porcentagem: 20, descricao: "2 gnoll capanga", pag: "Ameaças, pag. 115" },
            { porcentagem: 30, descricao: "1d4 ursos panda", pag: "Ameaças, pag. 223" },
            { porcentagem: 35, descricao: "1 tropa de tentacutes. Ei, aquele colar na mão deles não é de vocês?", pag: "Ameaças, pag. 195" },
            { porcentagem: 36, descricao: "Grama carnívora", pag: "Ameaças, pag. 365" },
            { porcentagem: 40, descricao: "1d4 enxames larvais", pag: "Ameaças, pag. 180" },
            { porcentagem: 50, descricao: "2d4 capivaras (... capivárias?)", pag: "Ameaças, pag. 211" },
            { porcentagem: 60, descricao: "1d4+1 lagartos perseguidores", pag: "Ameaças, pag. 110" },
            { porcentagem: 65, descricao: "1 tigre-de-hynnin", pag: "Ameaças, pag. 207" },
            { porcentagem: 80, descricao: "1 carrasco de Lena", pag: "Ameaças, pag. 104" },
            { porcentagem: 90, descricao: "1d6+2 Aranhas Gigantes (Metade do terreno ao redor é coberto de teia.", pag: "Jogo do Ano, pag. 287" },
            { porcentagem: 98, descricao: "2 defeitusos", pag: "Ameaças, pag. 340" },
            { porcentagem: 100, descricao: "1 gnoll xamã de megalokk, 1 gorlogg alfa, 1 serpe* e 1 ganchador*", pag: "Ameaças, pag. 119, 217; Jogo do Ano, pag. 293 e 308" },
            { porcentagem: 110, descricao: "2 entes conversando sobre uma longa lista de deuses", pag: "Ameaças, pag. 106" },
            { porcentagem: 115, descricao: "1 bruxa goblin", pag: "Ameaças, pag. 79" },
            { porcentagem: 125, descricao: "1d4+2 tendrículos", pag: "Ameaças, pag. 111" },
            { porcentagem: 130, descricao: "Caçada Selvagem (1 centauro chefe, 2 centauros xamã de megalokk e 4 ursos das cavernas)", pag: "Ameaças, pag. 105 e 224" },
            { porcentagem: 135, descricao: "1 górgona matriarca", pag: "Ameaças, pag. 330" },
            { porcentagem: 145, descricao: "1 dragão venerável* (veneno)", pag: "Jogo do Ano, pag 311" },
            { porcentagem: 150, descricao: "1 gnoll vuul’rak", pag: "Ameaças, pag. 122" },
            { porcentagem: 155, descricao: "1 ezzayn explorando a região para seu lorde", pag: "Ameaças, pag. 27" },
            { porcentagem: 160, descricao: "2 razza’kham", pag: "Ameaças, pag. 309" },
            { porcentagem: 170, descricao: "4 dragões veneraveis*(elementos variados) lutando entre si", pag: "Jogo do Ano, pag. 311" },
            { porcentagem: 185, descricao: "1 gnoll vuul’rakk combatendo 1 nuvem de estirges", pag: "Ameaças, pag. 122 e 108" },
            { porcentagem: 200, descricao: "Coração da Selva (santuário de Alihanna com dragão venerável* (ácido), 4 totem Divina Serpente, 4 tanaloom e 2d6 gnoll xamã de Allihanna)", pag: "Jogo do Ano, pag. 311; Ameaças, pag. 272, 99 e 119" },
            { porcentagem: 999, descricao: "Fúria Monstruosa (4 totem do Rei Tirano, 2 nuvens de estirge e 2d6 centauros xamã de Megalokk)", pag: "Ameaças, pag. 271, 108 e 105" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Montanha": [
            { porcentagem: 2, descricao: "Uma druida de cabelos cacheados protegida por três urso-coruja* Ela possui itens de cura para negociar", pag: "Jogo do Ano, pag. 293" },
            { porcentagem: 6, descricao: "1 lobo*", pag: "Jogo do Ano, pag. 290" },
            { porcentagem: 10, descricao: "1 carcaju. Em seu tesouro há uma neko-te", pag: "Ameaças, pag. 348" },
            { porcentagem: 20, descricao: "Uma pedra solta rolando montanha abaixo (armadilha de bloco de pedra*)", pag: "Jogo do Ano, pag. 317" },
            { porcentagem: 30, descricao: "4 lobos*", pag: "Jogo do Ano, pag. 290" },
            { porcentagem: 35, descricao: "1 pantera espreitando", pag: "Ameaças, pag. 218" },
            { porcentagem: 40, descricao: "1 chefe de gangue e 1d4 capangas", pag: "Ameaças, pag. 45 e 43" },
            { porcentagem: 50, descricao: "1 urso negro", pag: "Ameaças, pag. 223" },
            { porcentagem: 60, descricao: "1 orc chefe e 1d4+1 orcs combatentes", pag: "Ameaças, pag. 33" },
            { porcentagem: 65, descricao: "1 ogro", pag: "Jogo do ANo, pag. 293" },
            { porcentagem: 70, descricao: "2d6 lobos*", pag: "Jogo do Ano, pag. 290" },
            { porcentagem: 80, descricao: "3 ursos-corujas* acuando uma jovem de cabelos cacheados. Se salva, é uma aliada médica inciante", pag: "Jogo do Ano, pag. 293" },
            { porcentagem: 90, descricao: "1 ogro caçador", pag: "Ameaças, pag. 41" },
            { porcentagem: 98, descricao: "1d4+1 cães do inferno*", pag: "Jogo do Ano, pag. 292" },
            { porcentagem: 100, descricao: "1d4 serpes e 1 serpe anciã", pag: "Ameaças, pag. 310" },
            { porcentagem: 110, descricao: "2 tengus bandoleiros e 1 daitengu", pag: "Jogo do Ano, pag 164" },
            { porcentagem: 115, descricao: "1d4+2 ogros furiosos e 1 keylor", pag: "Jogo do Ano, pag 353" },
            { porcentagem: 125, descricao: "1 dragão bicéfalo", pag: "Jogo do Ano, pag 74" },
            { porcentagem: 130, descricao: "1d3+2 raagorans em fuga", pag: "Jogo do Ano, pag 249" },
            { porcentagem: 135, descricao: "1 concílio forjador combatendo 1 dragão feral", pag: "Ameaças, pag. 138 e 72" },
            { porcentagem: 145, descricao: "1 fantasma ancestral de um aventureiro cercado por 1d4 runas de desintegração", pag: "Ameaças, pag. 232 e 359" },
            { porcentagem: 150, descricao: "1 grande tachygloss", pag: "Ameaças, pag. 308" },
            { porcentagem: 155, descricao: "Santuário antigo guardado por 2 tanaloom e 1 dragão da equidade venerável", pag: "Ameaças, pag. 99 e 71" },
            { porcentagem: 160, descricao: "2 razza’kham lutando entre si", pag: "Ameaças, pag. 309" },
            { porcentagem: 170, descricao: "2 hobgoblins gladiadores e 1 horda goblin", pag: "Ameaças, pag. 85 e 81" },
            { porcentagem: 185, descricao: "2 vermes do gelo adultos e 1 Dragão-Real* (eletricidade)", pag: "Ameaças, pag. 357; Jogo do Ano, pag. 312" },
            { porcentagem: 200, descricao: "Ateliê Rubro (2 golens de matéria vermelha, 1 senhor do gigante rubro forma final, 1d4+2 reishid lider de culto, 1d6 esmagadores coletivos e 1d3+1 simbiontes diversos)", pag: "Ameaças, pag. 131, 58, 56, 22 e 61" },
            { porcentagem: 999, descricao: "O Despertar dos Monstros (1d4 kaijus)", pag: "Ameaças, pag. 313" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Planície": [
            { porcentagem: 2, descricao: "1d4 bandidos comuns", pag: "Ameaças, pag, 43" },
            { porcentagem: 6, descricao: "1 bandido ligeiro", pag: "Ameaças, pag. 43" },
            { porcentagem: 10, descricao: "1 t’peel carregando um medalhão com sol no valor de T$ 25", pag: "Ameaças, pag. 92" },
            { porcentagem: 20, descricao: "Um tropel de 2d4 cavalos de carga selvagens", pag: "Ameaças, pag. 212" },
            { porcentagem: 30, descricao: "1d4 gnoll capanga", pag: "Ameaças, pag. 115" },
            { porcentagem: 35, descricao: "1 pantera furtiva caçando", pag: "Ameaças, pag. 218" },
            { porcentagem: 36, descricao: "1 gnoll xamã de Allihanna e 1 hiena", pag: "Ameaças, pag. 118" },
            { porcentagem: 40, descricao: "1 leão caçando 1 trobo", pag: "Ameaças, pag. 218 e 221" },
            { porcentagem: 50, descricao: "1 duplo se passando por um conhecido do grupo", pag: "Ameaças, pag. 50" },
            { porcentagem: 60, descricao: "3 goblins de sombreiro num impasse", pag: "Ameaças, pag. 256" },
            { porcentagem: 65, descricao: "1 líder pistoleiro e 2 pistoleiros", pag: "Ameaças, pag. 260" },
            { porcentagem: 70, descricao: "1 gnoll xamã de Marah oferece cura ao grupo se eles abandonarem suas armas com ela.", pag: "Ameaças, pag. 119" },
            { porcentagem: 80, descricao: "1 gnoll xamã de Megalokk e 4 gnoll saqueador", pag: "Ameaças, pag. 119 e 116" },
            { porcentagem: 90, descricao: "1d6+1 elefantes pastando", pag: "Ameaças, pag. 216" },
            { porcentagem: 91, descricao: "1 golem de bronze enferrujado. Passar em um teste de Percepção (CD 25) revela vestígios de uma batalha antiga na região.", pag: "Ameaças, pag. 127" },
            { porcentagem: 98, descricao: "1 cavaleiro de Kally e 1 clérigo de Kally", pag: "Ameaças, pag. 114 e 146" },
            { porcentagem: 100, descricao: "1 tigre de Hynnin primordial", pag: "Ameaças, pag. 207" },
            { porcentagem: 110, descricao: "1 matrona gnoll e 1d6+1 gnoll caçador de cabeças", pag: "Ameaças, pag. 121 e 114" },
            { porcentagem: 115, descricao: "1 concílio forjador procurando pelo grupo", pag: "Ameaças, pag. 138" },
            { porcentagem: 125, descricao: "Duelo entre 1 chapéu-preto e 1 demônio da pólvora", pag: "Ameaças, pag. 262 e 255" },
            { porcentagem: 130, descricao: "2 golens de pedra. Estão em cima de 1 grama carnívora extensa", pag: "Ameaças, pag. 132 e 365" },
            { porcentagem: 135, descricao: "1 gnoll vuul’rak", pag: "Ameaças, pag. 122" },
            { porcentagem: 145, descricao: "2 dragões veneráveis (eletricidade)", pag: "Jogo do Ano, pag 311" },
            { porcentagem: 150, descricao: "1 nuvem de estirges", pag: "Ameaças, pag. 108" },
            { porcentagem: 155, descricao: "1d6+2 hallus’tir", pag: "Ameaças, pag. 94" },
            { porcentagem: 160, descricao: "2d6 dracomantes superiores que invocam o avatar de Kallydranoch em 1d4 turnos", pag: "Ameaças, pag. 149 e 153" },
            { porcentagem: 999, descricao: "A Horda Risonha (2 gnoll vuul’rak, 1 totem de sarana, 1 totem do rei tirano, 1d6 xamãs de marah, 1d6 xamãs de megalokk, 2d6 gnolls líderes de alcateia, e 2 totens risonhos)", pag: "Ameaças, pag. 122, 271, 273, 119, 117" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Pântano": [
            { porcentagem: 2, descricao: "1d6+3 capivaras nadando", pag: "Ameaças, pag. 211" },
            { porcentagem: 6, descricao: "1d3 glops", pag: "Ameaças, pag. 201" },
            { porcentagem: 10, descricao: "1d4+1 garras-zumbi", pag: "Ameaças, pag. 234" },
            { porcentagem: 20, descricao: "2 gambás", pag: "Ameaças, pag. 192" },
            { porcentagem: 30, descricao: "1 trog caçador preparando uma emboscada", pag: "Ameaças, pag. 38" },
            { porcentagem: 35, descricao: "1 elemental do veneno pequeno", pag: "Ameaças, pag. 328" },
            { porcentagem: 36, descricao: "1 área de dejetos alquímicos (Percepção CD 20 evita)", pag: "Ameaças, pag. 359" },
            { porcentagem: 40, descricao: "1 garra zumbi enxame", pag: "Ameaças, pag. 234" },
            { porcentagem: 50, descricao: "1d4 gnolls saqueadores e 1 gnoll xamã de Allihanna", pag: "Ameaças, pag. 116 e 118" },
            { porcentagem: 60, descricao: "1 basilisco*", pag: "Jogo do Ano, pag. 293" },
            { porcentagem: 65, descricao: "1 ninhada de dragões filhotes (ácido)", pag: "Ameaças, pag. 65" },
            { porcentagem: 70, descricao: "1 finntroll caçador e 4 perdigueiros troll", pag: "Ameaças, pag. 342 e 343" },
            { porcentagem: 80, descricao: "1 fantasma de um viajante em busca do seu anel de casamento", pag: "Ameaças, pag. 232" },
            { porcentagem: 90, descricao: "1d6+2 tatus-montanha", pag: "Ameaças, pag. 220" },
            { porcentagem: 91, descricao: "1 cocatriz imperador e 1d3+1 cocatrizes em seu ninho", pag: "Ameaças, pag. 200 e 199" },
            { porcentagem: 100, descricao: "2 elementais do veneno médios", pag: "Ameaças, pag. 329" },
            { porcentagem: 110, descricao: "1 hidra* escondida submersa em um lago", pag: "Jogo do Ano, pag. 306" },
            { porcentagem: 115, descricao: "1 serpe anciã e 1d4+2 serpes", pag: "Ameaças, pag. 310" },
            { porcentagem: 125, descricao: "1 necrodrago esqueleto. Metade da área ao redor dele é areia movediça", pag: "Ameaças, pag. 238; Jogo do Ano, pag. 317" },
            { porcentagem: 130, descricao: "1 necrodraco zumbi", pag: "Ameaças, pag. 238" },
            { porcentagem: 135, descricao: "1 alto sacerdote finntroll, 2 finntrolls senhores do estábulo e 1 elemental do veneno grande", pag: "Ameaças, pag. 347, 342 e 329" },
            { porcentagem: 145, descricao: "2 serpentaar", pag: "Ameaças, pag. 96" },
            { porcentagem: 150, descricao: "2 tiranos do terceiro* montados em 2 dragões adultos dos segredos e 1 alto clérigo de Kally guardando um covil", pag: "Jogo do Ano, pag 313; Ameaças pag. 69 e 146" },
            { porcentagem: 160, descricao: "1 horda de otyughs e 1 elemental corrompido", pag: "Ameaças, pag. 299 e 101" },
            { porcentagem: 170, descricao: "2 cemitérios vivos", pag: "Ameaças, pag. 286" },
            { porcentagem: 185, descricao: "1 necrodraco lich", pag: "Ameaças, pag. 239" },
            { porcentagem: 200, descricao: "Laboratório... abandonado? (1 lich de Aslothia, 1 cemitério vivo, 4 vampiros*)", pag: "Ameaças, pag. 292" },
            { porcentagem: 999, descricao: "1 Dragão-Real (ácido) e 1d6+2 dracomante superior", pag: "Jogo do Ano, pag. 312; Ameaças, pág. 149" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Subterrâneo": [
            { porcentagem: 2, descricao: "Uma fazenda de mycotanns livres, permitindo descanso luxuoso pela noite (ou será uma armadilha?).", pag: "Ameaças, pag. 341" },
            { porcentagem: 6, descricao: "1 kill’bone lutando contra 1 perdigueiro troll", pag: "Ameaças, pag. 194 e 343" },
            { porcentagem: 10, descricao: "1 slark pendurado no teto.", pag: "Ameaças, pag. 206" },
            { porcentagem: 20, descricao: "1 enxame larval, explodindo de uma das paredes", pag: "Ameaças, pag. 180" },
            { porcentagem: 30, descricao: "1 turba de zumbis*", pag: "Jogo do Ano, pag. 297" },
            { porcentagem: 35, descricao: "1d6+2 fofos", pag: "Ameaças, pag. 192" },
            { porcentagem: 36, descricao: "4 orcs combatentes e 1 orc veterano", pag: "Ameaças, pag. 33" },
            { porcentagem: 40, descricao: "Aventureira perdida (na verdade 1 nagah dormente)", pag: "Ameaças, pag. 332" },
            { porcentagem: 50, descricao: "1 basilisco", pag: "Jogo do Ano, pag. 289" },
            { porcentagem: 60, descricao: "1 finntroll caçador* arrastando 1 mycotann labutador em uma coleira", pag: "Jogo do Ano, pag. 308; Ameaças, pag. 341" },
            { porcentagem: 65, descricao: "1 trog rei dos túneis", pag: "Ameaças, pag. 38" },
            { porcentagem: 70, descricao: "Um labirinto de túneis naturais", pag: "Ameaças, pag. 366" },
            { porcentagem: 80, descricao: "1 cavaleiro finntroll", pag: "Ameaças, pag. 345" },
            { porcentagem: 90, descricao: "1 troll das cavernas", pag: "Jogo do Ano, pag. 309" },
            { porcentagem: 91, descricao: "2 armeiros de tenebra devotos", pag: "Ameaças, pag. 253" },
            { porcentagem: 100, descricao: "1 orc mutante superior", pag: "Ameaças, pag. 34" },
            { porcentagem: 110, descricao: "1 mortalha", pag: "Ameaças, pag. 236" },
            { porcentagem: 115, descricao: "1 golem de pedra", pag: "Ameaças, pag. 132" },
            { porcentagem: 125, descricao: "Cabala Tenebrista (2 armeiros de Tenebra clérigos e 6 armeiros de Tenebra devotos)", pag: "Ameaças, pag. 254 e 253" },
            { porcentagem: 130, descricao: "1 golem de ferro superior", pag: "Ameaças, pag. 130" },
            { porcentagem: 135, descricao: "1 arcanista finntroll, 1 finntroll senhor do estábulo e 1 alto sacerdote finntroll", pag: "Ameaças, pag. 338 e 342" },
            { porcentagem: 145, descricao: "2 brawar, protegendo a entrada de um Athrid.", pag: "Ameaças, pag. 208" },
            { porcentagem: 150, descricao: "2 arcanistas fintroll e 4 trolls da caverna*", pag: "Ameaças, pag. 338; Jogo do Ano, pag. 309" },
            { porcentagem: 160, descricao: "1 cemitério vivo (anão) numa área sob efeito base de profanar*", pag: "Ameaças, pag. 286" },
            { porcentagem: 170, descricao: "1 rival espelho para cada membro do grupo", pag: "Ameaças, pag. 335" },
            { porcentagem: 185, descricao: "1 necrodraco lich", pag: "Ameaças, pag. 239" },
            { porcentagem: 200, descricao: "Conventículo Escravagista (1 dragão rei* (psíquico) e 2d6 arcanistas finntrol negociando 4d6x10 escravos)", pag: "Jogo do Ano, pag. 312 e 388 " },
            { porcentagem: 999, descricao: "1 dragão rei* (psíquico) e 1d4 dragões veneráveis* (psíquico)", pag: "Jogo do Ano, pag. 312 e 311" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Urbano": [
            { porcentagem: 2, descricao: "Uma carroça de verduras desgovernada", pag: "não possui" },
            { porcentagem: 6, descricao: "1d3+1 bandidos comuns", pag: "Ameaças, pag. 43" },
            { porcentagem: 10, descricao: "1 t’peel carregando os pertences de um bardo", pag: "Ameaças, pag. 92" },
            { porcentagem: 20, descricao: "1 devoto de Hynnin Simão e 1 tentacute", pag: "Ameaças, pag. 47 e 195" },
            { porcentagem: 30, descricao: "4 devotos de Hynnin manhosos", pag: "Ameaças, pag. 47" },
            { porcentagem: 35, descricao: "1d4 pakks causando um incêndio", pag: "Ameaças, pag. 94" },
            { porcentagem: 36, descricao: "1d4 gnolls saqueadores dividindo um saque", pag: "Ameaças, pag. 116" },
            { porcentagem: 40, descricao: "1 mashin monge ensinando meditação (concede +2 em Vontade até o fim da aventura)", pag: "Ameaças, pag. 160" },
            { porcentagem: 50, descricao: "2 gárgulas", pag: "Ameaças, pag. 125" },
            { porcentagem: 60, descricao: "1 chefe de gangue e 2d4 bandidos ligeiros", pag: "Ameaças, pag. 45 e 43" },
            { porcentagem: 65, descricao: "1 gangue goblin", pag: "Ameaças, pag. 80" },
            { porcentagem: 70, descricao: "4 jagunços 4 mercenários de Aslothia", pag: "Ameaças, pag. 43 e 288" },
            { porcentagem: 80, descricao: "2 iniciados de Sszzass (fingindo) que estão atacando 1 nagah dormente", pag: "Ameaças, pag. 326 e 332" },
            { porcentagem: 90, descricao: "1 caçador de impuros atrás de um não-humano", pag: "Ameaças, pag. 276" },
            { porcentagem: 100, descricao: "1 forjador litúrgico oferecendo uma arma com um encanto para quem o derrotar", pag: "Ameaças, pag. 137" },
            { porcentagem: 110, descricao: "4 kappas brigões e 1 nezumi ninja enfrentando 1 coletor de arsenal", pag: "Ameaças, pag. 159, 161 e 137" },
            { porcentagem: 115, descricao: "1 dragão adulto dos segredos", pag: "Ameaças, pag. 69" },
            { porcentagem: 125, descricao: "1 chapéu preto", pag: "Ameaças, pag. 262" },
            { porcentagem: 130, descricao: "1 centurião de elite, 2 decúrias, 1 minauro arcanista e 1d6+2 centuriões, com 1 minauro ladino prisioneiro", pag: "Ameaças, pag. 170, 173 e 175" },
            { porcentagem: 135, descricao: "1 fantasma ancestral", pag: "Ameaças, pag. 232" },
            { porcentagem: 145, descricao: "1 alto clérigo de Kally, e 2 clérigos de Kally e 1d6 acólitos de Kally atacando a cidade", pag: "Ameaças, pag. 146" },
            { porcentagem: 150, descricao: "3 tanaloom disfarçados como pilares de uma igreja", pag: "Ameaças, pag. 99" },
            { porcentagem: 155, descricao: "1 dragão venerável* (trevas), 1 governador corrupto e 2 gladiadores táuricos", pag: "Jogo do Ano, pag. 311; Ameaças, pag. 177 e 172" },
            { porcentagem: 160, descricao: "1 cemitério vivo", pag: "Ameaças, pag. 286" },
            { porcentagem: 170, descricao: "2 soldados superiores", pag: "Ameaças, pag. 283" },
            { porcentagem: 185, descricao: "2 liches de Aslothia", pag: "Ameaças, pag. 292" },
            { porcentagem: 200, descricao: "Falsa Congregação (2 sszzaazitas celebrantes que em 1d4 rodadas invocarão 2 nastarraths numa multidão)", pag: "Ameaças, pag. 337 e 336" },
            { porcentagem: 999, descricao: "Invasão do Templo da Pureza Divina (1 kishinauros, 1d6 colossos supremos, 2d6 cavaleiros do leopardo sangrento*)", pag: "Ameaças, pag. 142; Jogo do Ano, pag. 296 e  295" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Aslothia": [
            { porcentagem: 2, descricao: "2 garras-zumbi", pag: "Ameaças, pag. 234" },
            { porcentagem: 6, descricao: "1 esqueleto* sem crânio. Se reunido com o crânio, ele entrega 1 riqueza média como agradecimento", pag: "Jogo do Ano, pag 330" },
            { porcentagem: 10, descricao: "1 carniçal", pag: "Ameaças, pag. 229" },
            { porcentagem: 20, descricao: "1d4 zumbis*", pag: "Jogo do Ano, pag. 297" },
            { porcentagem: 30, descricao: "1 lacedon", pag: "Ameaças, pag. 229" },
            { porcentagem: 35, descricao: "2 esqueletos*", pag: "Jogo do Ano, pag. 297" },
            { porcentagem: 40, descricao: "1 garra-zumbi enxame", pag: "Ameaças, pag. 234" },
            { porcentagem: 50, descricao: "1 ogro esqueleto", pag: "Ameaças, pag. 229" },
            { porcentagem: 60, descricao: "1d4 chacais zumbi", pag: "Ameaças, pag.287" },
            { porcentagem: 65, descricao: "4 carniçais e 1 lívido", pag: "Ameaças, pag.229 e 235" },
            { porcentagem: 70, descricao: "2 mercenários de Aslothia e 1 líder mercenário de Aslothia", pag: "Ameaças, pag. 288" },
            { porcentagem: 80, descricao: "1 wisphago", pag: "Ameaças, pag. 290" },
            { porcentagem: 90, descricao: "1 morgue’raz", pag: "Ameaças, pag. 289" },
            { porcentagem: 100, descricao: "2 fantasmas em conflito, um é o memento do outro", pag: "Ameaças, pag. 232" },
            { porcentagem: 110, descricao: "1 mortalha", pag: "Ameaças, pag. 236" },
            { porcentagem: 115, descricao: "1 capitão afogado e 4 bando de afogados", pag: "Ameaças, pag. 253 e  388 (bando)" },
            { porcentagem: 125, descricao: "2 alzeras", pag: "Ameaças, pag.284" },
            { porcentagem: 130, descricao: "2 vampiros", pag: "Jogo do Ano, pag. 299" },
            { porcentagem: 135, descricao: "1 senhor das múmias e 2 múmias", pag: "Ameaças, pag. 237 e 236" },
            { porcentagem: 145, descricao: "1 lich e 1 necrodraco esqueleto", pag: "Ameaças, pag. 291 e 238" },
            { porcentagem: 155, descricao: "1 cemitério vivo", pag: "Ameaças, pag. 286" },
            { porcentagem: 160, descricao: "2 senhores das múmias e 4 necrodracos esqueletos", pag: "Ameaças, pag. 237 e 238" },
            { porcentagem: 170, descricao: "4 necrodracos zumbis", pag: "Ameaças, pag. 238" },
            { porcentagem: 185, descricao: "1 lich de Aslothia e 4 necrodracos zumbis", pag: "Ameaças, pag. 292 e 239" },
            { porcentagem: 200, descricao: "1 necrodraco lich", pag: "Ameaças, pag. 239" },
            { porcentagem: 999, descricao: "1d4 liches de Aslothia, 2d6 vampiros* e 1 cemitério vivo", pag: "Ameaças, pag. 292 e 286; Jogo do Ano, pag. 299" }
            // Adicione outros encontros e porcentagens aqui
        ],


        "Estradas": [
            { porcentagem: 2, descricao: "1 taverna lotada", pag: "não possui" },
            { porcentagem: 6, descricao: "1 pirata vendendo um mapa do tesouro (falso)", pag: "Ameaças, pag. 259" },
            { porcentagem: 10, descricao: "4 bandidos comuns tentam roubar o grupo", pag: "Ameaças, pag. 42" },
            { porcentagem: 20, descricao: "2 guardas de cidade* patrulhando", pag: "Jogo do Ano, pag. 289" },
            { porcentagem: 30, descricao: "1 chefe bandido e 2 capangas", pag: "Ameaças, pag. 45 e 43" },
            { porcentagem: 35, descricao: "1 sacerdote de Hynnin em forma de macaco pungindo algo valioso do grupo", pag: "Ameaças, pag. 46" },
            { porcentagem: 40, descricao: "1 grifo* atacando o cavalo de mercadores", pag: "Jogo do Ano, pag. 292" },
            { porcentagem: 50, descricao: "2 gorloggs fugindo", pag: "Jogo do Ano, pag. 291" },
            { porcentagem: 60, descricao: "1 ogro guardando uma ponte e cobrando T$ 5 de pedágio", pag: "Jogo do Ano, pag. 293" },
            { porcentagem: 65, descricao: "1 bugbear sentinela e 4 goblins salteadores", pag: "Ameaças, pag 79; Jogo do Ano, pag. 300" },
            { porcentagem: 70, descricao: "1 gangue goblin", pag: "Ameaças, pag. 80" },
            { porcentagem: 80, descricao: "3 goblins de sombreiro escondidos", pag: "Ameaças, pag. 256" },
            { porcentagem: 90, descricao: "1 chefe de quadrilha, 1 capanga minotauro e 2 jagunços", pag: "Ameaças, pag 45, 44 e 43" },
            { porcentagem: 98, descricao: "1 líder pistoleiro e 3 pistoleiros", pag: "Ameaças, pag 260" },
            { porcentagem: 100, descricao: "1 caravana de mercadores (vende itens com até duas melhorias e tem T$ 1.000 para fazer compras) protegida por 4 centuriões", pag: "Ameaças, pag. 170" },
            { porcentagem: 110, descricao: "2 altos sacerdotes de Hynnin recolhendo doações para sua igreja (nem sempre intencionais)", pag: "Ameaças, pag 47" },
            { porcentagem: 115, descricao: "1 gnoll caçador de cabeças, 1 bugbear guarda-costas e 1 ogro caçador", pag: "Ameaças, pag 114, 79 e 41" },
            { porcentagem: 125, descricao: "4 legionários insanos", pag: "Ameaças, pag. 174" },
            { porcentagem: 130, descricao: "1d4+1 golens de bronze transportando 1d3+1 riquezas médias roubadas", pag: "Ameaças, pag. 127; Jogo do Ano, pag 330" },
            { porcentagem: 135, descricao: "1 grama carnívora extensa", pag: "Ameaças, pag. 365" },
            { porcentagem: 145, descricao: "1 devorador de medos* e 2 bruxas goblins", pag: "Jogo do Ano, pag. 303; Ameaças, pag. 79" },
            { porcentagem: 150, descricao: "1 hobgoblin gladiador", pag: "Ameaças, pag. 85" },
            { porcentagem: 155, descricao: "1 dragão celestial adulto tentando capturar 3 kaijin ninjas", pag: "Ameaças, pag. 166 e 157" },
            { porcentagem: 160, descricao: "1 nagah encantadora escoltada por 4 nagahs retalhadores", pag: "Ameaças, pag. 331 e 333" },
            { porcentagem: 170, descricao: "4 golens de ferro superiores enviados para eliminar os aventureiros", pag: "Ameaças, pag. 130" },
            { porcentagem: 185, descricao: "2 sszzaazitas celebrantes (um disfarçado de Tenebra, o outro de Azgher) acusando um ao outro de ser um impostor", pag: "Ameaças, pag. 337" },
            { porcentagem: 200, descricao: "1 Dragão-Real* (essência)", pag: "Jogo do Ano, pag. 312" },
            { porcentagem: 999, descricao: "Tarso pedindo um sorvete", pag: "Ameaças, pag. 241" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Galrasia": [
            { porcentagem: 2, descricao: "1 pirata fugindo de um enxame de gali-galis", pag: "Ameaças, pag. 259 e 247" },
            { porcentagem: 6, descricao: "1d4 jiboias*", pag: "Jogo do Ano, pag. 304" },
            { porcentagem: 10, descricao: "1 dahllan drogadora (possui 1d4 bálsamos da drogadora à venda)", pag: "não possui" },
            { porcentagem: 20, descricao: "1d4+1 piratas enterrando 1 riqueza menor", pag: "Ameaças, pag 258; Jogo do Ano, pag. 330" },
            { porcentagem: 30, descricao: "2 najas*", pag: "Jogo do Ano, pag. 304" },
            { porcentagem: 35, descricao: "1 galhada fêmea", pag: "Ameaças, pag. 246" },
            { porcentagem: 40, descricao: "1 matilha com 1 lobo das cavernas* e 1d4+1 lobos*", pag: "Jogo do Ano, pag. 290 e 292" },
            { porcentagem: 50, descricao: "1 sucuri* estrangulando um gorlogg*", pag: "Jogo do Ano, pag. 304 e " },
            { porcentagem: 60, descricao: "2 pteros ceifadores", pag: "Ameaças, pag. 266" },
            { porcentagem: 65, descricao: "1 espada-da-floresta montado em 1 galhada macho", pag: "Ameaças, pag. 246" },
            { porcentagem: 70, descricao: "1d3+1 ceratops guerreiros", pag: "Ameaças, pag. 264" },
            { porcentagem: 80, descricao: "2 burafontes pastando", pag: "Ameaças, pag. 243" },
            { porcentagem: 90, descricao: "1 ptero do céu infinito e 2 pteros ceifadores", pag: "Ameaças, pag. 251" },
            { porcentagem: 98, descricao: "1 gorlogg alpha e 1d4+2 gorloggs", pag: "Ameaças, pag. 217" },
            { porcentagem: 100, descricao: "1d3+1 uraghians jovens", pag: "Ameaças, pag. 311" },
            { porcentagem: 110, descricao: "1 xamã de Sarana e 1d3+1 velocis caçadores", pag: "Ameaças, pag. 268" },
            { porcentagem: 115, descricao: "1 ceratops chefe da tribo e 2d4 ceratops guerreiros", pag: "Ameaças, pag. 265 e 264" },
            { porcentagem: 125, descricao: "1 árvore-matilha", pag: "Ameaças, pag. 242" },
            { porcentagem: 130, descricao: "1 rei-tirano e 1 tuntram batalhando", pag: "Ameaças, pag. 251 e 249" },
            { porcentagem: 135, descricao: "1 obelisco misterioso obra de uma civilização antiga (na verdade é 1 tanaloom)", pag: "Ameaças, pag. 99" },
            { porcentagem: 145, descricao: "1 dragão venerável da equidade em seu covil", pag: "Ameaças, pag. 71" },
            { porcentagem: 150, descricao: "1d3+1 grande battham de passagem", pag: "Ameaças, pag. 248" },
            { porcentagem: 155, descricao: "1 razza’kham*", pag: "Ameaças, pag. 309" },
            { porcentagem: 160, descricao: "1 voracis rainha e 2d6 voracis caçadoras que vão invocar um totem da divina serpente em 1d4+1 rodadas", pag: "Ameaças, pag. 270, 269 e 272" },
            { porcentagem: 170, descricao: "1 Dragão-Real (veneno)", pag: "Jogo do Ano, pag. 312" },
            { porcentagem: 185, descricao: "1 kaiju (ferrão peçonhento e sopro corrosivo) adormecido vai acordar em 1d3 dias", pag: "Ameaças, pag. 313" },
            { porcentagem: 200, descricao: "Conflagração elemental (1 hallustir, 1 namasqall, 1 serpentaar e 1 tanaloom)", pag: "Ameaças, pag. 94, 91, 96 e 99" },
            { porcentagem: 999, descricao: "1 rubi da virtude* protegido por uma armadilha Sussurro de Sszzaas(aumente a CD em 10)", pag: "Ameaças, pag. 359" },
            // Adicione outros encontros e porcentagens aqui
        ],

        "Império": [
            { porcentagem: 2, descricao: "Uma família fugindo de Tiberus", pag: "não possui" },
            { porcentagem: 6, descricao: "1 capanga", pag: "Ameaças pag. 43" },
            { porcentagem: 10, descricao: "2 piratas", pag: "Ameaças, pag 258" },
            { porcentagem: 20, descricao: "1 legionário", pag: "Ameaças pag. 173" },
            { porcentagem: 30, descricao: "2 bandidos selvagens", pag: "Ameaças pag. 43" },
            { porcentagem: 35, descricao: "4 cavalos de carga desgovernados", pag: "Ameaças, pag 212" },
            { porcentagem: 40, descricao: "1 infecto", pag: "Ameaças, pag. 23" },
            { porcentagem: 50, descricao: "2 capangas minotauros", pag: "Ameaças, pag. 44" },
            { porcentagem: 60, descricao: "2 maníacos lefou* e 1 iniciado da agonia", pag: "Jogo do Ano, pag. 314; Ameaças, pag. 52" },
            { porcentagem: 65, descricao: "1 capelão de guerra pregando a palavra de Arsenal", pag: "Ameaças, pag. 141" },
            { porcentagem: 70, descricao: "1 minauro arcanista estudando", pag: "Ameaças, pag. 175" },
            { porcentagem: 80, descricao: "3 pistoleiros atrás de um tesouro de ND 8 em um cemitério tapistano", pag: "Ameaças, pag. 260 e Jogo do Ano, pag 328" },
            { porcentagem: 90, descricao: "2 decúrias", pag: "Ameaças, pag. 173" },
            { porcentagem: 98, descricao: "Um gladiador lefou oferecendo abrigo contra a tempestade (Descanso confortável)", pag: "não possui" },
            { porcentagem: 100, descricao: "4 arqueiros escravos e 1 governador corrupto", pag: "Ameaças, pag. 168 e 177" },
            { porcentagem: 110, descricao: "Uma arena com lutas individuais contra gladiadores táuricos", pag: "Ameaças, pag. 172" },
            { porcentagem: 115, descricao: "Armadilha viva", pag: "Ameaças, pag. 19" },
            { porcentagem: 125, descricao: "1 chapéu-preto atrás de um escravo foragido", pag: "Ameaças, pag. 262" },
            { porcentagem: 130, descricao: "1 morgadrel", pag: "Ameaças, pag. 26" },
            { porcentagem: 135, descricao: "Uma formação rubra que infecta quem a tocar com Náusea Antinatural", pag: "Ameaças, pag. 359" },
            { porcentagem: 145, descricao: "1 arquibruxo da tormenta e 2 bandos de uktril* (ND 10)", pag: "Ameaças, pag. 20 e 388 (bando); Jogo do Ano, pag. 314" },
            { porcentagem: 150, descricao: "1 senhor do gigante rubro, forma final", pag: "Ameaças, pag. 27" },
            { porcentagem: 155, descricao: "1 ezzayn", pag: "Ameaças, pag. 27" },
            { porcentagem: 160, descricao: "2 elementais corrompidos enfrentando 1 bando de centuriões de elite (ND 15)", pag: "Ameaças, pag. 101, 170 e 388 (bando)" },
            { porcentagem: 170, descricao: "Um grupo de arcanistas tapistanos realizando testes com uma Armadura do Devorador", pag: "Ameaças, pag. 275 e 61" },
            { porcentagem: 185, descricao: "4 thuwarokks", pag: "Jogo do Ano, pag. 315" },
            { porcentagem: 200, descricao: "1 avatar de aharadak em uma Área de Tormenta", pag: "Ameaças, pag. 62" },
            { porcentagem: 999, descricao: "A Marcha da Centúria Rubra (1 Avatar de Aharadak, 1 bando de Zyrrinaz (ND 16), 2d4 reishids líderes de culto, 2 bandos de legionários insanos (ND 17), e 1 arquibruxo da tormenta conjurando Momento de Tormenta)", pag: "Ameaças, pag. 62, 59, 56, 174 e 388(bandos)" }
            // Adicione outros encontros e porcentagens aqui
        ],


        "Repúblicas": [
            { porcentagem: 2, descricao: "1 malafex curioso acompanha o grupo, role novamente", pag: "Ameaças, pag. 197" },
            { porcentagem: 6, descricao: "1d3+1 cascavéis*", pag: "Jogo do Ano, pag 290" },
            { porcentagem: 10, descricao: "1d4 lobos*", pag: "Jogo do Ano, pag 294" },
            { porcentagem: 20, descricao: "1 pirata e 2 bandidos comuns", pag: ", Ameaças, pag. 259 e 42" },
            { porcentagem: 30, descricao: "1d4 t’peels tentam roubar os aventureiros", pag: "Ameaças, pag. 92" },
            { porcentagem: 35, descricao: "1d4+1 perdigueiros trolls", pag: "Ameaças, pag. 343" },
            { porcentagem: 40, descricao: "1 cocatriz", pag: "Ameaças, pag. 199" },
            { porcentagem: 50, descricao: "1 uktril perdido", pag: "Jogo do Ano, pag 314" },
            { porcentagem: 60, descricao: "1 hynne dormente que nunca vai trair os aventureiros. Ele prometeu.", pag: "Ameaças, pag. 332" },
            { porcentagem: 65, descricao: "1 serpe lutando contra 1 grifo*", pag: "Ameaças, pag. 310; Jogo do Ano, pag 292" },
            { porcentagem: 70, descricao: "2 fúrias de tauron e 1 otyugh", pag: "Ameaças, pag. 170 e 299" },
            { porcentagem: 80, descricao: "1 tendrículo escondido", pag: "Ameaças, pag. 111" },
            { porcentagem: 90, descricao: "1 ente salgueiro protegendo seu precioso jardim", pag: "Ameaças, pag. 106" },
            { porcentagem: 98, descricao: "2 kallyanach bárbaros", pag: "Ameaças, pag. 150" },
            { porcentagem: 100, descricao: "1 homem-piranha capitão, 1 homem-piranha imediato e 2 homens-piranha", pag: "Ameaças, pag. 257" },
            { porcentagem: 110, descricao: "1 reishid e 1 sacerdote da agonia preparam um sacrifício", pag: "Ameaças, pag. 56 e 52" },
            { porcentagem: 115, descricao: "1 bando de pamgras", pag: "Ameaças, pag. 98" },
            { porcentagem: 125, descricao: "1 dragão bicéfalo", pag: "Ameaças, pag. 74" },
            { porcentagem: 130, descricao: "1 alto sacerdote fintroll e 2 cavaleiros fintroll", pag: "Ameaças, pag. 347 e 345" },
            { porcentagem: 135, descricao: "1 dracomante superior (ácido) extorquindo comerciantes", pag: "Ameaças, pag. 149" },
            { porcentagem: 145, descricao: "1 dragão venerável dos recifes afundando um navio pirata", pag: "Ameaças, pag. 71" },
            { porcentagem: 150, descricao: "1 namasquall e 1 hallustir atacando uma vila portuária", pag: "Ameaças, pag. 91 e 94" },
            { porcentagem: 155, descricao: "1 reishid líder de culto e 4 líderes fanáticos lefou espalhando a palavra de seu salvador", pag: "Ameaças, pag. 58 e 55" },
            { porcentagem: 170, descricao: "1 templo de aharadak onde um senhor do gigante rubro forma final está reunindo novos cultistas oferecendo 1 dádiva de aharadak", pag: "Ameaças, pag. 58 e 60"},
            { porcentagem: 170, descricao: "1 lich de Aslothia e 4 alzeras", pag: "Ameaças, pag. 292 e 284" },
            { porcentagem: 185, descricao: "1 riqueza maior no fundo de um rio de água corrente protegida por 1d4+1 elementais corrompidos", pag: "Jogo do Ano, pag 330; Ameaças, pag. 101" },
            { porcentagem: 200, descricao: "1 kraken e 2d4+2 corgans atacando uma cidade portuária", pag: "Ameaças, pag. 325 e 89" },
            { porcentagem: 999, descricao: "Covil dos escamas verdes (1 Dragão-Real (ácido) e 2d4 dragões veneráveis (ácido))", pag: "Jogo do Ano, pag 312" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Sanguinárias": [
            { porcentagem: 2, descricao: "Ninho de 1d4+1 cascavéis*", pag: "Jogo do Ano, pag 304" },
            { porcentagem: 4, descricao: "1 trog anão bruto caçando", pag: "Ameaças, pag. 39" },
            { porcentagem: 6, descricao: "1 terrier querendo brincar", pag: "Ameaças, pag. 97" },
            { porcentagem: 10, descricao: "1 leão cochilando", pag: "Ameaças, pag. 218" },
            { porcentagem: 20, descricao: "1d4 enxames larvais", pag: "Ameaças, pag. 180" },
            { porcentagem: 35, descricao: "1 aranha gigante* em seu covil", pag: "Jogo do Ano, pag 286" },
            { porcentagem: 40, descricao: "1d3+1 lagartos perseguidores", pag: "Ameaças, pag. 110" },
            { porcentagem: 50, descricao: "1 lobo-das-cavernas* e 2 lobos*", pag: "Jogo do Ano, pag 292" },
            { porcentagem: 60, descricao: "1 avalanche", pag: "Jogo do Ano, pag 320" },
            { porcentagem: 65, descricao: "1 gigante esqueleto", pag: "Ameaças, pag. 230" },
            { porcentagem: 70, descricao: "1d3+1 grifos*", pag: "Jogo do Ano, pag 291" },
            { porcentagem: 80, descricao: "1d4+1 cerianthar preparando uma emboscada", pag: "Ameaças, pag. 307" },
            { porcentagem: 90, descricao: "1 centopeia-dragão*", pag: "Jogo do Ano, pag 286" },
            { porcentagem: 98, descricao: "4 cães do inferno*", pag: "Jogo do Ano, pag 289" },
            { porcentagem: 100, descricao: "1d4+2 basiliscos*", pag: "Jogo do Ano, pag 289" },
            { porcentagem: 110, descricao: "2 serpes anciãs", pag: "Ameaças, pag. 310" },
            { porcentagem: 115, descricao: "1d3+1 uraghian adulto", pag: "Ameaças, pag. 311" },
            { porcentagem: 125, descricao: "2 oxxodon imensos e 1 arcano de guerra veterano", pag: "Ameaças, pag. 309 e 275" },
            { porcentagem: 130, descricao: "Role novamente, o próximo encontro está sob efeito de um fenômeno rubro aleatório", pag: "Ameaças, pag. 360" },
            { porcentagem: 135, descricao: "1 mantícora primal", pag: "Ameaças, pag. 298" },
            { porcentagem: 145, descricao: "1 templo de Kallyadranoch defendido por 1 alto clérigo de Kally e 2 cavaleiros de Kally", pag: "Ameaças, pag. 146 e 144" },
            { porcentagem: 150, descricao: "1 grande tachygloss", pag: "Ameaças, pag. 308" },
            { porcentagem: 155, descricao: "1 vagalhão kobold", pag: "Ameaças, pag. 187" },
            { porcentagem: 160, descricao: "2 razza’kham caçando 4 cavaleiros do leopardo sangrento*", pag: "Ameaças, pag. 309 ; Jogo do Ano, pag 295" },
            { porcentagem: 170, descricao: "2 ezzayn especiais", pag: "Ameaças, pag. 27" },
            { porcentagem: 185, descricao: "1 Dragão-Real (fogo)*", pag: "Jogo do Ano, pag 311" },
            { porcentagem: 200, descricao: "2 kaiju brigando por território", pag: "Ameaças, pag. 313" },
            { porcentagem: 999, descricao: "Kishinauros em seu local de descanso", pag: "Ameaças, pag. 142" }
            // Adicione outros encontros e porcentagens aqui
        ],

        "Supremacia": [
            { porcentagem: 1, descricao: "recruta purista*", pag: "Jogo do Ano, pag 294" },
            { porcentagem: 2, descricao: "clérigo de Tanna-toh ferido. Se auxiliado, torna-se um parceiro ajudante iniciante até o fim da aventura", pag: "não possui" },
            { porcentagem: 6, descricao: "4 goblins salteadores* fugitivos", pag: "Jogo do Ano, pag. 302" },
            { porcentagem: 11, descricao: "1 chefe bandido", pag: "Ameaças, pag. 45" },
            { porcentagem: 21, descricao: "1 purificado fugitivo", pag: "Ameaças, pag. 280" },
            { porcentagem: 31, descricao: "1d4+2 recruta purista*", pag: "Jogo do Ano, pag 294" },
            { porcentagem: 35, descricao: "1 sargento-mor*", pag: "Jogo do Ano, pag 295" },
            { porcentagem: 40, descricao: "1d4 soldados puristas*", pag: "Jogo do Ano, pag 294" },
            { porcentagem: 50, descricao: "2 acólitos de Kally", pag: "Ameaças, pag. 146" },
            { porcentagem: 60, descricao: "1d4+2 recrutas puristas* e 1 sargento-mor*", pag: "Jogo do Ano, pag 294 e 295" },
            { porcentagem: 65, descricao: "1 dançarino de guerra e 2 bandidos selvagens", pag: "Ameaças, pag. 279 e 43" },
            { porcentagem: 70, descricao: "2 capelães de guerra*", pag: "Jogo do Ano, pag 295" },
            { porcentagem: 80, descricao: "2 soldados blindados", pag: "Ameaças, pag. 280" },
            { porcentagem: 90, descricao: "1 dançarino de guerra veterano e 2 capelães de guerra*", pag: "Ameaças, pag. 279; Jogo do Ano, pag 295" },
            { porcentagem: 98, descricao: "1 capelão de guerra*, 1 capitão-baluarte* e 2 sargentos-mor*", pag: "Jogo do Ano, pag 294 e 295" },
            { porcentagem: 100, descricao: "1d6+1 guerreiros perpétuos", pag: "Ameaças, pag. 139" },
            { porcentagem: 110, descricao: "2 caçadores de impuros e 1 cavaleiro do leopardo sangrento*", pag: "Ameaças, pag. 276; Jogo do Ano, pag 295" },
            { porcentagem: 115, descricao: "1 companhia blindada de elite", pag: "Ameaças, pag. 281" },
            { porcentagem: 125, descricao: "1 arcano de guerra veterano e 2 golens de bronze", pag: "Ameaças, pag. 275 e 127" },
            { porcentagem: 130, descricao: "1 fantasma ancestral, morto na batalha do Vale do Baixo Iörvaen", pag: "Ameaças, pag. 232" },
            { porcentagem: 135, descricao: "1 kishin e 1d6+2 bispos de guerra", pag: "Ameaças, pag. 140 e 141" },
            { porcentagem: 145, descricao: "1 concílio forjador combatendo 1 alto clérigo de Kally montado num dragão adulto*", pag: " Jogo do Ano, pag 138 e 146; Jogo do Ano, pag 310" },
            { porcentagem: 150, descricao: "1 golem de ferro superior e 1 colosso supremo*", pag: "Ameaças, pag. 130;  Jogo do Ano, pag 302" },
            { porcentagem: 155, descricao: "4 arcanos de guerra veteranos montados em carruagens de comando, escoltando 4 colossos supremos* desativados", pag: "Ameaças, pag. 274, 278 e 302" },
            { porcentagem: 170, descricao: "2 golens de ferro superiores e 1 soldado superior", pag: "Ameaças, pag. 130 e 283" },
            { porcentagem: 185, descricao: "4 colossos supremos*, 2 golens de ferro superiores e 1 soldado superior", pag: "Jogo do Ano, pag 302 e 287; Ameaças, pag. 283 " },
            { porcentagem: 200, descricao: "1d6+2 soldados superiores", pag: "Ameaças, pag. 283" },
            { porcentagem: 999, descricao: "Comando do Templo da Pureza Divina (1 kishinauros, 1d6 colossos supremos*, 2d6 bispos de guerra)", pag: "Ameaças, pag. 141 e 142; Jogo do Ano, pag 302" }
        ],

        "Lamnor": [
            { porcentagem: 2, descricao: "1d4+1 goblins salteadores", pag: "Jogo do Ano, pag 302" },
            { porcentagem: 6, descricao: "2d4 ratos gigantes", pag: "Jogo do Ano, pag 288" },
            { porcentagem: 10, descricao: "1 bandido ligeiro e 2 bandidos comuns", pag: "Ameaças, pag. 42" },
            { porcentagem: 20, descricao: "1 zumbi peçonha", pag: "Ameaças, pag 335" },
            { porcentagem: 30, descricao: "1 turba de zumbis*", pag: "Jogo do Ano, pag 299" },
            { porcentagem: 35, descricao: "1 leão disputando uma carcaça com 1 pantera", pag: "Ameaças, pag 218" },
            { porcentagem: 36, descricao: "1 ogro-esqueleto", pag: "Ameaças, pag 229" },
            { porcentagem: 40, descricao: "1 goblin engenhoqueiro* querendo fazer comércio", pag: "Jogo do Ano, pag 300" },
            { porcentagem: 50, descricao: "1 imediato e 1d4+1 piratas", pag: "Ameaças, pag 258" },
            { porcentagem: 60, descricao: "1 arauto de Thwor em peregrinação", pag: "Jogo do Ano, pag 301" },
            { porcentagem: 65, descricao: "1 tigre-de-hynnin", pag: "Ameaças, pag 207" },
            { porcentagem: 80, descricao: "1 hobgoblin mago de batalha e 2 hobgoblin soldados", pag: "Jogo do Ano, pag 301 e 300" },
            { porcentagem: 90, descricao: "1 líder goblin de sombreiro e 1d3+1 bugbear sentinela", pag: "Ameaças, pag 256 e 79" },
            { porcentagem: 98, descricao: "Ruínas com 1d4+1 riquezas menores começam a desabar (use o perigo complexo construção em colapso)", pag: " Ameaças, pag 364; Jogo do Ano, pag 330" },
            { porcentagem: 100, descricao: "1 goblin de ferro mark II e 4 goblin-bomba", pag: "Ameaças, pag 83 e 82" },
            { porcentagem: 110, descricao: "1 devorador de medos* e 2 bugbears guarda-costas", pag: "Jogo do Ano, pag 300; Ameaças, pag 79" },
            { porcentagem: 115, descricao: "2 sombras de thwor* tentam assassinar um dos aventureiros", pag: "Jogo do Ano, pag 303" },
            { porcentagem: 125, descricao: "1 engenho de guerra goblin* escoltado por 1 hobgoblin comandante tático e 2 hobgoblins atiradores", pag: "Jogo do Ano, pag 301; Ameaças, pag 85 e 84" },
            { porcentagem: 130, descricao: "lodo negro surge em um quadrado desocupado e dobra sua área a cada rodada. Role novamente.", pag: "Ameaças, pag 361" },
            { porcentagem: 135, descricao: "1 horda goblin", pag: "Ameaças, pag 81" },
            { porcentagem: 145, descricao: "Ruínas de uma cidade com 1 fantasma ancestral e 4 fantasmas", pag: "Ameaças, pag 232" },
            { porcentagem: 150, descricao: "1 necrodraco zumbi submerso num lago de lodo negro", pag: "Ameaças, pag 238 e 361" },
            { porcentagem: 155, descricao: "1d4+2 tigres-de-Hynninn primordiais", pag: "Ameaças, pag 207" },
            { porcentagem: 160, descricao: "1 cemitério vivo", pag: "Ameaças, pag 286" },
            { porcentagem: 170, descricao: "1 lobo do mar e 4 capitães da frota áurea carregando baú com 1d3 riquezas maiores protegida por 1 runa da desintegração (aumente a CD em 5)", pag: "Ameaças, pag 263, 260 e 359; Jogo do Ano, pag 330" },
            { porcentagem: 185, descricao: "1 hobgoblin gladiador e seu conselheiro espiritual clérigo de Thwor (um sszzaazita celebrante disfarçado)", pag: "Ameaças, pag 85 e 337" },
            { porcentagem: 200, descricao: "1 necrodraco lich tentando reerguer uma vila, ele invoca uma falange a cada 1d4 rodadas", pag: "Ameaças, pag 239, Jogo do Ano, pag 298" },
            { porcentagem: 999, descricao: "1 sangue do Ayrrak, 4 hobgoblins gladiadores e 2 bruxas goblins convidam os aventureiros a se juntarem as suas tropas. A força.", pag: "Ameaças, pag 87, 85 e 79; " }
        ]


    };

    // Obtenha o valor selecionado no seletor de tipo de terreno
    var tipoTerreno = document.getElementById("tipoTerreno").value;

    // Obtenha o elemento da tabela de encontros
    var tabelaEncontro = document.getElementById("tabelaEncontro");

    // Remova todas as linhas da tabela, exceto a primeira (cabeçalho)
    while (tabelaEncontro.rows.length > 1) {
        tabelaEncontro.deleteRow(1);
    }

    // Iterar pelos resultados do tipo de terreno e exibir aqueles que correspondem à porcentagem
    for (var i = 0; i < terrenos[tipoTerreno].length; i++) {
        if (randomPercentage <= terrenos[tipoTerreno][i].porcentagem) {
            // Exibir o resultado normal na tabela
            exibirResultado(randomPercentage, terrenos[tipoTerreno][i]);
            return; // Sai do loop após encontrar o resultado correspondente
        }
    }
}

function exibirResultado(rolagem, resultado) {
    // Obtenha o elemento da tabela de encontros
    var tabelaEncontro = document.getElementById("tabelaEncontro");

    // Adicione uma nova linha à tabela com o resultado
    var newRow = tabelaEncontro.insertRow();
    var rolagemCell = newRow.insertCell(0);
    var descricaoCell = newRow.insertCell(1);
    var localCell = newRow.insertCell(2);
    var imagemCell = newRow.insertCell(3);  // Nova célula para a imagem

    rolagemCell.innerHTML = rolagem; // Exibe a rolagem
    descricaoCell.innerHTML = resultado.descricao; // Exibe o encontro
    localCell.innerHTML = resultado.pag; // Exibe o local

    // Defina a imagem correspondente ao encontro ou a imagem padrão
    var imagemUrl = resultado.imagem || "https://blog.peexbrasil.com.br/wp-content/uploads/2019/01/Fuja-dos-4-erros-mais-comuns-ao-aplicar-avalia%C3%A7o-de-desempenho.jpg";  // URL da imagem padrão

    // Crie o elemento de imagem e defina a URL
    var imagemElement = document.createElement("img");
    imagemElement.src = imagemUrl;
    imagemElement.alt = resultado.descricao;  // Texto alternativo para acessibilidade
    imagemElement.style.width = "100px"; // Defina o tamanho da imagem, se necessário

    // Adicione a imagem na célula
    imagemCell.appendChild(imagemElement);
}


// Adicione um ouvinte de evento ao botão "Rolar Automaticamente" para chamar a função
document.getElementById("rollAutomatically").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do botão de enviar
    rolarEncontros(); // Chama a função para rolar encontros
});
