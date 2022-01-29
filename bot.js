const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const helpEmbed = new MessageEmbed()
    .setColor("#0e0e0e")
    .setTitle("OtterBot Commands")
    .setDescription(">help: Sends all of the help commands for OtterBot\n\n>otter: Sends a spinning otter")
    .setTimestamp()

const otterEmbed = new MessageEmbed()
    .setColor("#0e0e0e")
    .setTitle("An Otter!")
    .setImage("https://cdn.pixabay.com/photo/2016/06/05/22/42/otter-1438378_960_720.jpg")
    .setTimestamp()

client.on('message', helpCmd => {
    if(helpCmd.content === ">help") {
        helpCmd.channel.send({ embeds: [helpEmbed] })
    }
})

client.on('message', spinningOtter => {
    if(spinningOtter.content === ">otter") {
        spinningOtter.channel.send({ embeds: [otterEmbed] })
    }
})

client.login('Lol you thought I really was gunna give out my bot code');
