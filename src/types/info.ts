export interface Date {
	date: string;
	timezone: string;
	timezone_type: number;
}

export interface Store {
	image: string;
	title: string;
	description: string;
	date: Date;
	phone: string;
	address: string;
	tags: string[];
}

export interface Event {
	image: string;
	title: string;
	description: string;
	date: Date;
	tags: string[];
	address: string;
}

export interface News {
	avatar: string;
	name: string;
	title: string;
	date: Date;
	description: string;
}
