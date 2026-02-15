const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

app.listen(3000, () => {
  console.log('Web server running');
});

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`✅ Bot online: ${client.user.tag}`);
});

// debug lỗi
client.on('error', console.error);

console.log("Token exists:", process.env.TOKEN ? "YES" : "NO");

client.login(process.env.TOKEN);
