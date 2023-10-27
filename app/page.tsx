'use client'

import LoginPage from '@/components/login-page'
import { userService } from '@/services/user.service'
// import { useAppSelector } from '@/store/store'
// import { useEffect } from 'react'
import { useEffect } from 'react'
// import { useQueryClient } from 'react-query'
import { queryClient } from '@/components/TanstackProvider'

export default function Home() {
  const isLoggedIn = async () => { return await userService.isLoggedIn() }
  // let check = useQueryClient()
  // let checkquery = queryClient.getQueryData('loggedInUser')
  useEffect(() => {
    console.log('in page.tsx', isLoggedIn())

    // if (isLoggedIn) window.location.assign('/')
  }, [])



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {(!isLoggedIn) ? (<LoginPage />) : (<div>
        <h1>Sucess</h1>
      </div>)}
    </main>
  )
}
