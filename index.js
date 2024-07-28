const Discord = require("discord.js");

/**
 * @typedef {import('types').ActionRowData} ActionRowData
 */

/**
 * @param {ActionRowData} data
 * @returns {Discord.ActionRowBuilder<Discord.ButtonBuilder>}
 */
function getActionRowButtons(data) {
	return new Discord.ActionRowBuilder(data)
}

/**
 * @param {ActionRowData} data
 * @returns {Discord.ActionRowBuilder<Discord.ChannelSelectMenuBuilder>}
 */
function getActionRowChannelSelectMenu(data) {
	return new Discord.ActionRowBuilder(data)
}

/**
 * @param {ActionRowData} data
 * @returns {Discord.ActionRowBuilder<Discord.MentionableSelectMenuBuilder>}
 */
function getActionRowMentionableSelectMenu(data) {
	return new Discord.ActionRowBuilder(data)
}

/**
 * @param {ActionRowData} data
 * @returns {Discord.ActionRowBuilder<Discord.RoleSelectMenuBuilder>}
 */
function getActionRowRoleSelectMenu(data) {
	return new Discord.ActionRowBuilder(data)
}

/**
 * @param {ActionRowData} data
 * @returns {Discord.ActionRowBuilder<Discord.StringSelectMenuBuilder>}
 */
function getActionRowStringSelectMenu(data) {
	return new Discord.ActionRowBuilder(data)
}

/**
 * @param {ActionRowData} data
 * @returns {Discord.ActionRowBuilder<Discord.UserSelectMenuBuilder>}
 */
function getActionRowUserSelectMenu(data) {
	return new Discord.ActionRowBuilder(data)
}

/**
 * @param {ActionRowData} data
 * @returns {Discord.ActionRowBuilder<Discord.TextInputBuilder>}
 */
function getActionRowTextInput(data) {
	return new Discord.ActionRowBuilder(data)
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