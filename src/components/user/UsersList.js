import React from 'react'
import { get } from 'lodash'
import UserItem from './UserItem'
import UserWrapper from './UserWrapper'
import { useQuery } from '@apollo/react-hooks'
import GET_USERS from '../../graphql/queries/user/GetUsers'

const UsersList = () => {
	const { loading, data } = useQuery(GET_USERS)
	const users = get(data, 'getUsers')
	if (loading) return <p>Loading ...</p>
	return (
		<UserWrapper>
			<div>
				<div className='list'>
					{users.map((el, index) => (
						<UserItem item={el} key={index} />
					))}
				</div>
			</div>
		</UserWrapper>
	)
}

export default UsersList
