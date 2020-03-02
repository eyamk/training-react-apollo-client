import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home'
import UserInfo from '../components/user/UserInfo'

const Router = () => (
	<div>
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/user/:id' component={UserInfo} />
				</Switch>
			</div>
		</BrowserRouter>
	</div>
)

export default Router
