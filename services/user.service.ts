'use client'

import { queryClient } from "@/components/TanstackProvider"
import { fetchService } from "./fetch.service"


const login = async (credentials: Credentials): Promise<LoggedInUser> => {
    const user = await fetchService.POST('auth', credentials)
    await queryClient.setQueryData('loggedInUser', user);
    return user
}

const logout = () => {
    return { name: '', isAdmin: false }
}

const isLoggedIn = (): boolean => {
    const loggedInUser = queryClient.getQueryData('loggedInUser')
    console.log('checking login', loggedInUser)
    if (loggedInUser) return true
    else return false

}

const getEmptyUser = (): LoggedInUser => {
    return { name: '', isAdmin: false }
}


export const userService = {
    login,
    logout,
    isLoggedIn,
    getEmptyUser
}