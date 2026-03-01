import * as Discord from 'discord.js';

export type ActionRowData = import('./types').ActionRowData;

export function getActionRowButtons(
	data?: ActionRowData,
): Discord.ActionRowBuilder<Discord.ButtonBuilder>;

export function getActionRowChannelSelectMenu(
	data?: ActionRowData,
): Discord.ActionRowBuilder<Discord.ChannelSelectMenuBuilder>;

export function getActionRowMentionableSelectMenu(
	data?: ActionRowData,
): Discord.ActionRowBuilder<Discord.MentionableSelectMenuBuilder>;

export function getActionRowRoleSelectMenu(
	data?: ActionRowData,
): Discord.ActionRowBuilder<Discord.RoleSelectMenuBuilder>;

export function getActionRowStringSelectMenu(
	data?: ActionRowData,
): Discord.ActionRowBuilder<Discord.StringSelectMenuBuilder>;

export function getActionRowUserSelectMenu(
	data?: ActionRowData,
): Discord.ActionRowBuilder<Discord.UserSelectMenuBuilder>;

export function getActionRowTextInput(
	data?: ActionRowData,
): Discord.ActionRowBuilder<Discord.TextInputBuilder>;
