import React from 'react'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import GET_USER_BYID from '../graphql/queries/user/GetUserById'
import UserWrapper from './UserWrapper'

const UserInfo = ({ id }) => {
	console.log(id)
	const history = useHistory()
	// const { loading, error } = useQuery(GET_USER_BYID, {
	// 	variables: { id },
	// })

/* 	if (loading) return null
	if (error) return `Error! ${error}` */
	return (
		<UserWrapper>
			<Router>
				<div>
					<Link to='/' onClick={() => history.push('/')}>
						<button className='btn'> back </button>
					</Link>
					{/* <img src={data.getuserById.url} /> */}
				</div>
			</Router>
		</UserWrapper>
	)
}
export default UserInfo
