import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { getAuth } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`


export async function POST(request: NextRequest) {
    const data = await request.json()
    // const auth = getAuth()
    // createUserWithEmailAndPassword(auth, request.body)
    // const secret = request.nextUrl.searchParams.get('secret')
    // const tag = request.nextUrl.searchParams.get('tag')

    return NextResponse.json(data)
    //   todo: Coennect firebase in here
}