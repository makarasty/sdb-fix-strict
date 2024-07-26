require('dotenv').config();

const Discord = require("discord.js");

const sdbFixStrict = require("./index.js");

const bot = new Discord.Client({
	intents: 47007
});

bot.once("ready", async (client) => {
	const tests = [
		sdbFixStrict.getActionRowButtons,
		sdbFixStrict.getActionRowChannelSelectMenu,
		sdbFixStrict.getActionRowMentionableSelectMenu,
		sdbFixStrict.getActionRowRoleSelectMenu,
		sdbFixStrict.getActionRowStringSelectMenu,
		sdbFixStrict.getActionRowUserSelectMenu,
		sdbFixStrict.getActionRowTextInput
	].map(async (row) => {
		return {
			name: row.name,
			instanceOfActionRowBuilder: row() instanceof Discord.ActionRowBuilder
		}
	});

	console.log(tests);

	console.log("All tests trying!");

	await client.destroy();
});

bot.login(process.env.token)