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



class ReturnTypeDeterminer<T> {
    private result: T | undefined


    constructor(result: T) {
        this.result = result
    }
}


