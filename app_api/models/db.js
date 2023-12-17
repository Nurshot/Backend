const { default: mongoose } = require('mongoose');
var mangoose = require('mongoose');

var dbURL='mongodb+srv://nurshot:nurshot@mekanbul.h6341tl.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(dbURL)

mongoose.connection.on("connected",function(){
    console.log(dbURL+" baglandi.")
});


mongoose.connection.on("error",function(){
    console.log(dbURL+" hata.")
});

mongoose.connection.on("disconnected",function(){
    console.log(dbURL+" disconnected.")
});

process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("kapatildi");
    process.exit(0);
    
})