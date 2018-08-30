const botconfig = require("./botconfig.json");
const Discord = require ("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});



bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Wings of Fire", {type: "READING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


    // Kick Command (Add Comments - - -)


//   if(cmd === `${prefix}report`){

// Server Information Command

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.displayerAvatarURL; // Displays avatarURL
    let serverembed = new Discord.RichEmbed() // Rich Embed
    .setDescription("Server Information") // Server Imformation | description
    .setColor("#c679f7") // Color Embed
    .setThumbnail(sicon) // Displays Server Icon
    .addField("Server Name", message.guild.name) // Displays the name of the Guild
    .addField("Created On", message.guild.createdAt) // Displays when Server was created
    .addField("You Joined", message.member.joinedAt) // Displays when User Joined
      .addField("Total Members", message.guild.memberCount); // Displays total server Members

      return message.channel.send(serverembed); // Embeds into Server

    }




});

bot.login(botconfig.token);
