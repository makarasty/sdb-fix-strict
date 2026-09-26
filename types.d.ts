import * as Discord from 'discord.js';

// Taken from the constructor so it follows whatever discord.js (and discord-api-types) ships.
type ActionRowData = NonNullable<ConstructorParameters<typeof Discord.ActionRowBuilder>[0]>;

export { ActionRowData };
