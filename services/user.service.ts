'use client'

const login = (credentials: Credentials): LoggedInUser => {
    const user: LoggedInUser = { name: 'aa', isAdmin: true }
    return user
}

export const userService = {
    login
}