var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kidsedu:kids123456@cluster0.jrivq.mongodb.net/kidsedu",{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log('database is connected successfully');
}).catch(error =>{
    console.log('database not connected due to '+ error);
});

// mongodb://localhost:27017/kidsedu
// mongodb+srv://kidsedu:kids123456@cluster0.jrivq.mongodb.net/kidsedu
// mdp: kids123456