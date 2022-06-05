var corpo = document.getElementById("corpo");

var compt = window.getComputedStyle(corpo);

console.log(compt.getPropertyValue("width"));
/*
var nave = document.querySelector(".titulo-principal2");
var cabecalho = document.getElementById("cabecalho");

var compStylesCorpo = window.getComputedStyle(corpo);

var valueCorpo = compStylesCorpo.getPropertyValue("width");

console.log(valueCorpo);

var compStylesCabecalho = window.getComputedStyle(cabecalho);

var valueCabecalho = compStylesCabecalho.getPropertyValue("width");

console.log(valueCabecalho);

nave.style.width = valueCabecalho;*/