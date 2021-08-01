// require the discord.js module
const Discord = require("discord.js");
const token = process.env.TOKEN;

const client = new Discord.Client();
let prefix = "^";

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command == "ping") {
    message.channel.startTyping();
    setTimeout(() => {
      message.react("<a:emoji_2:871428955008290876>");
      let ping = new Discord.MessageEmbed()
        .setColor("#00ffff")
        .setTitle("Pong!")
        .setDescription("`" + client.ws.ping + "` ms")
        .setTimestamp();
      message.reactions.removeAll();
      message.react("<a:check:871428234976301168>");
      message.channel.send(ping);
    }, 1000);
    message.channel.stopTyping();
  } else if (command == "eval") {
    message.react("<a:emoji_2:871428955008290876>")
    if (message.author == "493131233514225674") {
      var result = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      try {
        message.reactions.removeAll()
        let evaled = eval(result);
        message.react("<a:check:871428234976301168>")
      } catch (err) {
        message.reactions.removeAll()
        let errorEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "You put:\n```js\n" +
              result +
              "```\nAnd here's the error:\n```" +
              err.message +
              "```"
          )
          .setColor("#ff0000")
          .setTimestamp();
          message.channel.send("Note: I do not work with any other language besides JS!")
        message.channel.send(errorEmbed);
        message.react(":x:")
      }
    } else {
      message.reactions.removeAll()
      message.channel.send("stop");
      message.react(":x:")
    } 
  } 
});

client.login(token);
