const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('Bot Ready!');

  
  bot.user.setGame('boxyyybot.weebly.com');
  

});



bot.on('message', message => {

  if (message.content === "!Merhaba") {
    message.reply.sendMessage('Merhaba, Hoş geldiniz!');
  }
  
});

bot.login(process.env.TOKEN);
