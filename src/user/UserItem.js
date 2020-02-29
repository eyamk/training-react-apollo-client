import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const UserItem = ({ item }) => {
	const history = useHistory()
	return (
		<div>
			<div className='item'>
				<img className='photo' src={item.photos} alt=''></img>
				<h4>{item.name}</h4>
				<h4>{item.username}</h4>
				<h4>{item.email}</h4>
				<h4>{item.phone}</h4>
				<h4>{item.gender}</h4>
				<h4>
					<Link
						to='/moreInfo'
						refresh='true'
						onClick={() => history.push('/moreInfo')}
					>
						see more ...
					</Link>
				</h4>
			</div>
			<br /> <br /> <br />
		</div>
	)
}
export default UserItem
