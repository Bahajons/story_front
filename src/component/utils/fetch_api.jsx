// User
import axios from 'axios'
import { API } from './API'

async function register(user) {
    return await axios.post(`${API}/api/register`, { ...user })
}
async function login(user) {
    return await axios.post(`${API}/api/login`, { ...user })
}
async function verify_by_link(id, token) {
    return await axios.get(`${API}/api/verify/${id}/${token}`)
}
async function verify_by_email(id, token) {
    return await axios.get(`${API}/api/verify/${id}/${token}`)
}

export { register, login, verify_by_link, verify_by_email }
