var data = new Date();

var dia = String(data.getDate()).padStart(2, '0');

var mes = String(data.getMonth() + 1).padStart(2, '0');

var ano = data.getFullYear();

dataAtual = dia + '/' + mes + '/' + ano;

var rodapeDateIndex = document.getElementById("rodape-text");

var rodapeDate = document.getElementsByClassName("rodape-text");

if (rodapeDateIndex != null) {

    rodapeDateIndex.textContent = "Desenvolvido por Hítalo Aguiar e Luis Felipe na disciplina de Desenvolvimento Front-End " + dataAtual;
}

else {

    rodapeDate[0].textContent = "Desenvolvido por Hítalo Aguiar e Luis Felipe na disciplina de Desenvolvimento Front-End " + dataAtual;
}