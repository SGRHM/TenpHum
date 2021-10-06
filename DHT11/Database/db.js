const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TongaatDHT', { 
    
useUnifiedTopology: true,
useNewUrlParser: true 

},

()=> console.log('mongodb running'))

module.exports = mongoose;
