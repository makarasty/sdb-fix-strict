const Discord = require("discord.js");

/**
 * @returns {Discord.ActionRowBuilder<Discord.ButtonBuilder>}
 */
function getActionRowButtons() {
	return new Discord.ActionRowBuilder()
}

/**
 * @returns {Discord.ActionRowBuilder<Discord.ChannelSelectMenuBuilder>}
 */
function getActionRowChannelSelectMenu() {
	return new Discord.ActionRowBuilder()
}

/**
 * @returns {Discord.ActionRowBuilder<Discord.MentionableSelectMenuBuilder>}
 */
function getActionRowMentionableSelectMenu() {
	return new Discord.ActionRowBuilder()
}

/**
 * @returns {Discord.ActionRowBuilder<Discord.RoleSelectMenuBuilder>}
 */
function getActionRowRoleSelectMenu() {
	return new Discord.ActionRowBuilder()
}

/**
 * @returns {Discord.ActionRowBuilder<Discord.StringSelectMenuBuilder>}
 */
function getActionRowStringSelectMenu() {
	return new Discord.ActionRowBuilder()
}

/**
 * @returns {Discord.ActionRowBuilder<Discord.UserSelectMenuBuilder>}
 */
function getActionRowUserSelectMenu() {
	return new Discord.ActionRowBuilder()
}

/**
 * @returns {Discord.ActionRowBuilder<Discord.TextInputBuilder>}
 */
function getActionRowTextInput() {
	return new Discord.ActionRowBuilder()
}

module.exports = {
	getActionRowButtons,
	getActionRowChannelSelectMenu,
	getActionRowMentionableSelectMenu,
	getActionRowRoleSelectMenu,
	getActionRowStringSelectMenu,
	getActionRowUserSelectMenu,
	getActionRowTextInput
}