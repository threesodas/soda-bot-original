const name = 'ping';
const description = 'pong';

async function execute(client, message) {
  message.channel.send({
    embeds: [{
      title: 'pong',
      description: `${client.uptime}ms`,
      color: 'BLUE'
    }]
  })
}

module.exports = { name, description, execute };
