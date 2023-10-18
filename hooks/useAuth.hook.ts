'use client'

import { userService } from "@/services/user.service"
import { useMutation, useQuery } from "react-query"


const useLogin = (credentials: Credentials) => {
    return useMutation(['loggedInUser'], async () => await userService.login(credentials))
}
const useIsLoggedIn = async (): Promise<boolean> => {
    return await userService.isLoggedIn()
}

export {
    useIsLoggedIn,
    useLogin
}

// const useLogout
