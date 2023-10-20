import axios from "./axios";


export const getUsersRequest= () => axios.get(`/users`)
export const createUserRequest=user => axios.post(`/users`,user)
