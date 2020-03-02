import { gql } from 'apollo-boost'

const getuserById = gql`
	query GETUSER_BYID($id: ID!) {
		getuserById(id: $id) {
			id
			name
			username
			gender
			email
			photos {
				url
				info
			}
		}
	}
`

export default getuserById
