const superagent = require('superagent');
const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class Dogcommand extends commando.Command 
{

constructor(client)
{
super(client,{
    name: 'dog',
    group: 'meme',
    memberName: 'dog',
    description: 'sends a random dog pic',
    prefix: '$',
});
}

async run(message, args)
{
let {body} = await superagent
.get('https://random.dog/woof.json');

const { text } = args;
const embed = new RichEmbed()
    .setTitle("Doggo :dog: ")
    .setColor(0x00AE86)
    .setImage(body.url);
return message.channel.send(embed);
}}
module.exports = Dogcommand;
