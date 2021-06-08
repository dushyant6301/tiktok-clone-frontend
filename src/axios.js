import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-mern-db.herokuapp.com/"
})

export default instance;