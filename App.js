import React from 'react'
import { StatusBar, YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Unrecognized WebSocket'])

import Routes from './src/routes'

const App = () => {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<Routes />
		</>
	)
}

export default App
