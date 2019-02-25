const superagent = require('superagent');
const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class Memecommand extends commando.Command 
{

constructor(client)
{
super(client,{
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
module.exports = Memecommand;
