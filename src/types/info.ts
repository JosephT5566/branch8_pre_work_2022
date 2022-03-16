interface date {
	date: string;
	timezone: string;
	timezone_type: number;
}

export interface Store {
	image: string;
	title: string;
	description: string;
	date: date;
	phone: string;
	address: string;
	tags: string[];
}

export interface Event {
	image: string;
	title: string;
	description: string;
	date: date;
	tags: string[];
	address: string;
}

export interface News {
	avatar: string;
	title: string;
	date: date;
	description: string;
}
