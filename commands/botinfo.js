const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL // Displays avatarURL
  let botembed = new Discord.RichEmbed() // Rich Embed
  .setDescription("Bot Information") // Bot Imformation | description
  .setColor("#c679f7") // Color Embed
  .setThumbnail(bicon) // Displays bot Icon
  .addField("Bot Name", bot.user.username) // Displays the name of the Bot
  .addField("Created On", bot.user.createdAt) //Displays when Bot was created
  .addField("Created By", "@TalonsofPower (IG)"); //Displays when Bot was created

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
