# sdb-fix-strict
A library for `discord.js` that fixes `ActionRowBuilder<any>` errors by defining the `ActionRowBuilder` type in CommonJS using JSDoc, intended to help use discord.js along with `“strict”: true` in CommonJS

# Installing
install `npm i sdb-fix-strict`

# That fixes
![image-error](https://github.com/user-attachments/assets/0b9284f8-24d6-4f44-b6aa-e4743913f3d6)
<br>
using `npm i sdb-fix-strict`
<br>
![image](https://github.com/user-attachments/assets/31e02959-2ad5-457f-9471-f437eada42af)


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
