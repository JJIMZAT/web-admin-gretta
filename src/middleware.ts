import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default withAuth(
  function middleware(req: NextRequest) {
    // Aquí puedes hacer validaciones personalizadas si querés
    // const role = req.nextauth.token?.rol
    // if (req.nextUrl.pathname.startsWith('/admin') && role !== 'admin') {
    //   return NextResponse.redirect(new URL('/unauthorized', req.url))
    // }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token // debe haber token (usuario autenticado)
      },
    },
  }
)

export const config = {
    matcher: [
      '/dashboard/:path*',
      '/viajes/:path*',
      '/reportes/:path*',
      '/clientes/:path*',
      '/empresas/:path*',
      // Agregá más rutas privadas acá si querés protegerlas
    ],
  }
