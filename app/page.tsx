import Login from '@/components/login'
import { useAppSelector } from '@/store/store'

export default function Home() {
  const loggedInUser = useAppSelector((state) => state.authReducer.loggedInUser)
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
