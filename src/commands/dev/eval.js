const name = 'eval';
const description = 'Evaluate some code';

async function execute(client, message, args) {
  const { stripIndents } = require('common-tags');
  const devs = ["493131233514225674", '478823932913516544'];
  if (!devs.includes(message.author.id)) {
    return message.channel.send('n');
  }
  
  try {
    const evaled = await eval(args.join(' '));
    message.channel.send({
      embeds: [{
        title: 'hi',
        description: `\`\`\`js\n${evaled}\`\`\``,
        color: 'BLUE',
        timestamp: Date()
      }]
    });
  } catch (err) {
    message.channel.send({
      embeds: [{
        title: '❌ Just to let you know...',
        description: stripIndents`
          You made a mistake, sunny pal.
          Your error:
          \`\`\`js\n${err.message}\`\`\`
        `,
        color: 'RED',
        timestamp: Date()
      }]
    });
  }
}

module.exports = { name, description, execute };
