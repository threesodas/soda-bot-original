const name = 'messageCreate';
const once = false;

async function execute(message, client) {
  if (!message.content.startsWith(client.config.prefix) || message.author.bot) {
    return;
  }
  
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  client.commands.get(command)?.execute(client, message, args);

}

module.exports = { name, once, execute };