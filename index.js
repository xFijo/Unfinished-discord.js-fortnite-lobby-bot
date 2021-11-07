const { Client } = require('fnbr');
const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');

//const success = '3066993';
//const fail = '15105570';

const bot = new Client({
  auth: {
    authorizationCode: '',
  },
  debug: false
});

(async () => {
  await bot.login();
  console.log(`Logged on ${bot.user.displayName}`);
})();

client.on('ready', () => {
  console.log(`[SERVER][BOT] Client succesfully logged in as ${client.user.tag}`);
  console.log(`Watching ${client.guilds.cache.size} servers!`);
  client.user.setPresence({ activity: { name: 'Watching Fortnite' }, status: 'idle' })
});

const accEmbed = new MessageEmbed()
 .setColor('GREEN')
 .setTitle('Account')
 .addField(`Currently logged in as:`, bot.user.displaName)
 .setTimestamp()

const skinEmbed = new MessageEmbed()
 .setColor('GREEN')
 .setTitle('Current Equipped Skin')
 .addField(`Wearing:`, `bot.`) // unfinished, check https://fnbr.org/ for more information
 .setTimestamp()

 client.on('message', msg => {
   if (msg == '--account') {
     msg.channel.send(accEmbed);
   };
 });

const mySecret = process.env['token']
client.login(mySecret)
