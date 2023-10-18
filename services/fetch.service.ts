'use client'

import Axios from "axios"
import Error from "next/error"

const BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : '/api/'
const API_KEY: string = process.env.DATA_API_KEY as string

let axios = Axios.create({
    withCredentials: true
})


export const fetchService = {
    GET(endpoint: string, data: string | object) {
        return api(endpoint, 'GET', data)
    },
    POST(endpoint: string, data: string | object) {
        return api(endpoint, 'POST', data)
    },
    PUT(endpoint: string, data: string | object) {
        return api(endpoint, 'PUT', data)
    },
    DELETE(endpoint: string, data: string | object) {
        return api(endpoint, 'DELETE', data)
    }
}

const api = async (endpoint: string, method: string = 'GET', data: string | object): Promise<any> => {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method: method,
            data: data,
            params: (method === 'GET') ? data : null
        })
        return res
    } catch (error: any) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        console.dir(error)
        if (error.response && error.response.status === 401) { // 401 means luck of authentication and that why we clear the session storage and redirect
            sessionStorage.clear()
            window.location.assign('/')
        }
        throw error
    }
}


