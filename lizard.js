const superagent = require('superagent');
const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class Lizardcommand extends commando.Command 
{

constructor(client)
{
super(client,{
    name: 'lizard',
    group: 'meme',
    memberName: 'lizard',
    description: 'sends a random lizard pic',
    prefix: '$',
});
}

async run(message, args)
{
let {body} = await superagent
.get('https://nekos.life/api/lizard');

const { text } = args;
const embed = new RichEmbed()
    .setTitle("Sneaky snek :lizard: ")
    .setColor(0x00AE86)
    .setImage(body.url);
return message.channel.send(embed);
}}
module.exports = Lizardcommand;
