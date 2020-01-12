import React, { useEffect } from 'react'
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
	useEffect(() => {
		AsyncStorage.getItem('loggedDev').then(dev => {
			if (dev) {
				navigation.navigate('Main', { dev })
			}
		})
	}, [])

	return (
		<Formik
			initialValues={{ username: '' }}
			onSubmit={async ({ username }, actions) => {
				const response = await api.post('/devs', { username })

				const { _id } = response.data

				await AsyncStorage.setItem('loggedDev', _id)

				navigation.navigate('Main', { _id })
			}}
		>
			{({ handleChange, handleSubmit, values }) => (
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
						onChangeText={handleChange('username')}
						value={values.username}
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
