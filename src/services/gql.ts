export const getThemesGql = `query {
	themes{
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
