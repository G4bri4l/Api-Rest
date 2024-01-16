const express = require("express");
const instrutores = require("./controladores/instrutores")

const roteador = express();

roteador.get("/instrutores", instrutores.consultarTodosOsInstrutores);
roteador.get("/instrutores/:idConsultado", instrutores.consultarUmInstrutor )
roteador.post("/instrutores", instrutores.criarInstrutor )
roteador.patch("/instrutores/:idConsultado", instrutores.editarInstrutor)
roteador.put("/instutores/:idConsultado", instrutores.substituirIntrutor)
roteador.delete("/instrutores/:idConsultado", instrutores.deletarInstrutor)


module.exports = roteador;