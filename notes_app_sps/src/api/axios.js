import axios from 'axios'

const instance= axios.create({
    baseURL: 'https://notes-app-server-dzr6.onrender.com/api_notes_app/'})
export default instance