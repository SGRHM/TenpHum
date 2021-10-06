
module.exports = function Data(){

var Data = new Date();
var minuto = Data.getMinutes();
var hora = Data.getHours(); //heure
var segundo = Data.getSeconds(); //secondes
var mes = Data.getDate(); //renvoie le chiffre du jour du mois 
var numMes = Data.getMonth() + 1; //le mois en chiffre
var fullDate = Data.getFullYear(); // me renvoie en chiffre l'annee
if (numMes < 10) { numMes = '0' + numMes; }
if (mes < 10) { mes = '0' + mes; }
if (segundo < 10) { segundo = '0' + segundo; }
if (minuto < 10) { minuto = '0' + minuto; }

var horaDaInsercao = hora + ':' + minuto + ':' + segundo;
var dataDaInsercao = mes + '/' + numMes + '/' + fullDate;

console.log(horaDaInsercao)



}


