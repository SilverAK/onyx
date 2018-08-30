const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Couldn't find the User!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry! You don't have permission!");
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person cannot be Banned! Sorry?");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#c679f7") // Color Embed
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id} with ID: ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find('name', "bot");
  if(!ban) return message.channel.send("Couldn't find bot channel. Please make one titled, 'BOT'")

  message.guild.member(bUser).ban(bReason)
  banChannel.send(banEmbed);

  }

module.exports.help = {
  name: "ban"
}
