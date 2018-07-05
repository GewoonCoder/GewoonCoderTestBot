const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
        console.log("Can't find files!");
        return;
    }

    jsFiles.forEach((f, i) => {

       var fileGet = require(`./commands/${f}`);
       console.log(`The file ${f} is loaded`)

       bot.commands.set(fileGet.help.name, fileGet);
    
    })
});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("gewooncoder.eu | !help", {type: "PLAYING"});

});


bot.on("guildMemberAdd", member => { 

    var role = member.guild.roles.find("name", "Member");

    if( !role) return;

    member.addRole(role);

    const channel = member.guild.channels.find("name", "algemeen");

    if(!channel) return;

    channel.send(`Welcome on our Discord server! ${member}`);

})

bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if(message.author.bot) return;

    if(message.channel.type === "dm") return

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);

});

bot.login(botConfig.token);