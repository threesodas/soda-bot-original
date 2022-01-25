const name = 'channelinfo';
const description = '';
const alias = ['ci'];

async function execute(client, message) {
  const channel = message.mentions.channels.first() ?? message.channel;
  message.channel.send({
    embeds: [{
      title: 'ℹ Channel Info',
      color: 'YELLOW',
      fields: [
        {
          name: '💳 Name',
          value: channel.name,
          inline: true
        },
        {
          name: '🔍 ID',
          value: channel.id,
          inline: true
        },
        {
          name: '📰 Topic',
          value: channel.topic ?? 'No topic'
        },
        {
          name: '🔞 NSFW',
          value: channel.nsfw ? 'Yes' : 'No'
        }
      ]
    }]
  });
}

module.exports = { name, description, alias, execute };
