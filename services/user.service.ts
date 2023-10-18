'use client'

import { queryClient } from "@/components/TanstackProvider"
import { fetchService } from "./fetch.service"
import { useQueryClient } from "react-query"


const login = async (credentials: Credentials): Promise<LoggedInUser> => {
    const user: LoggedInUser = { name: 'aa', isAdmin: true }
    const loggedInUser = await fetchService.POST('auth', credentials)
    queryClient.setQueryData('loggedInUser', loggedInUser)
    // console.log('ao')
    return user
}

const logout = () => {
    return { name: '', isAdmin: false }
}

const isLoggedIn = async (): Promise<boolean> => {
    const loggedInUser = queryClient.getQueryData('loggedInUser')
    if (loggedInUser) return true
    else return false

}



export const userService = {
    login,
    logout,
    isLoggedIn
}