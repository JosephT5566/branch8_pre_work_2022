export interface ILayout {
	header: {
		height: string;
	};
	footer: {
		height: string;
	};
}

export const layout = {
	header: {
		height: "5em",
	},
	footer: {
		height: "600px",
	},
} as ILayout;
