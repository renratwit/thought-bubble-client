import axios from 'axios'

const url = 'http://localhost:5000'

export const getThoughts = () => axios.get(url)

export const createThought = (thoughtData) => axios.post(url, thoughtData)

export const getNeabyThoughts = (long, lat) => axios.get(`${url}/near/${long}/${lat}`)

export const upVote = (thought) => axios.patch(`${url}/${thought._id}/voteUp`)
export const downVote = (thought) => axios.patch(`${url}/${thought._id}/voteDown`)

export const getUser = (userData) => axios.get(url+`/users/${userData.email}`);