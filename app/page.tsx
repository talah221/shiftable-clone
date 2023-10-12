'use client'

import Login from '@/components/login'
import { userService } from '@/services/user.service'
import { useAppSelector } from '@/store/store'
import { useEffect } from 'react'

export default function Home() {
  const loggedInUser = useAppSelector((state) => state.authReducer.loggedInUser)
  const isLoggedIn = userService.isLoggedIn()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!loggedInUser.name && <Login />}
      {loggedInUser.name && (
        <div>
          <h1>Sucess</h1>
        </div>
      )}
    </main>
  )
}
