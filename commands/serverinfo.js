const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("server info")
        .setColor("#00e8f4")
        .setThumbnail(icon)
        .addField("Bot name", bot.user.username)
        .addField("Joined add", message.member.joinedAt)
        .addField("Total members", message.guild.memberCount)

    return message.channel.send(serverEmbed);

}

    module.exports.help = {
        name: "serverinfo"
    }