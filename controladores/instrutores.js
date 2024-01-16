const listaDeInstrutores = require("../dados/instrutores");

function consultarTodosOsInstrutores(req, res) {
    res.json(listaDeInstrutores);
}

function consultarUmInstrutor(req, res) {
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
    );

res.json(instrutor)
}

let proximoId = 5;

function criarInstrutor(req, res) {
    const novoInstrutor = {
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao,
    };

    listaDeInstrutores.push(novoInstrutor);

    proximoId += 1;

    res.json(novoInstrutor);
}

function editarInstrutor(req, res) {
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
        );

        if (req.body.nome !== undefined) {
            instrutor.nome = req.body.nome
        };

        if (req.body.idade !== undefined) {
            instrutor.idade = req.body.idade
        };

        if (req.body.areaDeAtuacao !== undefined) {
            instrutor.areaDeAtuacao = req.body.areaDeAtuacao
        }

        res.json(instrutor);
}

function substituirIntrutor(req, res) {
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
        );

        if (instrutor) {
            //substituir
            instrutor.nome = req.body.nome;
            instrutor.idade = req.body.idade;
            instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
            res.json(instrutor)
        } else {
            //inserir
            const novoInstrutor = req.body;
            listaDeInstrutores.push(novoInstrutor);
            res.json(novoInstrutor);
        }
}

function deletarInstrutor(req, res) {
    const instrutor = listaDeInstrutores.find(
        (instrutor) => instrutor.id === Number(req.params.idConsultado)
        );

        const indice = listaDeInstrutores.indexOf(instrutor);

        listaDeInstrutores.splice(indice, 1);

        res.json(instrutor)
}

module.exports = {consultarTodosOsInstrutores,
    consultarUmInstrutor,
    criarInstrutor,
    editarInstrutor,
    substituirIntrutor,
    deletarInstrutor
}