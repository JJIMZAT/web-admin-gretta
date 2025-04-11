import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import AuthService from '@/services/AuthService'
import type { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        usuario: { label: 'Usuario', type: 'text' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null

        try {
          const user = await AuthService.login({
            usuario: credentials.usuario,
            password: credentials.password,
          })

          console.log('User:', user)

          return {
            id: user.usuarioId.toString(),
            name: user.nombre,
            email: user.correo,
            token: user.token,
            refreshToken: user.refreshToken,
            rol: user.rolId,
          }
        } catch {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token
        token.refreshToken = user.refreshToken
        token.rol = user.rol
      }
      return token
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.user.rol = token.rol
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
