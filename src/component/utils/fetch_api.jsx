// User
import axios from 'axios'
import { API } from './API'
import Axios from './Axios'

// ============User============
async function get_all_stories() {
    return await Axios().get(`/api/story`)
}
async function get_detail_story(id) {
    return await Axios().get(`/api/story/detail/${id}`)
}

















export { get_all_stories, get_detail_story }

// =======Admin========
async function register(user) {
    return await Axios().post(`/api/register`, { ...user })
}
async function login(user) {
    return await Axios().post(`/api/login`, { ...user })
}
async function reset(email) {
    return await Axios().post('/api/reset', { ...email })
}
async function setpassword(id, resetPassword, password) {
    return await Axios().post(`/api/reset/${id}/${resetPassword}`, { ...password })
}
async function verify_by_link(id, token) {
    return await axios.get(`${API}/api/verify/${id}/${token}`)
}
async function verify_by_email(id, token) {
    return await axios.get(`${API}/api/verify/${id}/${token}`)
}
export { register, login, reset, setpassword, verify_by_link, verify_by_email }

async function getstory() {
    return await Axios().get(`/api/admin/story`)
}
async function getstorydetail(id) {
    return await Axios().get(`/api/admin/story/detail/${id}`)
}
async function addstory(story) {
    return await Axios().post(`/api/admin/story`, story)
}
async function updatestory(id, story) {
    return await Axios().put(`/api/admin/story/${id}`, story)
}
async function deletestory(id) {
    return await Axios().deleteItem(`/api/admin/story/${id}`)
}
export { addstory, getstory, getstorydetail, updatestory, deletestory }