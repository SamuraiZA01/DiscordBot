const superagent = require('superagent');
const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class Catcommand extends commando.Command 
{

constructor(client)
{
super(client,{
    name: 'cat',
    group: 'meme',
    memberName: 'cat',
    description: 'sends a random cat pic',
    
});
}

async run(message, args)
{
let {body} = await superagent
.get('http://aws.random.cat/meow');

const { text } = args;
const embed = new RichEmbed()
    .setTitle("Cat :cat:")
    .setColor(0x00AE86)
    .setImage(body.file);
return message.channel.send(embed);
}}
module.exports = Catcommand;
