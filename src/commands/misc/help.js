const name = 'help';
const description = 'Help.';

async function execute(client, message) {
  message.channel.send({
    embeds: [{
      title: 'âšī¸ SodaBot Help',
      description: 'â Select an item from the dropdown below.',
      color: 'YELLOW',
      timestamp: Date()
    }],
    components: [{
      type: 'ACTION_ROW',
      components: [{
        type: 'SELECT_MENU',
        customId: 'select',
        placeholder: 'Select an item...',
        options: [
          {
            label: 'Misc',
            description: 'Things that aren\'t exactly "fun", but are still useful',
            value: 'miscellaneous',
            emoji: 'đŋ'
          },
          {
            label: 'Developer tools',
            description: 'Things meant for bot developers only',
            value: 'devtool',
            emoji: 'đ ī¸'
          }
        ]
      }]
    }]
  });
}

module.exports = { name, description, execute };
