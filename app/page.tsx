'use client'

import Login from '@/components/login'
import { useAppSelector } from '@/store/store'
import { useEffect } from 'react'

export default function Home() {
  const loggedInUser = useAppSelector((state) => state.authReducer.loggedInUser)
  useEffect(() => {
  }, [loggedInUser])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />
      {loggedInUser.name && (
        <div>
          <h1>loggedInUser.name</h1>
        </div>
      )}
    </main>
  )
}
