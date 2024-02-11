import axios from 'axios';
import { Auth, GetThemes } from '.';
import { getThemesGql, loginGql, registerGql, authMeGql } from './gql';

class Strapi {
	private GRAPHQL = import.meta.env.VITE_STRAPI_GRAPHQL;
	private TOKEN = import.meta.env.VITE_STRAPI_DEV_TOKEN;

	async getThemes({
		page = 1,
		pageSize = 10,
		isConfirm = true,
	}: {
		pageSize?: number;
		page?: number;
		isConfirm?: boolean;
	}) {
		const { data } = await axios.post<GetThemes>(`${this.GRAPHQL}`, {
			query: getThemesGql({ page, pageSize, isConfirm }),
			Headers: {
				Authorization: `Bearer ${this.TOKEN}`,
			},
		});

		return data;
	}

	async login({ identifier, password }: { identifier: string; password: string }) {
		const { data } = await axios.post<Auth>(`${this.GRAPHQL}`, {
			query: loginGql({ identifier, password }),
		});

		return data;
	}

	async register({
		username,
		email,
		password,
	}: {
		username: string;
		email: string;
		password: string;
	}) {
		const { data } = await axios.post<Auth>(`${this.GRAPHQL}`, {
			query: registerGql({ username, email, password }),
		});

		return data;
	}

	async authMe({ jwt }: { jwt: string }) {
		const { data } = await axios.post<any>(`${this.GRAPHQL}`, {
			query: authMeGql,
			Headers: {
				Authorization: `Bearer ${jwt}`,
			},
		});

		return data;
	}
}

export default new Strapi();
