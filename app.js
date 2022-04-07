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


function checkCommand(message, command, callback){
	if(message.text == command || message.text == (command+"@"+botName)){
		callback();
	}
}

app.use('',(req, res)=>{
    console.log(req.body);
	var chatId = req.body.message.chat.id;
	var message = req.body.message.text;
	checkCommand(message, "/salve", ()=>sendMessage(chatId, "Hello!"));
	//if(checkCommand(message,"/salve"))
	//	sendMessage(chatId,'Hello!');
    res.sendStatus( 200 );
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
