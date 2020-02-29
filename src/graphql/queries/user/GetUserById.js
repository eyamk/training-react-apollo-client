import { gql } from 'apollo-boost'

const getuserById = gql`
	query GETUSER_BYID($id: ID!) {
		getuserById(id: $id) {
			photos {
				url
				info
			}
		}
	}
`

export default getuserById
