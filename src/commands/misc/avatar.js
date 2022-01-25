const name = 'avatar';
const description = 'What\'s your avatar?';

async function execute(client, message) {
  const member = message.mentions.members.first() || message.member
  message.channel.send({
    embeds:[{
      title: 'Your avatar',
      color: 'BLUE',
      image: {
        url: member.displayAvatarURL({ dynamic: true, size: 4096 })
      },
      timestamp: Date()
    }]
  });
}

module.exports = { name, description, execute };
