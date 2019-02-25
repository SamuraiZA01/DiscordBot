const superagent = require('superagent');
const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class neko extends commando.Command 
{

constructor(client)
{
super(client,{
    name: 'neko',
    group: 'meme',
    memberName: 'neko',
    description: 'sends a random neko pic',
    prefix: '$',
});
}

async run(message, args)
{
let {body} = await superagent
.get('https://nekos.life/api/neko');

const { text } = args;
const embed = new RichEmbed()
    .setTitle("NEKO :wink: ")
    .setColor(0x00AE86)
    .setImage(body.neko);
return message.channel.send(embed);
}}
module.exports = neko;
