import React from 'react'
import {
	SafeAreaView,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

import logo from '../assets/logo.png'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'

const Main = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={logo} />

			<View style={styles.cardsContainer}>
				<View style={[styles.card, { zIndex: 3 }]}>
					<Image
						style={styles.avatar}
						source={{
							uri:
								'https://avatars1.githubusercontent.com/u/46088089?v=4'
						}}
					/>
					<View style={styles.footer}>
						<Text style={styles.username}>Nubelson Fernandes</Text>
						<Text style={styles.bio} numberOfLines={3}>
							A 22 years old self-taugth Full-Stack Developer with
							Node and React from Angola, currently living in
							Portugal.
						</Text>
					</View>
				</View>

				<View style={[styles.card, { zIndex: 2 }]}>
					<Image
						style={styles.avatar}
						source={{
							uri:
								'https://avatars1.githubusercontent.com/u/46088089?v=4'
						}}
					/>
					<View style={styles.footer}>
						<Text style={styles.username}>Nubelson Fernandes</Text>
						<Text style={styles.bio} numberOfLines={3}>
							A 22 years old self-taugth Full-Stack Developer with
							Node and React from Angola, currently living in
							Portugal.
						</Text>
					</View>
				</View>

				<View style={[styles.card, { zIndex: 1 }]}>
					<Image
						style={styles.avatar}
						source={{
							uri:
								'https://avatars1.githubusercontent.com/u/46088089?v=4'
						}}
					/>
					<View style={styles.footer}>
						<Text style={styles.username}>Nubelson Fernandes</Text>
						<Text style={styles.bio} numberOfLines={3}>
							A 22 years old self-taugth Full-Stack Developer with
							Node and React from Angola, currently living in
							Portugal.
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={styles.button}>
					<Image source={dislike} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Image source={like} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	logo: {
		marginTop: 30
	},
	cardsContainer: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		maxHeight: 500
	},
	card: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		margin: 30,
		overflow: 'hidden',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	avatar: {
		flex: 1,
		height: 300
	},
	footer: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 15
	},
	username: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333'
	},
	bio: {
		fontSize: 14,
		color: '#999',
		marginTop: 5,
		lineHeight: 18
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginBottom: 30
	},
	button: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowRadius: 2,
		shadowOffset: {
			width: 0,
			height: 2
		}
	}
})

export default Main
