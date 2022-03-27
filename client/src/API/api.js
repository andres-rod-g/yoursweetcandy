import axios from "axios"

const API = 'http://localhost:5000/api'

export const getCandies = () => axios.get(`${API}/candy`)
export const getTags = () => axios.get(`${API}/tags`)

export const findingCandies = (text) => axios.get(`${API}/find?text=${encodeURIComponent(text)}`)

export const postCandies = (data) => axios.post(`${API}/candy`, data)


