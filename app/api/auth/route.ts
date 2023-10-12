import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function GET() {
    // const secret = request.nextUrl.searchParams.get('secret')
    // const tag = request.nextUrl.searchParams.get('tag')

    return NextResponse.json(true)
    //   todo: Coennect firebase in here
}