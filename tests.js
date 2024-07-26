require('dotenv').config();

const Discord = require("discord.js");

const sdbFixStrict = require("./index.js");

const bot = new Discord.Client({
	intents: 47007
});

/**
 * @typedef {((client: any, id: any) => Promise<any>)} GetFunction
*/

bot.once("ready", async (client) => {

	const guild = client.guilds.cache.get('785107327413911592')

	if (!guild) return console.log("no guild");

	const channel = guild.channels.cache.get("1221173259941314730")

	if (!channel || !channel.isTextBased()) return console.log("no channel");

	const message = channel.messages.cache.get("1228799021389320395")

	if (!message) return console.log("no message");

	message.edit({
		components: [
			sdbFixStrict.getActionRowButtons()
				.setComponents(
					new Discord.ButtonBuilder()
						.setCustomId('loveIt')
						.setEmoji('❤')
						.setStyle(Discord.ButtonStyle.Secondary)
				)
		]
	})

	console.log("All tests trying!");

	await client.destroy();
});

bot.login(process.env.token)