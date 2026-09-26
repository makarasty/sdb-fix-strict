const assert = require('node:assert/strict');
const Discord = require('discord.js');

const sdbFixStrict = /** @type {typeof import('./index')} */ (require('./index.js'));

for (const [name, getRow] of Object.entries(sdbFixStrict)) {
	assert.ok(getRow() instanceof Discord.ActionRowBuilder, `${name}() without data`);

	const row = getRow({ components: [] });
	assert.ok(row instanceof Discord.ActionRowBuilder, `${name}() with data`);
	assert.deepEqual(row.toJSON(), { type: Discord.ComponentType.ActionRow, components: [] });
}

assert.equal(
	sdbFixStrict
		.getActionRowButtons()
		.setComponents(new Discord.ButtonBuilder().setCustomId('a').setLabel('a').setStyle(1))
		.toJSON().components.length,
	1,
);

console.log(`ok: ${Object.keys(sdbFixStrict).length} functions`);
