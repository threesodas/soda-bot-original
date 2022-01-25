const name = 'the';
const description = 'the';

async function execute(client, message) {
  const the = ["the", "th", "el"]
  const random = Math.floor(Math.random() * the.length)
  message.channel.send(the[random])
}

module.exports = { name, description, execute };
