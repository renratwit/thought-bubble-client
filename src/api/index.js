import axios from 'axios'

const url = 'http://localhost:5000'

export const getThoughts = () => axios.get(url)

export const createThought = (thoughtData) => axios.post(url, thoughtData)

export const getNeabyThoughts = (long, lat) => axios.get(`url/near/${long}/${lat}`)