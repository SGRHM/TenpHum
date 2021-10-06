const socket = io();



const temperatureDisplay = document.getElementById('temperature');
const humidytiDisplay = document.getElementById('humidyti');

socket.on('data', function (data) {

    


   var temperature = data.slice(0, 2); 
   var humidite = data.slice(2, 4); 

   var tempe = parseInt(temperature);
   var humi = parseInt(humidite);

    console.log("temperatura:\t" +tempe);
    console.log("humidade:\t" +humi);

    temperatureDisplay.innerHTML = `${tempe}°C`;
    humidytiDisplay.innerHTML = `${humi}%`;
})