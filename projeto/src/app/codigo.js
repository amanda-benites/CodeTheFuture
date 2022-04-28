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
    document.getElementById("varrerCasa").innerText = nome

    const aspirarCasa = {
        nome: "Aspirar a Casa"
        , tempo: 15
        }
    document.getElementById("aspirarCasa").innerText = tempo

    const passarPano = {
        nome: "Passar o pano no chão"
        , tempo: 20
        }
    document.getElementById("passarPano").innerText = tempo

    const lavarLouca = {
        nome: "Lavar a louça"
        , tempo: 20
        }
    document.getElementById("lavarLouca").innerText = tempo

    const tirarPo = {
        nome: "Tirar o pó"
        , tempo: 20
        }
    document.getElementById("tirarPo").innerText = tempo

    const arrumarQuarto = {
        nome: "Arrumar o quarto"
        , tempo: 20
        }
    document.getElementById("arrumarQuarto").innerText = tempo

    const arrumarSala = {
        nome: "Arrumar a sala"
        , tempo: 20
        }
    document.getElementById("arrumarSala").innerText = tempo

    const arrumarCozinha = {
        nome: "Arrumar a Cozinha"
        , tempo: 20
        }
    document.getElementById("arrumarCozinha").innerText = tempo

    const banheiro = {
        nome: "Arrumar e limpar o banheiro"
        , tempo: 20
        }
    document.getElementById("banheiro").innerText = tempo

    const arrumarRoupeiro = {
        nome: "Arrumar o roupeiro"
        , tempo: 20
        }
    document.getElementById("arrumarRoupeiro").innerText = tempo
    
    
}

function selecao() {
    const tarefas = [varrerCasa, aspirarCasa, passarPano, lavarLouca, tirarPo, arrumarQuarto, arrumarSala, arrumarCozinha, banheiro, arrumarRoupeiro]
}

