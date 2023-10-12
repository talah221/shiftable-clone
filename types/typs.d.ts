'use client'

interface Credentials {
    email: string,
    password: string
}


type InitialState = {
    loggedInUser: LoggedInUser
}

type LoggedInUser = {
    name: string,
    isAdmin: boolean
}

