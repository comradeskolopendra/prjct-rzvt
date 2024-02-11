export interface GetThemes {
	data: Data;
}

export interface Data {
	themes: Themes;
}

export interface Themes {
	data: Daum[];
	meta: Meta;
}

export interface Daum {
	id: string;
	attributes: Attributes;
}

export interface Attributes {
	isConfirmed: boolean;
	title: string;
	markdown: string;
	media: Media;
	user: User;
}

export interface Media {
	data: any[];
}

export interface User {
	data: Data2;
}

export interface Data2 {
	id: string;
	attributes: Attributes2;
}

export interface Attributes2 {
	username: string;
}

export interface Meta {
	pagination: Pagination;
}

export interface Pagination {
	total: number;
	page: number;
	pageSize: number;
	pageCount: number;
}

// auth
export interface Auth {
	data: Data;
}

export interface Data {
	login: Login;
}

export interface Login {
	jwt: string;
	user: User;
}

export interface User {
	id: string;
	username: string;
}
