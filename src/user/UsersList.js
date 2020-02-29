import React from 'react'
import UserItem from './UserItem'
import UserWrapper from './UserWrapper'
import { useQuery } from '@apollo/react-hooks'
import GET_USERS from '../graphql/queries/user/GetUsers'

const UsersList = () => {
	const { loading, data } = useQuery(GET_USERS)
	if (loading) return <p>Loading ...</p>
	const { getUsers } = data
	return (
		<UserWrapper>
			<div>
				<div className='list'>
					{getUsers.map((el, index) => (
						<UserItem item={el} key={index} />
					))}
				</div>
			</div>
		</UserWrapper>
	)
}

export default UsersList
