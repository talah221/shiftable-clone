'use client'

import LoginPage from '@/components/login-page'
import { userService } from '@/services/user.service'
// import { useAppSelector } from '@/store/store'
// import { useEffect } from 'react'
import { useIsLoggedIn } from '@/hooks/useAuth.hook'

export default function Home() {
  const isLoggedIn = useIsLoggedIn()
  console.log('hi', isLoggedIn)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {(!isLoggedIn) ? (<LoginPage />) : (<div>
        <h1>Sucess</h1>
      </div>)}
    </main>
  )
}
