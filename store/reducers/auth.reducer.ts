'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {
    loggedInUser: {
        name: '',
        isAdmin: false
    } as LoggedInUser
} as InitialState

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        login: (state, action: PayloadAction<LoggedInUser>) => {
            return {
                loggedInUser: {
                    name: action.payload.name,
                    isAdmin: action.payload.isAdmin
                }
            }
        }
    }
})

export const { logOut, login } = auth.actions
export default auth.reducer