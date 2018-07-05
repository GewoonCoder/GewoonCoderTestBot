const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Discord bot made by Daan//Thrintos")

}

    module.exports.help = {
        name: "author"
    }