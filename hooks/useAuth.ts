'use client'

import { userService } from "@/services/user.service"
import { useMutation, useQuery } from "react-query"


const useIsLoggedIn = (): boolean => {
    return userService.isLoggedIn()
}

const useLogin = () => {
    return useMutation({
        mutationFn: async (credentials: Credentials) => await userService.login(credentials)
    })

}

export {
    useIsLoggedIn,
    useLogin
}

// const useLogout
