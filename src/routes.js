import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import UserInfo from './user/UserInfo'

const Routes = () => {
	return (
		<div className='routes-container'>
			<Route exact path='/' component={Home} />
			<Route exact path='/moreInfo/:id' component={UserInfo} />
		</div>
	)
}

export default Routes
