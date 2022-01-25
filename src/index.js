process.on("unhandledRejection", console.error);
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('"You are not permitted to do that. Are you sure you are in the right mode?"\n-WorldEdit');
});

app.listen(3000, () => console.log("works"));

// require the discord.js module
const { Client, Collection, MessageActionRow, MessageEmbed, MessageSelectMenu } = require('discord.js');
const Discord = require('discord.js')
const token = process.env.TOKEN;

let prefix = "^";

let toecho;
let saidp;

let errorsc = [];

var packageJson = require("./package.json");

const client = new Client({
  allowedMentions: { parse: ["users"], repliedUser: false },
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "DIRECT_MESSAGES"
  ],
  partials: ["CHANNEL"],
});

client.config = { prefix: '^' }

const { readdirSync } = require('fs');

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.commands = new Collection();
const commandFolders = readdirSync('./commands');

for (const folder of commandFolders) {
  const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
    command.category = folder;
  }
}

/* client.on("messageCreate", message => {
  try {
      if (message.author.bot
      || message.content.startsWith(`${prefix} `)
      || !message.content.startsWith(prefix)
      || message.content === prefix) return;
      const args = message.content
        .slice(prefix.length)
        .trim()
        .split(" ");
      const command = args.shift().toLowerCase();
      switch (command) {
        case "help":
          const help = new MessageEmbed()
            .setTitle(":information_source: SodaBot Help")
            .setDescription(":question: Select an item from the dropdown below.")
            .setColor("YELLOW")
            .setTimestamp();
          const helpdrop = new MessageActionRow()
            .addComponents(
              new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Select an item..')
                .addOptions([
                  {
                    label: 'Misc',
                    description: 'Things that aren\'t exactly "fun", but are still useful',
                    value: 'miscellaneous',
                    emoji: '💿'
                  },
                  {
                    label: 'Developer tools',
                    description: 'Things meant for bot developers only',
                    value: 'devtool',
                    emoji: '🛠️'
                  }
                ])
            );
          message.reply({embeds: [help], components: [helpdrop]})
          break;
        case "eval":
          if (message.author.id === "493131233514225674") {
            try {
              var result = message.content
                .split(" ")
                .slice(1)
                .join(" ");
              eval(result)
            } catch(er) {
              const error = new MessageEmbed()
                .setTitle(":x: Just to let you know...")
                .setDescription(`You made a mistake, sunny pal.\nYour error:\n\`\`\`js\n${er.message}\n\`\`\``)
                .setColor("RED")
                .setTimestamp();
              message.channel.send({embeds:[error]})
            }
          }
          break;
        case "eval2":
          if (message.author.id === "493131233514225674" || message.author.id === '478823932913516544') {
            try {
              var result = message.content
                .split(" ")
                .slice(1)
                .join(" ");
              const evved = eval(result)
              message.channel.send(`\`\`\`js\nalright bet bro\n\n${evved}\n\`\`\``)
            } catch(er) {
              const error = new MessageEmbed()
                .setTitle(":x: Just to let you know...")
                .setDescription(`You made a mistake, sunny pal.\nYour error:\n\`\`\`js\n${er.message}\n\`\`\``)
                .setColor("RED")
                .setTimestamp();
              message.channel.send({embeds:[error]})
            }
          }
          break;
        default:
          const nocommand = new MessageEmbed()
            .setTitle(":interrobang: What command is that?!")
            .setDescription(`I don't know what you were trying to run.\nCheck for spelling errors or type \`${prefix}help\` for a list of commands.`)
            .setColor("RED")
            .setTimestamp();
          message.channel.send({embeds:[nocommand]})
          break;
      }
    } catch (e) {
    message.channel.send(e.message);
  }
}); */

client.on("interactionCreate", async interaction => {
  const mischelp = new MessageEmbed()
  .setTitle(":cd: SodaBot Help")
  .setDescription(`**Prefix:** \`${prefix}\``)
  .addField(
      'Commands',
      '`guildinfo`\nGet info on the current guild\n\n`channelinfo`\nGet info on the current channel\n\n`avatar`\nWhat\'s your avatar?',
      true
    )
  .setTimestamp()
  .setColor("BLUE");

const devhelp = new MessageEmbed()
  .setTitle(":tools: SodaBot Help")
  .setDescription(`**Prefix:** \`${prefix}\``)
  .addField(
      'Commands',
      '`eval`\nEvaluate some code'
      )
  .setTimestamp()
  .setColor("BLUE");
  if (interaction.isSelectMenu()) {
    if (interaction.customId === 'select') {
		  if (interaction.values[0] === 'miscellaneous') {
        interaction.update({embeds:[mischelp]})
      } else if (interaction.values[0] === 'devtool') {
        interaction.update({embeds:[devhelp]})
      }
	  }
  }
});

client.login(token);