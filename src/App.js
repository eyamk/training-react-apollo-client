import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Router from './Routes/Router'

const client = new ApolloClient({
	uri: 'http://localhost:4000',
})

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='list'>
				<Router />
			</div>
		</ApolloProvider>
	)
}

export default App
