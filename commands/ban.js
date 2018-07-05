const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if(!banUser) return message.channel.send("user not found");

        var reason = args.join(" ").slice(22);

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use this command!");

        if(banUser.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this person!");

        var ban = new discord.RichEmbed
            .setDescription("ban")
            .setColor("#ee0000")
            .addField("baned User", banUser)
            .addField("baned by", message.author)
            .addField("Reason", reason);

        var banChannel = message.guild.channels.find('name', "punish");
        if(!banChannel) return message.guild.send("can't find the Channel Punish")

        message.guild.member(banUser).ban(reason);

        banChannel.send(ban);
        
        return;

}

    module.exports.help = {
        name: "ban"
    }