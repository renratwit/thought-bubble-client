import axios from 'axios'

const url = 'http://localhost:5000'

export const getThoughts = () => axios.get(url)

export const createThought = (thoughtData) => axios.post(url, thoughtData)

export const getNeabyThoughts = (long, lat) => axios.get(`${url}/near/${long}/${lat}`)

export const upVote = (thought, user) => axios.patch(`${url}/${thought._id}/${user.email}/voteUp`)
export const downVote = (thought, user) => axios.patch(`${url}/${thought._id}/${user.email}/voteDown`)

export const getUser = (userData) => axios.get(url+`/users/${userData.email}`);

export const postComment = (comment, thought) => axios.patch(`${url}/${thought._id}/${comment}/postComment`)

export const registerUser = (userData) => axios.post(`${url}/user/register/`, userData)

export const loginUser = (userData) => axios.post(`${url}/user/login/`, userData)