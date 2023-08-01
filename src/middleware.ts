import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req:NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  const {data:{session},error} = await supabase.auth.getSession()

  if(!session){
    return NextResponse.redirect(new URL('/',req.nextUrl))
}
  return res
}
 
export const config = {
  matcher: [
    '/movies'
  ],
}