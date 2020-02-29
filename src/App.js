import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

const client = new ApolloClient({
	uri: 'http://localhost:4000',
})

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='list'>
				<Router>
					<Routes />
				</Router>
			</div>
		</ApolloProvider>
	)
}

export default App
