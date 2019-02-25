const Commando = require('discord.js-commando');
const bot = new Commando.Client({commandPrefix: '&'});
const { Client, Attachment } = require('discord.js');
const superagent = require('superagent');
const TOKEN = 'NTQ3MDg0NjgxOTc2MjE3NjAw.D1BQ8w.CY6sWqQu1lNhCkz0ot0ZMAzgbB8'
bot.on('ready', () => {
  bot.user.setStatus('available')
  bot.user.setPresence({
      game: {
          name: '$help , &help',
          type: "WATCHING",
          
      }
  });
}); 


bot.on('ready', () => {
  console.log('I am ready!');
});

bot.registry.registerGroup('meme', 'Meme');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  
  if (!channel) return;
  
  channel.send(`Welcome to the strip club my boy, ${member}`);
});

bot.on('message', message => {
    
    if (message.content === 'what is my avatar') {
     
      message.reply(message.author.avatarURL);
    }
  });
  
  

const Discord = require('discord.js');
bot.music = require("discord.js-musicbot-addon");
bot.music.start(bot, {
  youtubeKey: "AIzaSyDSs_xO7kBA2YlACBz26k0o7MfnTihss1M"
  ,botPrefix: '$'
});

bot.login(TOKEN);
