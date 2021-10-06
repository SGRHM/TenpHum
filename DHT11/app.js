const express = require('express');
const http = require('http')
const app = express();
const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;
require('./Database/db')


const cors = require('cors');
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(cookieParser())
app.use(express.json())



const SocketIO = require('socket.io');
const server = http.createServer(app);
const io = SocketIO.listen(server);

app.use((req, res, next)=>{
	req.io = io;

	next();
})

var MongoClient = require('mongodb').MongoClient;

app.use(express.json())
app.use(require('./routers/monitoramentoRouter'))

app.use(express.static(__dirname + '/public'));

var url = "mongodb://localhost:27017/";

server.listen(3000, () => console.log('server running on port 3000'));


const port = new SerialPort('/dev/ttyACM0', {
    baudRate:9600
});

const parser = port.pipe(new ReadLine({delimiter: '\r\n'}));

parser.on('open', ()=>{
    console.log('opened connections')
});

parser.on('data', (data)=>{
  
    
  

   var temperature = data.slice(0, 2); 
   var humidite = data.slice(2, 4); 

   var tempe = parseInt(temperature);
   var humi = parseInt(humidite);
  

   

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


  console.log("temperatura:\t" +tempe);
    console.log("humidade:\t" +humi);
   
    var tempEtHum = { 'Temperature': tempe, 'Humidity': humi, 'Data':dataDaInsercao, 'Hora':horaDaInsercao };
   

   

    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TongaatDHT");
        dbo.collection("temphums").insertOne(tempEtHum, function(err, res) {
            if (err) throw err;
            console.log("Temperatura e Humidade Inseridas no Banco de Dados");
            
            db.close();
        });
    });

    io.emit('data', tempEtHum);
    

});


parser.on('error', (err)=>{
    console.log(err);
});

