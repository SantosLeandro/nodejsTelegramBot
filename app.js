const express = require("express");
const app = express();
const https = require('https');
const PORT = process.env.PORT || 5000;
const token = process.env.TOKEN;
const botName = process.env.BOTNAME;

function sendMessage(chatId, text){
    https.get('https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chatId+'&text='+text,()=>{

    });
}

function checkCommand(message, command, callback){
    if(message == command || message == command+"@"+botName){
        callback();
    }
}

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('',(req, res)=>{
    console.log(req.body);
    console.log("chat_id: "+req.body.message.chat.id);
    checkCommand(req.body.message.text, "/teste", () =>  sendMessage(req.body.message.chat.id,'Hello!') );
      //sendMessage(req.body.message.chat.id,'Hello!');
      res.sendStatus( 200 );
});


app.listen(PORT, () => console.log(`Bot Listening on ${ PORT }`));
