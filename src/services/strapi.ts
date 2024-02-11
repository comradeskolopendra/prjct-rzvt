import axios from 'axios';
import { GetThemes } from '.';
import { getThemesGql } from './gql';

class Strapi {
	private URL = import.meta.env.VITE_STRAPI_API;
	private GRAPHQL = import.meta.env.VITE_STRAPI_GRAPHQL;
	private TOKEN = import.meta.env.VITE_STRAPI_DEV_TOKEN;

	async getThemes() {
		return axios.post<GetThemes>(`${this.GRAPHQL}`, {
			data: getThemesGql,
			Headers: {
				Authorization: `Bearer ${this.TOKEN}`,
			},
		});
	}
}

export default new Strapi();
