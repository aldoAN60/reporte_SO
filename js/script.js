document.getElementById("boton").addEventListener("click", function(){
  var nombre = document.getElementById("n").value;
  var fecha  = document.getElementById("fn").value;
  var peso = document.getElementById("p").value;
  var altura = document.getElementById("a").value;

  
//obtener el año del campo fecha

var anio = parseInt(fecha.substr(0, 4));

var anioactual = new Date().getFullYear();

var edad = anioactual - anio; 
  
  
  document.getElementById("no").innerHTML =  nombre; 
  document.getElementById("fe").innerHTML =  fecha; 
  document.getElementById("ed").innerHTML =   edad;
  document.getElementById("pe").innerHTML =   peso; 
  document.getElementById("al").innerHTML =   altura; 
 });