const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Bot Ready!');

  
  bot.user.setGame('boxyyybot.weebly.com');
  

});



bot.on('message', message => {




  if (message.content === "!boxyyy ping") {
    message.channel.sendMessage('pong!');
  }
  
});





