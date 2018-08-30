const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
    .setTitle(`Help Menu`)
    .setColor("#00ffd4")
    .addField("⠀", "⠀")
    .addField("Member Commands", "Commands useable by Members")
    .addField("⠀", "1: Report | Usage: !report <@user> <reason> | Info: Reports specified user to an Admin. <make a channel called 'bot'> | Group: Everyone")
    .addField("⠀", "2: Bot Info  | Usage: !botinfo | Info: Displays Information about the bot. | Group: Everyone")
    .addField("⠀", "3: Server Info | Usage: !serverinfo | Info: Displays Information about the server. | Group: Everyone")
    .addField("⠀", "4: Ping | Usage: !ping | Info: Replies with Pong! | Group: Everyone")
    .addField("⠀", "⠀")
    .addField("Moderation", "Commands useable by Admins")
    .addField("⠀", "1: Kick | Usage: !kick <@user> <reason> | Info: Removes user from server. | Group: Admin")
    .addField("⠀", "2: Ban | Usage: !ban <@user> <reason> | Info: PERMANANTLY removes user from server. | Group: Admin")
    .addField("⠀", "3: Temp-Mute | Usage: !tmute <@User> <time + interval> | Info: Temporarily Mutes specified User. | Group: Admin")
    .addField("⠀", "4: Prune | Usage: !prune <0-100> | Info: Removes specified amount of  messages. | Group: Admin")


    message.member.send(helpembed)


}

module.exports.help = {
  name: "help"
}
