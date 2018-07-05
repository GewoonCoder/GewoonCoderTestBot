const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("discord bot info")
        .setColor("#00e8f4")
        .setThumbnail(botIcon)
        .addField("Bot name", bot.user.username)
        .addField("Created add", bot.user.createdAt)
        
    return message.channel.send(botEmbed);

}

    module.exports.help = {
        name: "info"
    }