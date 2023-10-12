'use client'
const BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : '/api/'

const login = (credentials: Credentials): LoggedInUser => {
    const user: LoggedInUser = { name: 'aa', isAdmin: true }
    return user
}

const logout = () => {
    return { name: '', isAdmin: false }
}

const isLoggedIn = async () => {
    const isLoggedIn = await fetch(`${BASE_URL}auth`)
    console.log('after fetch', isLoggedIn)
    return 'a'
}

export const userService = {
    login,
    logout,
    isLoggedIn
}