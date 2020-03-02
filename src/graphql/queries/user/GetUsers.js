import { gql } from 'apollo-boost'

const getUsers = gql`
	{
		getUsers {
			id
			name
			username
			email
			phone
			gender
			photos {
				url
				info
			}
		}
	}
`

export default getUsers
