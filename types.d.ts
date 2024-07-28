import * as Discord from "discord.js";

type ActionRowData = Partial<
	| Discord.ActionRowData<
			| Discord.ActionRowComponentData
			| Discord.JSONEncodable<Discord.APIActionRowComponentTypes>
	  >
	| Discord.APIActionRowComponent<
			Discord.APIMessageActionRowComponent | Discord.APIModalActionRowComponent
	  >
>;

export { ActionRowData };
