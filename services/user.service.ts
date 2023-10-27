'use client'

import { queryClient } from "@/components/TanstackProvider"
import { fetchService } from "./fetch.service"


const login = async (credentials: Credentials): Promise<LoggedInUser> => {
    try {
        // עכשיו כן, אני יכול בעצם לבנות פונקציה שבודקת את הערך שחוזר אם הוא מתאים, ולשים אותו בכל סרוויס בהתאם אבל האם אין דרך לעשות את זה מהסרוויס של הקריאה לסרבר?
        const user = await fetchService.POST<LoggedInUser>('auth', credentials)
        queryClient.setQueryData('loggedInUser', user);
        return user
    } catch (error) {
        throw new Error('unable to login - user service')
    }

}

const logout = () => {
    return { name: '', isAdmin: false }
}

const isLoggedIn = async (): Promise<boolean> => {
    try {
        let loggedInUser = await queryClient.getQueryData('loggedInUser')
        if (!loggedInUser) loggedInUser = await fetchService.GET('user', '')
        await queryClient.setQueryData('loggedInUser', loggedInUser);
        if (loggedInUser) return true
        else return false
    } catch (error) {
        throw new Error('unable to get user from server')
    }


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