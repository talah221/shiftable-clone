'use client'

import { useLogin } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm'
import { queryClient } from './TanstackProvider';
import { useQueryClient } from 'react-query';
// import { useAuthActions } from '@/store/actions/auth.actions'


export default function LoginPage() {
    // better not to use default imports
    // export function LoginPage
    const [credentials, handleInputChange] = useForm<Credentials>({ email: '', password: '' })
    const loginHook = useLogin();
    const onLogin = async (ev: React.FormEvent) => {
        ev.preventDefault()
        try {
            await loginHook.mutateAsync(credentials as unknown as Credentials) // as unknown as credentials?
        } catch (error) {

        }
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">כניסה למערכת</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={onLogin} className="space-y-6" action="#" method="POST">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input value={credentials.email} onChange={handleInputChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input value={credentials.password} onChange={handleInputChange} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    )
}