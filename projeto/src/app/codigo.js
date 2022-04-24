function btnquant() {
    const valorDigitado = document.getElementById("numeroTarefas").value
    console.log("Valor digitado: ", valorDigitado);
}

function btnclassif() {
    const nomeDigitado = document.getElementById("nome").value
    const tempoDigitado = document.getElementById("tempoDuracao").value
    console.log("Nome da Tarefa: ", nomeDigitado);
    console.log("Tempo de Duraçãp: ", tempoDigitado);
}

function lista() {

    const varrerCasa = {
    nome: "Varrer a casa"
    , tempo: 20
    }

    const aspirarCasa = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const passarPano = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const lavarLouca = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const tirarPo = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const arrumarQuarto = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const arrumarSala = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const arrumarCozinha = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const banheiro = {
        nome: "Varrer a casa"
        , tempo: 20
        }

    const arrumarRoupeiro = {
        nome: "Varrer a casa"
        , tempo: 20
        }
}

function selecao() {
    const tarefas = [varrerCasa, aspirarCasa, passarPano, lavarLouca, tirarPo, arrumarQuarto, arrumarSala, arrumarCozinha, banheiro, arrumarRoupeiro]
}

