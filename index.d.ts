declare module "sdb-fix-strict" {
	import * as Discord from "discord.js";

	type ActionRowData = import("types").ActionRowData;

	function getActionRowButtons(
		data?: ActionRowData,
	): Discord.ActionRowBuilder<Discord.ButtonBuilder>;

	function getActionRowChannelSelectMenu(
		data?: ActionRowData,
	): Discord.ActionRowBuilder<Discord.ChannelSelectMenuBuilder>;

	function getActionRowMentionableSelectMenu(
		data?: ActionRowData,
	): Discord.ActionRowBuilder<Discord.MentionableSelectMenuBuilder>;

	function getActionRowRoleSelectMenu(
		data?: ActionRowData,
	): Discord.ActionRowBuilder<Discord.RoleSelectMenuBuilder>;

	function getActionRowStringSelectMenu(
		data?: ActionRowData,
	): Discord.ActionRowBuilder<Discord.StringSelectMenuBuilder>;

	function getActionRowUserSelectMenu(
		data?: ActionRowData,
	): Discord.ActionRowBuilder<Discord.UserSelectMenuBuilder>;

	function getActionRowTextInput(
		data?: ActionRowData,
	): Discord.ActionRowBuilder<Discord.TextInputBuilder>;
}
