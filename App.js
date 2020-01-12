import React from 'react'
import { StatusBar } from 'react-native'

import Login from './src/pages/Login'

const App = () => {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<Login />
		</>
	)
}

export default App
