const Commando = require('discord.js-commando');
const bot = new Commando.Client({commandPrefix: '$'});
const { Client, Attachment } = require('discord.js');
const superagent = require('superagent');

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
  
class Memecommand  
  {
  
  constructor(client)
  {
  (client,{
      name: 'meme',
      group: 'meme',
      memberName: 'meme',
      description: 'sends a random meme',
      
  });
  }
  
  async run(message, args)
  {
  let {body} = await superagent
  .get('https://api-to.get-a.life/meme');
  
  const { text } = args;
  const embed = new RichEmbed()
      .setTitle("Meme")
      .setColor(0x00AE86)
      .setImage(body.url);
  return message.channel.send(embed);
  }}  

const Discord = require('discord.js');
bot.music = require("discord.js-musicbot-addon");
bot.music.start(bot, {
  youtubeKey: "AIzaSyDSs_xO7kBA2YlACBz26k0o7MfnTihss1M"
  ,botPrefix: '$'
});

bot.login(process.env.BOT_TOKEN);
