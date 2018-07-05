const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{

        var text = "**GewoonCoder bot** \n\n **__Commands__** \n !info - Krijg info over de Discord bot \n !serverinfo - Hier kan je de Discord server info zien \n !ping - Get a nice message :) \n\n **__Admin Commands__** \n !kick - Kick player \n !ban - ban player \n !clear - clear the chat! \n\n **Bot made by Daan//Thrintos.**";
        
        message.author.send(text);

        message.reply("Al de commands kan je vinden in pm.");

    }catch (error){
        message.channel.send("er is iets fouts gebeurd");
    }

}

module.exports.help = {
    name: "help"
}