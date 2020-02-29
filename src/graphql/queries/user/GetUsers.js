import { gql } from 'apollo-boost'

const getUsers = gql`
	{
		getUsers {
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
