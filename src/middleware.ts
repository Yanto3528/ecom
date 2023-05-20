// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import { withAuth } from 'next-auth/middleware';

// export default withAuth(
//   async (req) => {
//     const { pathname } = req.nextUrl; // relative path

//     // Manage route protection
//     const token = await getToken({ req });
//     const isAuth = !!token;
//     const isAuthPage = req.nextUrl.pathname.startsWith('/auth');

//     const sensitiveRoutes = ['/checkout'];

//     if (isAuthPage) {
//       if (isAuth) {
//         return NextResponse.redirect(new URL('/', req.url));
//       }

//       return null;
//     }

//     if (!isAuth && sensitiveRoutes.some((route) => pathname.startsWith(route))) {
//       return NextResponse.redirect(new URL('/auth/login', req.url));
//     }

//     return null;
//   },
//   {
//     callbacks: {
//       async authorized() {
//         // This is a work-around for handling redirect on auth pages.
//         // We return true here so that the middleware function above
//         // is always called.
//         return true;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ['/', '/auth/:path*', '/checkout'],
// };

import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { Database } from '@/types/database';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });

  const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
  const sensitiveRoutes = ['/checkout'];

  const { data } = await supabase.auth.getSession();
  const isAuthenticated = !!data.session;

  if (isAuthPage) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return null;
  }

  if (!isAuthenticated && sensitiveRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return res;
}
