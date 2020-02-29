import { gql } from 'apollo-boost'
const createUser = gql`
	mutation createUser($input: userInput) {
		createUser(input: $input) {
			name
			username
			email
			phone
			gender
		}
	}
`

export default createUser
