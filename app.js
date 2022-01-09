const express = require("express");
const app = express();
const https = require('https');
const PORT = process.env.PORT || 5000;
const token = process.env.TOKEN;

function sendMessage(chatId, text){
    https.get('https://api.telegram.org/bot'+token+'/sendMessage?chatId='+chatId+'&text='+text,()=>{

    });
}

app.use('',(req, res)=>{
    console.log(req.body);
    //sendMessage(req.body.message.chat.id,'Hello!');
    res.sendStatus( 200 );
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));