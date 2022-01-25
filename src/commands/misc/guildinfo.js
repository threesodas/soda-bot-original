const name = 'guildinfo';
const description = 'Get info about the current guild';
const alias = ['gi'];

async function execute(client, message) {
  message.channel.send({
    embeds:[{
      title: 'ℹ Guild Info',
      color: 'YELLOW',
      thumbnail: {
        url: message.guild.iconURL({ dynamic: true })
      },
      fields: [
        {
          name: '💳 Name',
          value: message.guild.name
        },
        {
          name: '🔍 ID',
          value: message.guild.id
        }
      ]
    }]
  });
}

module.exports = { name, description, alias, execute };
