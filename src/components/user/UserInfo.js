import React from 'react'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import { get, map } from 'lodash'
import { useQuery } from '@apollo/react-hooks'
import UserWrapper from './UserWrapper'
import GET_USER from '../../graphql/queries/user/GetUserById'

const UserInfo = ({ match }) => {
	const history = useHistory()
	const { data } = useQuery(GET_USER, {
		variables: { id: match.params.id },
		refetchQueries: ['GET_USER'],
	})
	const user = get(data, 'getuserById', [])
	const { photos } = user

	return (
		<UserWrapper>
			<Router>
				<div>
					<Link to='/' onClick={() => history.push('/')}>
						<button className='btn'> back </button>
					</Link>
					{map(photos, photo => (
						<img className='image' src={photo.url} alt='url' />
					))}
				</div>
			</Router>
		</UserWrapper>
	)
}
export default UserInfo
