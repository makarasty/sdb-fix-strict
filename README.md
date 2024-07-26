# sdb-fix-strict
A library for `discord.js` that fixes `ActionRowBuilder<any>` errors by defining the `ActionRowBuilder` type in CommonJS using JSDoc, intended to help use discord.js along with `“strict”: true` in CommonJS

# Installing
install `npm i sdb-fix-strict`

# That fixes

# Dependencies
- `discord.js` version `14`+
- `Node.js` version `16`+

# Some usage example
```js
interaction.reply({
	content: 'do you love codding?',
	components: [
		sdbFixStrict.getActionRowButtons()
			.setComponents(
				new Discord.ButtonBuilder()
					.setCustomId('loveCodding')
					.setEmoji('❤')
					.setStyle(Discord.ButtonStyle.Secondary)
			)
	]
})
```

*Made with ♥*