const express = require("express");
const app = express();
const https = require('https');
const PORT = process.env.PORT || 5000;
const token = process.env.TOKEN;
const botName = process.env.BOTNAME;

function sendMessage(chatId, text){
    https.get('https://api.telegram.org/bot'+token+'/sendMessage?chatId='+chatId+'&text='+text,()=>{

    });
}

app.use(express.json());
app.use('',(req, res)=>{
    console.log(req.body);
      sendMessage(req.body.message.id,'Hello!');
    res.sendStatus( 200 );
});


app.listen(PORT, () => console.log(`Bot Listening on ${ PORT }`));
