const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    // !clear 21

    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("You can't use this command!");

    if(!args[0]) return message.reply("Enter a number.");

    if(Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => { 

            if(args[0] == 0){

                message.channel.send(`I can't delete 0 messages anyway?`).then(msg => msg.delete(3000));

            } else if(args[0] == 1) {

                message.channel.send(`I have 1 message delete.`).then(msg => msg.delete(3000));

            } else {

                message.channel.send(`I have ${args[0]} messages deleted`).then(msg => msg.delete(3000));

            }
        });

    } else {
        return message.channel.send("Enter a number.");
    }


}

    module.exports.help = {
        name: "clear"
    }