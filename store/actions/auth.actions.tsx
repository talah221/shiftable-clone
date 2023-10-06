'use client'

import { userService } from '@/services/user.service';
import { logOut, login } from '@/store/reducers/auth.reducer'
import { useDispatch } from 'react-redux'

export const useAuthActions = () => {
    const dispatch = useDispatch();


    const logInAction = (credentials: Credentials) => {
        const { name, isAdmin } = userService.login(credentials)
        return dispatch(login({ name, isAdmin }))
    }

    const logOutAction = () => {
        dispatch(logOut())
        return true
    }
    return [logInAction, logOutAction]
}
