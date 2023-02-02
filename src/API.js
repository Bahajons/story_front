import axios from "axios"

export const API = 'http://localhost:5000'

export async function register(user) {
    console.log(user);

    await axios.post(`${API}/api/register`, {...user})
        .then((res) => {
            return res
        })
        .catch((err) => {
            return err
        })
}