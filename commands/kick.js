const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var kickUser = message.guild.member(message.mentions.users.first());

    if (!kickUser) return message.channel.send("user not found");

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use this command!");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick this person!");

    var kick = new discord.RichEmbed()
        .setDescription("kick")
        .setColor("#ee0000")
        .addField("Kicked User", kickUser)
        .addField("Kicked by", message.author)
        .addField("Reason", reason);

    var kickChannel = message.guild.channels.find('name', "punish");
    if (!kickChannel) return message.guild.send("can't find the Channel Punish")

    kickUser.kick(reason);

    kickChannel.send(kick);

    return;


}

    module.exports.help = {
        name: "kick"
    }