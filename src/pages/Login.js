import React, { useEffect, useState } from 'react'
import {
	KeyboardAvoidingView,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	Text,
	Platform,
	AsyncStorage
} from 'react-native'
import { Formik } from 'formik'

import api from '../services/api'

import logo from '../assets/logo.png'

const Login = ({ navigation }) => {
	const [user, setUser] = useState('')

	useEffect(() => {
		AsyncStorage.getItem('user').then(user => {
			if (user) {
				navigation.navigate('Main', { user })
			}
		})
	}, [])

	return (
		<Formik
			initialValues={{ username: user }}
			onSubmit={async ({ username }) => {
				const response = await api.post('/devs', { username })

				const { _id } = response.data

				await AsyncStorage.setItem('user', _id)

				navigation.navigate('Main', { user: _id })
			}}
		>
			{({ handleSubmit, values }) => (
				<KeyboardAvoidingView
					behavior='padding'
					enabled={Platform.OS === 'ios'}
					style={styles.container}
				>
					<Image source={logo} />

					<TextInput
						type='text'
						autoCorrect={false}
						placeholder='Your Github username'
						autoCapitalize='none'
						placeholderTextColor='#999'
						onChangeText={setUser}
						value={(values.username = user)}
						style={styles.input}
					/>
					<TouchableOpacity
						onPress={handleSubmit}
						style={styles.button}
					>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			)}
		</Formik>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 30
	},
	input: {
		height: 46,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 4,
		marginTop: 20,
		paddingHorizontal: 15
	},
	button: {
		height: 46,
		alignSelf: 'stretch',
		backgroundColor: '#df4723',
		borderRadius: 4,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16
	}
})

export default Login
