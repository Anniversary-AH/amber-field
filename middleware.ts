// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/cmd_sco') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
