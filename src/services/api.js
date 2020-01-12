import axios from 'axios'

import { BACKEND_URL } from 'react-native-dotenv'

const api = axios.create({
	baseURL: BACKEND_URL
})

export default api
