'use client'

import { userService } from "@/services/user.service"
import { useMutation, useQuery } from "react-query"


// TODO: make this file a react-query Service 

const useLogin = () => {
    return useMutation({
        mutationFn: async (credentials: Credentials) => await userService.login(credentials)
    })

}
const useLogout = () => {
    return userService.logout()
}

export {
    useLogin,
    useLogout
}

