const name = 'rateme';
const description = 'Rate you on stuff';

async function execute(client, message, args) {
  const { stripIndents } = require('common-tags');
  const random = Math.floor(Math.random() * 101);
  let embed;
  switch (args[0]) {
    case 'cool':
      embed = {
        title: '😎 Coolness meter',
        description: `You are ${random}% cool.\nSo COOL!!!1!11!1`,
        color: 'BLUE',
        timestamp: Date()
      };
      break;

    case 'smart':
      embed = {
        title: '🧠 Smartness meter',
        description: `You are ${random}% smart.\nWhat a big brain.`,
        color: 'BLUE',
        timestamp: Date()
      };
      break;

    case 'funny':
      embed = {
        title: '🤪 Funny meter',
        description: `You are ${random}% funny.\nLOLOLOLOL`,
        color: 'BLUE',
        timestamp: Date()
      };
      break;

    case 'spooky':
      embed = {
        title: '👻 Spookiness meter',
        description: `You are ${random}% spooky.\nBOO!`,
        color: 'BLUE',
        timestamp: Date()
      };
      break;

    case 'sus':
      embed = {
        title: '📮 Sussy meter',
        description: `You are ${random}% sus.\nSUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS!`,
        color: 'BLUE',
        timestamp: Date()
      };
      break;

    default:
      embed = {
        title: ':interrobang: What the HEKC does that mean?',
        description: stripIndents`
          That's not valid arguments. Try again please!
          These are some valid arguments:
          >>> \`cool\` 😎
          \`smart\` 🧠
          \`funny\` 🤪
          \`spooky\` 👻
          \`sus\` 📮
        `,
        color: 'YELLOW',
        timestamp: Date()
      };
      break;
  }

  message.channel.send({
    embeds: [embed]
  });
}

module.exports = { name, description, execute };
