export const getThemesGql = ({
	page = 1,
	pageSize = 5,
	isConfirm = true,
}: {
	page: number;
	pageSize: number;
	isConfirm: boolean;
}) => {
	return `query {
	themes(
		pagination: {
			page: ${page}
			pageSize: ${pageSize}
		}
		${
			isConfirm &&
			`filters: {
				isConfirmed: {
					eq: true
				}
			}`
		}
	){
		data {
			id
			attributes {
				isConfirmed
				title
				markdown
				media {
					data {
						id
						attributes {
							name
							url
						}
					}
				}
				user {
					data {
						id
						attributes {
							username
						}
					}
				}
			}
		}
		meta {
			pagination {
				total
				page
				pageSize
				pageCount
			}
		}
	}
}`;
};

/*
 * auth
 * block
 */

// login
export const loginGql = ({ identifier, password }: { identifier: string; password: string }) => {
	return `mutation {
		login(input: { identifier: "${identifier}", password: "${password}" }) {
			jwt
			user {
				id
				username
			}
		}
	}`;
};

// register
export const registerGql = ({
	username,
	email,
	password,
}: {
	username: string;
	email: string;
	password: string;
}) => {
	return `mutation {
		register(input: { username: "${username}", email: "${email}", password: "${password}" }) {
			jwt
			user {
				username
				email
			}
		}
	}`;
};

export const authMeGql = `query {
	me {
		id
		username
		email
	}
}`;
