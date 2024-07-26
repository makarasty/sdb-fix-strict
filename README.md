# sdb-fix-strict
A library for `discord.js` that fixes `ActionRowBuilder<any>` errors by defining the `ActionRowBuilder` type in CommonJS using JSDoc, intended to help use discord.js along with `“strict”: true` in CommonJS

# Installing
install `npm i sdb-fix-strict`

# That fixes
With out `sdb-fix-strict`:
<br>
![image](https://github.com/user-attachments/assets/543c8f34-3df1-4c2a-946d-ba05eaa37c7e)
<br>
Using `sdb-fix-strict`:
<br>
![image](https://github.com/user-attachments/assets/31e02959-2ad5-457f-9471-f437eada42af)


# Dependencies
- `discord.js` version `14`+
- `Node.js` version `16`+

# Some usage example
```js
const sdbFixStrict = require("./index.js"); // require("sdb-fix-strict");

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

# Functions
```js
const fix_s = require("./index.js"); // require("sdb-fix-strict");

fix_s.getActionRowButtons()
fix_s.getActionRowChannelSelectMenu()
fix_s.getActionRowMentionableSelectMenu()
fix_s.getActionRowRoleSelectMenu()
fix_s.getActionRowStringSelectMenu()
fix_s.getActionRowUserSelectMenu()
fix_s.getActionRowTextInput()
```

*Made with ♥*
