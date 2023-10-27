'use client'

import { userService } from "@/services/user.service"
import { useMutation, useQuery } from "react-query"


// TODO: make this file a react-query Service 

const useLogin = () => {
    return useMutation({
        //אבא של שמואל
        mutationFn: async (credentials: Credentials) => await userService.login(credentials)
    })

}

// if its not using any of react hooks, it is not a hook, its just a helper function.
// if you are willing to modify this function to use react hooks its ok.
const useLogout = () => {
    return userService.logout()
}

export {
    useLogin,
    useLogout
}

